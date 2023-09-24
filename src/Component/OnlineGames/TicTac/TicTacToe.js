import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TicTacToe.css';


export default function TicTacToe() {

  useEffect(()=>{
    const items = document.querySelectorAll(".gameCanvasTickTac>span");
    const itemsArray = [];
    const userSelectedArray = [];
    for(var i =0; i<(items.length-1); i++){
        itemsArray.push(i);
    }
    function emptyValue(x){
                return x != 'empty';
    }
    items.forEach((el,i) => {            
        el.addEventListener("click", ()=>{    
                   
            if(!el.hasAttribute("class")){
                el.setAttribute("class","selected");
                delete itemsArray[i];     
                const newArray = itemsArray.filter(emptyValue);
                
                const randumNum = newArray[Math.floor(Math.random() * newArray.length)];
                if(randumNum<9){
                  items[randumNum].setAttribute("class","comSelected");
                }
                delete itemsArray[randumNum];
  
                let matchArray = [
                [1,2,3], [3,2,1], [2,3,1], [2,1,3],
                [3,6,9], [9,6,3], [6,3,9], [9,3,6],
                [9,8,7], [7,8,9], [8,7,9], [8,9,7],
                [7,4,1], [1,4,7], [4,1,7], [4,7,1],
                [4,5,6], [6,5,4], [5,4,6], [5,6,4],
                [2,5,8], [8,5,2], [5,2,8], [5,8,2],
                [7,5,3], [3,5,7], [5,7,3], [5,3,7],
                [1,5,9], [9,5,1], [5,1,9], [5,9,1],
                ]
  
                if(userSelectedArray.length != 3){
                    userSelectedArray.push(parseInt(el.getAttribute('name')));  
                }else{
                    userSelectedArray.push(parseInt(el.getAttribute('name')));
                    matchArray.forEach(items => {
                        const result = items.every(elem => userSelectedArray.includes(elem));
                        if(result == true){
                            document.querySelector(".result").style.visibility="visible";
                            document.querySelector(".result>button").addEventListener("click", ()=>{
                              window. location. reload();
                            });                                
                        }
                    });                        
                }

                matchArray.forEach(items => {
                    if(JSON.stringify(userSelectedArray) === JSON.stringify(items)){                          
                        document.querySelector(".result").style.visibility="visible";
                        document.querySelector(".result>button").addEventListener("click", ()=>{
                          window. location. reload();
                        });                      
                    } 
                });                                                                    
            } 
            const comSelet = document.querySelectorAll('.selected');
            if(comSelet.length > 4){
              document.querySelector(".gameover").style.visibility="visible";
              document.querySelector(".gameover>button").addEventListener("click", ()=>{
                window. location. reload();
              });              
            }
        }); 
                            
    });  
  });

  return (
    <div className='gameCanvas'>
        <div className="container">
            <div className='gameHeader d-flex align-items-center'>
                  <Link to='/' className='d-flex align-items-center text-white backBtn'>
                    <i className="bi bi-backspace"></i>
                    <label className='mx-2'>Back</label>
                  </Link>
                <h5 className='text-white px-5 m-0'>Tic Tac Toe</h5>
            </div>
            <div className='gameContent'>
              <div className="gameCanvasTickTac">
                <div className="result">
                    <h3>You Won!</h3>
                    <button>Restart</button>
                </div>
                <div className="gameover">
                    <h3>Game Over</h3>
                    <button>Restart</button>
                </div>                
                <span name="1"></span>
                <span name="2"></span>
                <span name="3"></span>
                <span name="4"></span>
                <span name="5"></span>
                <span name="6"></span>
                <span name="7"></span>
                <span name="8"></span>
                <span name="9"></span>
              </div>
              <ul className='avathar-games'>
                  <li><span></span><label>You</label></li>
                  <li><span></span><label>Me</label></li>                  
              </ul>                
            </div>
        </div>
    </div>
  )
}
