import "./index.css";
import { AppTable, Header } from "@/components";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { projects } = useAppSelector((state) => state.projects);

  return (
    <div className="app">
      <div className="container">
        <Header />
        <AppTable
          headers={["Id", "Project Name", "Earned Money"]}
          body={projects.map((project, index) => [
            index.toString(),
            project.name,
            project.earnedMoney.toString()
          ])} />
      </div>
    </div>
  );
}

export default App;
