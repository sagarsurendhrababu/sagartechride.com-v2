import React, {useReducer} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import WinDesktop from './Component/WinDesktop';
import WinNav from './Component/WinNav';
import Welcome from './Component/Welcome';
import Reducer from './Reducer/Reducer';
import {Data} from './Reducer/Data';
import TicTacToe from './Component/OnlineGames/TicTac/TicTacToe';
import AlligatorDentistTooth from './Component/OnlineGames/Alligator/AlligatorDentistTooth';
export const Context = React.createContext();

function App() {
  const [state,dispatch] = useReducer(Reducer,Data);  

  return (
  <>    
    <BrowserRouter>
      <Routes>
          <Route path='/' element={
              <Context.Provider value={[state,dispatch]}>      
                <div className='App'>
                  <Welcome/>        
                  <WinDesktop/>
                  <WinNav/>
                </div>
              </Context.Provider>
          }></Route>
          <Route path='/tictactoe' element={<TicTacToe/>}></Route>
          <Route path='/alligator' element={<AlligatorDentistTooth/>}></Route>
      </Routes>
    </BrowserRouter>          
  </>
  );
}

export default App;
