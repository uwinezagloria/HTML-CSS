var fname=document.getElementById('fname');
var lname=document.getElementById('lname');
var mail=document.getElementById('mail');
function validation(event){
    event.preventDefault()
    if(fname.value.trim()===""){
        alert("First Name is required")
    }
    if(lname.value.trim()===""){
        alert("Last Name is required")
    }
    if(mail.value.trim()===""){
        alert("email is required")
    }if(!mail.value.includes('@')){
    alert("write valid Email")
    }
}
const savingLocalStorage=()=>{

let firstname=fname.value;
let lastname=lname.value;
let email=mail.value;
let formdata={
FirstName:firstname,
LastName:lastname,
Email:email
};
 localStorage.setItem('userData',JSON.stringify(formdata))
}
function updateData(){
    let data=localStorage.getItem('userData')
    data=JSON.parse(data)
    let firstname=fname.value||data.firstname;
let lastname=lname.value||data.lastname;
let email=mail.value|| data.email;
let formdata={
FirstName:firstname,
LastName:lastname,
Email:email
};
localStorage.setItem('userData',JSON.stringify(formdata))
}

