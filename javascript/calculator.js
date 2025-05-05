
var heading=document.getElementById('heading');
var number=document.getElementsByClassName('number');;
var currentValue="";

heading.style.color="white"
 function clicked(num){
    
     currentValue+=num
     heading.innerText=currentValue;
    }
    function operator(oper){
        // Check if the last character is an operator or if the operator is already an operator
    if (currentValue.slice(-1) === '+' || currentValue.slice(-1) === '-' ||
    currentValue.slice(-1) === '*' || currentValue.slice(-1) === '/') {
    
    // If the last character is an operator, don't append another one
    alert("You cannot enter two operators consecutively!");
    return;
}

// Check if the operator is '++' or '--' (invalid)
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
