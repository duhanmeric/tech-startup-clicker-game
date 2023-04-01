import { useState } from 'react'
import EntryScene from './EntryScene'
import GameScene from './GameScene'

export type SceneKey = 'entry' | 'game'

const scenesMap: Record<SceneKey, React.ComponentType<any>> = {
  entry: EntryScene,
  game: GameScene,
}

const Root = () => {
  const [scene, setScene] = useState<SceneKey>('entry')

  const handleScene = (value: SceneKey) => {
    setScene(value)
  }

  const renderScene = () => {
    const SceneComponent = scenesMap[scene]
    return <SceneComponent handleScene={handleScene} />
  }

  return (
    <>{renderScene()}</>
  )
}

export default Root