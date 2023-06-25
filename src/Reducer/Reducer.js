import { Data } from "./Data";

function addingValues(array,val){                
    if (!array.includes(val)) {
        array.push(val);
      }      
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
                browserWinArray: addingValues(Data.browserWinArray, action.payload)
            }                          
        default:
            return{
                ...state,
            }
            break;
    }
}
export default Reducer;