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

function maxBrowser(index,array,values){
    if(array[index].classList.contains('maximizeBrowser')){
        array[index].classList.remove('maximizeBrowser'); 
        return{
            ...values
        }               
    }else{
        array[index].classList.add('maximizeBrowser'); 
        return{
            ...values
        }       
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
        eles[eles.length-1].style.zIndex = Data.checkBrowserZindex[Data.checkBrowserZindex.length - 1]
    },200);
    
}

function minimizer(index,array,values){
    array[index].classList.add('hideBrowser');
    return{
        ...values
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
            return maxBrowser(action.payload, action.objectArray,state);
        
        case 'browserMinimize':
            return minimizer(action.payload, action.objectArray,state);
      
        case 'tabActionInfo':           
            return{
                ...state,
                myinfo:action.payload,
                emailAccount:false,
                socialMedia:false, 
                vision:false, 
                history:false,
                goal:false,              
            } 
        case 'tabActionEmail':           
            return{
                ...state,
                emailAccount:action.payload,
                myinfo:false, 
                socialMedia:false,
                vision:false, 
                history:false,
                goal:false,                
            }             
        case 'tabActionSocial':
            return{
                ...state,
                socialMedia:action.payload,
                emailAccount:false, 
                myinfo:false,  
                vision:false, 
                history:false,
                goal:false,                            
            }  
        case 'tabActionObjective':
            return{
                ...state,
                objective:action.payload,
                workExp:false,
                skills:false,
                portfolio:false,
                education:false,                
        }
        case 'tabActionWorkExp':
            return{
                ...state,
                workExp:action.payload,
                objective:false,
                skills:false,
                portfolio:false,
                education:false,               
        }
        case 'tabActionSkills':
            return{
                ...state,
                skills:action.payload,
                objective:false,
                workExp:false,
                portfolio:false,
                education:false,              
        }
        case 'tabActionPortfolio':
            return{
                ...state,
                portfolio:action.payload,
                objective:false,
                workExp:false,
                skills:false,
                education:false,               
        } 
        case 'tabActionEducation':
            return{
                ...state,
                education:action.payload,
                objective:false,
                workExp:false,
                skills:false,
                portfolio:false,               
        } 
        case 'tabActionVision':
            return{
                ...state,
                vision:action.payload,
                emailAccount:false, 
                myinfo:false, 
                socialMedia:false, 
                history:false,
                goal:false,                
            }
        case 'tabActionHistory':
            return{
                ...state,
                history:action.payload,
                emailAccount:false, 
                myinfo:false, 
                socialMedia:false, 
                vision:false, 
                goal:false,             
            }
        case 'tabActionGoal':
            return{
                ...state,
                goal:action.payload,
                emailAccount:false, 
                myinfo:false, 
                socialMedia:false,
                vision:false, 
                history:false,               
            } 
        case 'bigImageAction':
            return{
                ...state,
                bigImg:action.payload,
                imgName:action.path,
            }                                                                                                                   
        default:
            return{
                ...state,
            }
            break;
    }
}
export default Reducer;