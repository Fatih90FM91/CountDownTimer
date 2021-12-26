


let minute = document.getElementById('minute-time');
let second = document.getElementById('second-time');
let start =document.getElementById('start');
let reset =document.getElementById('reset');

let minute2 = document.getElementById('minute-time-2');
let second2 = document.getElementById('second-time-2');

let inputData=document.getElementById('inputDataTime');
let editBtn =document.getElementById('edit');

let minuteVal=minute2.innerText;
let secondVal=second2.innerText;

console.log(minute.innerText);

let startTimer;
let jQeryVal;
let minuteLg;
var secondlg;




var count =0;
var newCount=0;
start.addEventListener('click' , function(){
    if(startTimer==undefined){
        startTimer=setInterval(timer,1000);
            
    }else{
        alert("The time is already running!!");
    }
});

reset.addEventListener('click' , function(){
   
    minute.innerText=minuteLg;
    second.innerText=secondlg;

  

})




function timer(){

    if(second.innerText!=0){
       
        second.innerText--;
    } else if(second.innerText==0 && minute.innerText!=0){
        second.innerText=59;
        minute.innerText--;
    }
    
    else if(minute.innerText==0 && second.innerText==0){
        stopTimer();
        minute.innerText="00";
        second.innerText="00";
      
       
    }
}

function stopTimer(){
    clearInterval(startTimer)
 
}

let arrMin =["20","21","23","12"];
let arrSec =["12","34","56","14"];



editBtn.addEventListener('click' , function(){
   
 newCount++;
 if(newCount>0 && newCount<5){
 minuteLg=arrMin[newCount-1];
 secondlg=arrSec[newCount-1];
 }else{
    alert("The time edit is completed!!");
 }
})




$(document).ready(function(){
    $('.btn').css('border-radius','100%')

    $('.edit-timer').css('font-size' ,'20px')
    $('.edit-timer').css('font-weight' ,'bold')
  

  


    $('body').on('click','#edit', function(){
     
        count++;
      if(count>0 && count<5){
      $('#newList').append(' <label class="label">Timer =' +count+' ></label>  <p>00</p><p>:</p> <p>'+arrMin[count-1]+'</p> <p>:</p><p>'+arrSec[count-1]+'</p>')  
      }else{
        alert("The time edit is completed!!");
      }
      $('#newList').append('<br>')
      
      $('#newList').css('font-size' ,'20px')
       
   
    
    })


});


     