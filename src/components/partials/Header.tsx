import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  changeCondition,
  reset,
  startProgress,
} from "@/redux/progress/progressSlice";
import { AppButton, AppProgress } from "@/components";
import { useInterval } from "@/hooks";
import Generate from "project-name-generator"
import { addProject } from "@/redux/projects/projectsSlice";
import { generateEarnedMoney } from "@/utils/generateEarnedMoney";
import { earnMoney } from "@/redux/business/businessSlice";
import { useEffect } from "react";

function Header() {
  const { condition } = useAppSelector((state) => state.progress);
  const { companyName, developerCount, money } = useAppSelector((state) => state.business);
  const dispatch = useAppDispatch();

  useInterval(
    () => {
      dispatch(startProgress());
    },
    condition === "working on it" ? 10 : null
  );

  const startNewProject = () => {
    if (condition !== "idle") {
      return;
    }
    dispatch(changeCondition("working on it"));
  };

  useEffect(() => {
    if (condition === "done") {
      const newProjectName = Generate({ number: true }).dashed;

      const earnedMoney = generateEarnedMoney({
        complexity: Math.random() * 10,
        clicks: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
        timeTaken: Math.random() * 365,
      });

      dispatch(earnMoney(earnedMoney));

      dispatch(addProject({
        id: crypto.randomUUID(),
        earnedMoney,
        name: newProjectName,
      }));

      dispatch(reset());
    }
  }, [condition, dispatch]);


  return (
    <header className="app-header">
      <div className="company-info">
        <h4>{companyName}</h4>
        <h4>Developer Count: {developerCount}</h4>
        <h4>Budget: <span style={{ color: "green" }}>{money} $</span></h4>
      </div>
      <div className="company-actions">
        <AppButton
          isDisabled={condition === "working on it"}
          title="Code New Project"
          onClick={startNewProject}
        />
        <AppProgress />
      </div>
    </header>
  );
}

export default Header;
