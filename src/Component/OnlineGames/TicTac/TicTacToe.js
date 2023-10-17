import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TicTacToe.css';


export default function TicTacToe() {

  useEffect(()=>{
/////////////////////////////////////////Main Variables/////////////////////////////////////////////
let boxNums = [0,1,2,3,4,5,6,7,8];

let selectedBox = [];
let remainBox = [];
let matchValues = [];

let matchPossibleBox = [[0,1,2],[2,5,8],[8,7,6],[6,3,0],[3,4,5],[1,4,7],[6,4,2],[0,4,8],
[1,5,9],[1,3,9],[3,7,9],[7,5,9],[6,5,9],[8,3,9],[8,1,9],[1,6,9],[7,0,9],[7,2,9],[0,5,9],[3,2,9]];
let matchPossibleBox3 = [[0,1,2],[2,5,8],[8,7,6],[6,3,0],[3,4,5],[1,4,7],[6,4,2],[0,4,8]];

let userWin = 0;
let comWin = 0;
let tieGame = 0;

let mineScore = document.querySelector(".mineScore");
let yourScore = document.querySelector(".yourScore");
let tieScore = document.querySelector(".tieScore");

let mineScorefinal = document.querySelector(".mineScorefinal");
let yourScorefinal = document.querySelector(".yourScorefinal");
let tieScorefinal = document.querySelector(".tieScorefinal");        

const boxes = document.querySelectorAll('.gameBox>li');
const boxesBefore = document.querySelector('.gameBox');
const tryButton = document.querySelector('.declareBtn>button');
const declareBox = document.querySelector('.declareBtn');
let gameBoxBanner = document.querySelector('.gameBoxBanner');
document.querySelector(".startNew").addEventListener("click", ()=> {window.location.reload()})

/////////////////////////////////////////Main Variables/////////////////////////////////////////////

/////////////////////////////////////////Random Search/////////////////////////////////////////////
function randomSelectBox(){
    const randomeNum = remainBox[Math.floor(Math.random()*remainBox.length)];
    setTimeout(()=> boxes[randomeNum].setAttribute('class','comSelected') , 300);
    delete boxNums[randomeNum];                                 
}    
/////////////////////////////////////////Random Search/////////////////////////////////////////////

/////////////////////////////////////////Box Click Section/////////////////////////////////////////////
    boxes.forEach((e,i) => {            
    e.addEventListener('click', ()=>{  
        let tieResult = [];          
///////////////////////////////////////////////////////select 1//////////////////////////////////
        if(!e.hasAttribute('class')){
            e.setAttribute('class','selected');
            if(!selectedBox.includes(i)){
                selectedBox.push(i);
                delete boxNums[i]; 
            }
            remainBox = boxNums.filter(e => e !== 'empty');
            if(remainBox.length>1){
////////////////////////////////////////////////select 2///////////////////////////////////////
                if(selectedBox.length === 2){                           
                    matchPossibleBox.forEach(items => {
                        const matchingItems = items.filter(e => !selectedBox.includes(e));
                        if(matchingItems.length === 1){
                            if(matchingItems[0] === 9){
                                randomSelectBox();       
                                remainBox = boxNums.filter(e => e !== 'empty');
                            }else{
                                if(remainBox.includes(matchingItems[0])){
                                    boxes[matchingItems[0]].setAttribute('class','comSelected span');
                                    delete boxNums[matchingItems[0]];                                             
                                }else{
                                    randomSelectBox();       
                                    remainBox = boxNums.filter(e => e !== 'empty');
                                }
                            }                                    
                        }else if(matchingItems.length === 0){
                            //console.log('somebody win')
                        }
                    })
                }
////////////////////////////////////////////////select 3///////////////////////////////////////
                else if(selectedBox.length === 3){
                    matchPossibleBox3.forEach(items => {
                        const matchingItems = items.filter(e => !selectedBox.includes(e));  
                        if(matchingItems.length === 1){                                     
                            if(remainBox.includes(matchingItems[0])){   
                                matchValues.push(matchingItems[0]);                                                                      
                            }
                        }
                    });
                        if(matchValues.length === 1){                                    
                            boxes[matchValues[0]].setAttribute('class','comSelected > span');
                            delete boxNums[matchValues[0]];                                     
                        }else if(matchValues.length === 2){                                    
                            const selectOneValue = matchValues[Math.floor(Math.random()*matchValues.length)];
                            boxes[selectOneValue].setAttribute('class','comSelected span');
                            delete boxNums[selectOneValue];                                    
                        }else if(matchValues.length === 0){                                    
                            randomSelectBox(); 
                        }                            
                }
////////////////////////////////////////////////select 4///////////////////////////////////////
                else if(selectedBox.length === 4){
                    matchPossibleBox3.forEach(items => {
                        const matchingItems = items.filter(e => !selectedBox.includes(e));  
                        if(matchingItems.length === 1){                                     
                            if(remainBox.includes(matchingItems[0])){  
                                matchValues.push(matchingItems[0]);                                                                      
                            }
                        }
                    });                            
                    const uniqueArray = [];
                    for (let i = 0; i < matchValues.length; i++) {
                        if (!uniqueArray.includes(matchValues[i])) {
                            uniqueArray.push(matchValues[i]);
                        }
                    }
                    if(uniqueArray.length === 1){
                        randomSelectBox();                                 
                    }else if(uniqueArray.length === 2){                                
                        const howmanyIncludes = [];
                        uniqueArray.forEach(e => {                                    
                            if(remainBox.includes(e)){
                                howmanyIncludes.push(e);
                                if(howmanyIncludes.length === 1){
                                    boxes[howmanyIncludes[0]].setAttribute('class','comSelected > span');
                                    delete boxNums[howmanyIncludes[0]];
                                }else if(howmanyIncludes.length === 2){
                                    const selectdoneValue = howmanyIncludes[Math.floor(Math.random()*howmanyIncludes.length)];
                                    boxes[selectdoneValue].setAttribute('class','comSelected > span');
                                    delete boxNums[selectdoneValue];                                                                                       
                                }                    
                            }
                        })
                    }else if(uniqueArray.length === 3){ 
                        const checkAvailableValues = [];
                        uniqueArray.forEach(e => {
                            if(remainBox.includes(e)){
                                checkAvailableValues.push(e);
                            }
                        })
                        const foundOneVal = checkAvailableValues[Math.floor(Math.random()*checkAvailableValues.length)];
                        boxes[foundOneVal].setAttribute('class','comSelected > span');
                        delete boxNums[foundOneVal];                                
                    }
                    else if(uniqueArray.length === 0){
                        randomSelectBox();                                                            
                    }
                }                      
                else{
                    randomSelectBox();                            
                    remainBox = boxNums.filter(e => e !== 'empty');
                }
            }                       

        }
////////////////////////////////////////////////Game Result Fn///////////////////////////////////////
        function gameResult(){
            const userSelect = document.querySelectorAll('.selected > span');
            const comSelect = document.querySelectorAll('.comSelected > span');

            let userSelectedArray = [];
            let comSelectedArray = [];

            userSelect.forEach((e,i) => {
                userSelectedArray.push(parseInt(e.innerHTML));
            });

            comSelect.forEach((e,i) => {
                comSelectedArray.push(parseInt(e.innerHTML));
            });                    
            
                                
            matchPossibleBox3.forEach(val => {
                const userValues = [];
                const comValues = [];


               ////////////////////////////////////////////////////////////////////
                if(userSelectedArray.length >= 3){
                    for (const item of val) {
                            if(userSelectedArray.includes(item)){
                                userValues.push(item);
                            }
                    }
                }
                ////////////////////////////////////////////////////////////////////
                if(comSelectedArray.length >= 3){
                    for (const item of val) {
                            if(comSelectedArray.includes(item)){
                                comValues.push(item);
                            }
                    }
                }                        
                /////////////////////////////////won message////////////////////////
                tieResult.push(userValues.length === 3);

                if(remainBox.length !== 0){ 
                    if(userValues.length === 3){
                    matchBoxIndicator(userValues); 
                    console.log('user Won');                            
                    userWin++
                    yourScore.innerHTML = userWin;
                    yourScorefinal.innerHTML = userWin;
                    yourScore.style.color = "#FFC917";
                    boxesBefore.classList.add('gameBoxClickDisable');
                    declareBox.style.visibility="visible";
                    }
                    if(comValues.length === 3){
                    console.log('sagar Won');
                    matchBoxIndicator(comValues); 
                    comWin++
                    mineScore.innerHTML = comWin;
                    mineScorefinal.innerHTML = comWin;
                    mineScore.style.color = "#FFC917";
                    boxesBefore.classList.add('gameBoxClickDisable');
                    declareBox.style.visibility="visible";
                    } 
                }
                /////////////////////////////////won message////////////////////////
            });                                     
        }
        gameResult();
        if(remainBox.length === 0){
            if(tieResult.includes(true)){
                const userSelect = document.querySelectorAll('.selected>span');
                const comSelect = document.querySelectorAll('.comSelected>span');

                let userSelectedArray = [];
                let comSelectedArray = [];

            userSelect.forEach((e,i) => {
                userSelectedArray.push(parseInt(e.innerHTML));
            });

            comSelect.forEach((e,i) => {
                comSelectedArray.push(parseInt(e.innerHTML));
            });                                                      
            matchPossibleBox3.forEach(val => {
                const userValues = [];
                const comValues = [];

               ////////////////////////////////////////////////////////////////////
                if(userSelectedArray.length >= 3){
                    for (const item of val) {
                            if(userSelectedArray.includes(item)){
                                userValues.push(item);
                            }
                    }
                }
                ////////////////////////////////////////////////////////////////////
                if(comSelectedArray.length >= 3){
                    for (const item of val) {
                            if(comSelectedArray.includes(item)){
                                comValues.push(item);
                            }
                    }
                } 
                if(userValues.length === 3){
                    console.log('user Won');                             
                    matchBoxIndicator(userValues);                     
                    userWin++
                    yourScore.innerHTML = userWin;
                    yourScorefinal.innerHTML = userWin;
                    yourScore.style.color = "#FFC917";
                    boxesBefore.classList.add('gameBoxClickDisable');
                    declareBox.style.visibility="visible";
                    }
                    if(comValues.length === 3){
                    console.log('sagar Won');                            
                    matchBoxIndicator(comValues); 
                    comWin++
                    mineScore.innerHTML = comWin;
                    mineScorefinal.innerHTML = comWin;
                    mineScore.style.color = "#FFC917";
                    boxesBefore.classList.add('gameBoxClickDisable');
                    declareBox.style.visibility="visible";
                    } 

                 });

            }else{
                console.log('tie');
                tieGame++
                tieScore.innerHTML = tieGame;
                tieScorefinal.innerHTML = tieGame;
                tieScore.style.color = "#FFC917";
                boxesBefore.classList.add('gameBoxClickDisable');
                declareBox.style.visibility="visible";
            }
        }
////////////////////////////////////////////////Final Result Fn///////////////////////////////////////
        if(userWin === 3){
            document.querySelector('.winnerMessage').innerHTML = "Congratulations!";
            document.querySelector('.winnerMessageDesc').innerHTML = "You Won the game";
            setTimeout(()=>{gameBoxBanner.style.visibility="visible"; },500);  
            txtColorChange("#ffcb19","#000",2);
            declareBox.style.visibility = "hidden";
        }else if(comWin === 3){
            document.querySelector('.winnerMessage').innerHTML = "I'm Won!";
            document.querySelector('.winnerMessageDesc').innerHTML = "You must try again";
            setTimeout(()=>{gameBoxBanner.style.visibility="visible"; },500);  
            txtColorChange("#ffcb19","#000",1);                               
            declareBox.style.visibility = "hidden";   
        }else if(tieGame === 3){           
            document.querySelector('.winnerMessage').innerHTML = "Game Over!";
            document.querySelector('.winnerMessageDesc').innerHTML = "None of them a victory in the game!";            
            setTimeout(()=>{gameBoxBanner.style.visibility="visible"; },500);   
            declareBox.style.visibility = "hidden";                
            txtColorChange("#ffcb19","#000",3);                   
        }
////////////////////////////////////////////////Final Result Fn///////////////////////////////////////
    })
});
// ////////////////////////////////////////////// winner box indicator///////////////////////////////////////
function matchBoxIndicator(matchvalue){
    matchvalue.forEach(e => {
        boxes[e].style.animation = "IndicatorSelect 500ms ease forwards";                
    });
}
////////////////////////////////////////////////Clear Game///////////////////////////////////////
tryButton.addEventListener('click', ()=>{
            clearGame();
            boxesBefore.classList.remove('gameBoxClickDisable');
            declareBox.style.visibility = "hidden";
});            
//-----------------------------------------------------------------------------
function clearGame(){
    console.log('clear Working');
    boxes.forEach(e => {
        e.removeAttribute('class');
        e.removeAttribute('style');
    });  
    
    boxNums = [];
    for(var i=0; i<9; i++){
        boxNums.push(i);
    }

    selectedBox = [];
    matchValues = [];            
    remainBox = [];

}
//-----------------------------------------------------------------------------           
////////////////////////////////////////////////Color Change///////////////////////////////////////
function txtColorChange(col1,col2,pos){
document.querySelector(`.gameBoxBanner ul>li:nth-child(${pos})`).style.backgroundColor = col1;
document.querySelector(`.gameBoxBanner ul>li:nth-child(${pos})`).style.color = col2;
}

  });

  return (
    <div className='gameCanvas'>
    <div className="container">
        <div className='gameHeader d-flex align-items-center'>
              <Link to='/' className='d-flex align-items-center text-white backBtn'>
                <i className="bi bi-backspace"></i>
                <label className='mx-2'>Back</label>
              </Link>
            <h5 className='text-white px-5 m-0'></h5>
        </div>
        <div className='gameContent'>
          <div className='psotionRela'>
              <div className="gameBoxBanner">
                <h1 className="winnerMessage"></h1>
                <p className="winnerMessageDesc"></p>
                <ul>
                  <li>
                    <h4>Sagar</h4>
                    <h2><span className="mineScorefinal">0</span> <span>Points</span></h2>
                  </li>
                  <li>
                    <h4>You</h4>
                    <h2><span className="yourScorefinal">0</span> <span>Points</span></h2>
                  </li>
                  <li>
                    <h4>Tie</h4>
                    <h2><span className="tieScorefinal">0</span> <span>Points</span></h2>
                  </li>                                
                </ul>
              <button className="startNew">Start New</button>
              </div>            
            <div className="gameScoreConsole">
              <div className="titleCanva">
                <p>Tic-Tac-Toe Triple Triumph</p>         
              </div>       
              <ul className="gameScore">
                <li>
                  <h3><label>Sagar</label><span className="mineScore">0</span></h3>
                </li>
                <li>
                  vs
                </li> 
                <li>
                  <h3><label>You</label><span className="yourScore">0</span></h3>
                </li>    
                <li>
                  <h3><label>Tie</label><span className="tieScore">0</span></h3>
                </li>                         
              </ul>
            </div>

            <ul className="gameBox">
              <li><span>0</span></li>
              <li><span>1</span></li>
              <li><span>2</span></li>
              <li><span>3</span></li>
              <li><span>4</span></li>
              <li><span>5</span></li>
              <li><span>6</span></li>
              <li><span>7</span></li>
              <li><span>8</span></li>
            </ul>
            
            <div className="tryAgain">
              <div className="declareBtn">
                <button>Continue</button> 
                <p>Declare the Champion with Three Wins Bestowed!</p>                       
              </div>
            </div>  
          </div>                                         
        </div>        
    </div>
</div> 

  )
}
