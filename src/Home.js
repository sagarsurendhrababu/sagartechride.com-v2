import React, {useReducer}  from 'react'
import WinDesktop from './Component/WinDesktop';
import WinNav from './Component/WinNav';
import Welcome from './Component/Welcome';
import Reducer from './Reducer/Reducer';
import {Data} from './Reducer/Data';
export const Context = React.createContext();

export default function Home() {
  const [state,dispatch] = useReducer(Reducer,Data);  
  return (
    <Context.Provider value={[state,dispatch]}>      
    <div className='App'>
      <Welcome/>        
      <WinDesktop/>
      <WinNav/>
    </div>
  </Context.Provider>
  )
}
