function makebubble(){

    var clutter = "" ;

    for(var i=1 ;  i<120 ; i++){
        var rnumber= Math.floor(Math.random()*100);
        clutter  += `<div id="dabba"> ${rnumber} </div>`;
    
    }
    document.querySelector("#pbot").innerHTML=clutter;
    
}
 
let timer =30;
var timerint;
function runTimer(){
     timerint =  setInterval(function(){
        if(timer>0){

            timer--;
            document.querySelector(".timerval").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbot").innerHTML = `<h1> G A M E     O V E R <h1>`;
            alert(` Your Final Score is  ${score}`)
        }
          
    }, 1000);
}

var rn;

function getnewhit(){
    rn= Math.floor(Math.random()*100);
   document.querySelector(".newhit").textContent=rn;
}


var score=0;
function increaseScore(){
    score+=10;
  document.querySelector(".newscore").textContent=score;  

}


document.querySelector("#pbot").addEventListener("click",function(dets){
    // alert("chal raha h")

   var clickednum =  Number(dets.target.textContent);
   if(clickednum == rn){ 
    increaseScore();
    getnewhit();
    makebubble();


  }
  
})









document.querySelector("#endbut").addEventListener("click",function(e){
    clearInterval(timerint);
    // document.querySelector(".timerval").textContent=0;
    document.querySelector("#pbot").innerHTML = `<h1> G A M E     O V E R <h1>`;
    alert(`Your final score is ${score}` );
    
    
})

document.querySelector("#startbut").addEventListener("click",function(event){
    score=0;
    timer=30;
    runTimer();
    makebubble();
    getnewhit();
    
    
})

makebubble();
getnewhit();








