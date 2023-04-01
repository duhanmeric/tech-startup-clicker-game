import { useState } from 'react'
import { updateCompanyName } from '@/redux/business/businessSlice';
import { useAppDispatch } from '@/redux/hooks'
import { SceneKey } from './Root';

type EntrySceneProps = {
  handleScene: (value: SceneKey) => void;
}

const EntryScene = (props: EntrySceneProps) => {
  const dispatch = useAppDispatch();

  const [companyName, setCompanyName] = useState("")

  const handleStart = () => {
    dispatch(updateCompanyName(companyName))
    props.handleScene('game');
  }
  return (
    <div className='container'>
      <input onChange={(e) => setCompanyName(e.target.value)} type="text" />
      <br />
      <br />
      <button onClick={() => handleStart()}>Start the game</button>
    </div>
  )
}

export default EntryScene