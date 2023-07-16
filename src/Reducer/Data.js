export  const Data = {
    mainStart : false,
    winStart : false,
    designSec:false,
    devSec:false,
    cmsSec:false,
    browserWinArray:[],
    checkBrowserZindex:[],
    myinfo:true, 
    emailAccount:false, 
    socialMedia:false,
}

setInterval(()=>{
    console.log(Data.myinfo);
},2000)