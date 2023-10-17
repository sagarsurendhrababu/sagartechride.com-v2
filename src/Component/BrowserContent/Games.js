import React, { useContext } from 'react'
import { Context } from '../../Home'
import { Link } from 'react-router-dom';

export default function Games() {
  const [state,dispatch] = useContext(Context);
  return (
    <div className='row g-2' id='portfolio'>      
        <div className='col-sm-6'>
            <div className='p-3 border bg-light d-flex flex-column'>
              <Link to="/alligator" routerLinkActive="active"><img src='./IMG/toothDendist.jpg'/></Link>
              <h6 className='p-0 mt-2 m-0'>Alligator Dentist Tooth</h6>
            </div>
        </div>
        <div className='col-sm-6'>
            <div className='p-3 border bg-light d-flex flex-column'>
              <Link to="/tictactoe" routerLinkActive="active"><img src='./IMG/tictactoe.jpg'/></Link>
              <h6 className='p-0 mt-2 m-0'>Tic Tac Toe</h6>          
            </div>
        </div>
    </div>
  )
}
