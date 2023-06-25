import React, {useReducer} from 'react';
import WinDesktop from './Component/WinDesktop';
import WinNav from './Component/WinNav';
import Reducer from './Reducer/Reducer';
import {Data} from './Reducer/Data';
export const Context = React.createContext();

function App() {
  const [state,dispatch] = useReducer(Reducer,Data);  
  return (
    <Context.Provider value={[state,dispatch]}>
      <div className='App'>
        <WinDesktop/>
        <WinNav/>
      </div>
    </Context.Provider>
  );
}

export default App;
