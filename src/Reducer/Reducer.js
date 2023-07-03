import { type } from "@testing-library/user-event/dist/type";
import { Data } from "./Data";


function addingValues(array,val){                
    if (!array.includes(val)) {
        array.push(val);
      }      
}
function removeValues(array,val){ 
    var index = array.indexOf(val);              
    if (index !== -1) {
        array.splice(index, 1);
      }         
}

function maxBrowser(index,array){
    if(array[index].classList.contains('maximizeBrowser')){
        array[index].classList.remove('maximizeBrowser');
    }else{
        array[index].classList.add('maximizeBrowser');
    }       
}

function checkBigZindex(){
    let ele = document.querySelectorAll(".browserWin");
    let lastBrowser = ele[ele.length-1];
    if(lastBrowser != undefined){   
        let calcValue = parseInt(lastBrowser.style.zIndex)+1;     
        Data.checkBrowserZindex.push(calcValue);                       
    }
    setTimeout(()=>{
        let eles = document.querySelectorAll(".browserWin");
        console.log(eles[eles.length-1].style.zIndex = Data.checkBrowserZindex[Data.checkBrowserZindex.length - 1])
    },200);
    
}

function minimizer(index,array){
    array[index].classList.add('hideBrowser');
}

function Reducer(state,action) {  
    
    switch (action.type) {
        case 'MainStartBtn':
            return {
                ...state,
                mainStart: true
            }
        case 'WinStartBtn':
            return {
                ...state,
                winStart: action.payload
            }            
        case 'designSection':
            return{
                ...state,
                designSec:action.payload
            }
        case 'devSection':
            return{
                ...state,
                devSec:action.payload
        }
        case 'cmsSection':
            return{
                ...state,
                cmsSec:action.payload
        }  
        case 'browserWinArray':            
            return{
                ...state,
                browserWinArray: addingValues(Data.browserWinArray, action.payload),
                winStart:false,
                checkBrowserZindex:checkBigZindex()                
            } 
            
        case 'browserClose':            
        return{
            ...state,
            browserWinArray: removeValues(Data.browserWinArray, action.payload),            
        }  
        case 'browserMaximize':
            return maxBrowser(action.payload, action.objectArray);
        
        case 'browserMinimize':
            return minimizer(action.payload, action.objectArray);
      

        default:
            return{
                ...state,
            }
            break;
    }
}
export default Reducer;