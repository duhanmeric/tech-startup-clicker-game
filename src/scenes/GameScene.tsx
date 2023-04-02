import { useAppSelector } from '@/redux/hooks';
import { AppTable, Header } from '@/components'

type GameSceneProps = {}

const GameScene = (props: GameSceneProps) => {
  const { projects } = useAppSelector((state) => state.projects);

  return (
    <div className="container">
      <Header />
      <AppTable
        headers={["Id", "Project Name", "Earned Money"]}
        body={projects.map((project, index) => [
          index.toString(),
          project.name,
          project.earnedMoney + " $"
        ])} />
    </div>
  )
}

export default GameScene