
var heading=document.getElementById('heading');
var number=document.getElementsByClassName('number');;
var currentValue="";

heading.style.color="white"
 function clicked(num){
    
     currentValue+=num
     heading.innerText=currentValue;
    }
    function operator(oper){
      
    if (currentValue.slice(-1) === '+' || currentValue.slice(-1) === '-' ||
    currentValue.slice(-1) === '*' || currentValue.slice(-1) === '/') {
    
    
    alert("You cannot enter two operators consecutively!");
    return;
}

if (oper === '++' || oper === '--') {
    alert("Invalid operator!");
    return;
}
        currentValue+=`${oper}`
        heading.innerText=currentValue; 
          
    }
  function clean(){
 
   currentValue="";
  
   heading.innerText=currentValue;
  }
  function equal(){
let result=eval(currentValue)
heading.innerText=result


  }
