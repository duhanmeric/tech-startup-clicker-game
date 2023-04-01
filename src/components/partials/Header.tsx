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

function Header() {
  const { condition } = useAppSelector((state) => state.progress);
  const { companyName, developerCount } = useAppSelector((state) => state.business);
  const dispatch = useAppDispatch();

  useInterval(
    () => {
      dispatch(startProgress());
    },
    condition === "working on it" ? 10 : null
  );

  const startNewProject = () => {
    const newProjectName = Generate({ number: true }).dashed;

    const earnedMoney = generateEarnedMoney({
      complexity: 5,
      clicks: 2000,
      timeTaken: 30,
    });

    dispatch(addProject({
      id: crypto.randomUUID(),
      earnedMoney,
      name: newProjectName
    }))

    if (condition === "done") {
      dispatch(reset());
      return;
    }
    dispatch(changeCondition("working on it"));
  };

  return (
    <header className="app-header">
      <div className="company-info">
        <h4>{companyName}</h4>
        <h4>Developer Count: {developerCount}</h4>
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
