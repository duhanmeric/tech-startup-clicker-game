import useInterval from "../../hooks/useInterval";
import { useAppDispatch, useAppSelector } from "../../redux/hookts";
import {
  changeCondition,
  reset,
  startProgress,
} from "../../redux/progress/progressSlice";
import AppButton from "../app-components/AppButton";
import Progress from "../app-components/AppProgress";

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
      <Progress />
    </header>
  );
}

export default Header;
