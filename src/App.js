import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import TicTacToe from './Component/OnlineGames/TicTac/TicTacToe';
import AlligatorDentistTooth from './Component/OnlineGames/Alligator/AlligatorDentistTooth';

function App() {
  return (
  <>    
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/tictactoe' element={<TicTacToe/>}></Route>
          <Route path='/alligator' element={<AlligatorDentistTooth/>}></Route>
      </Routes>
    </BrowserRouter>          
  </>
  );
}

export default App;
