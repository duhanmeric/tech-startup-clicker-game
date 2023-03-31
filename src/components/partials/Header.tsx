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
      <AppButton
        isDisabled={condition === "working on it"}
        title="Code New Project"
        onClick={startNewProject}
      />
      <AppProgress />
    </header>
  );
}

export default Header;
