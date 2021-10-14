const socket = io();




const loginForm = document.forms.myform;
loginForm.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const formData = new FormData(ev.target);
  const name = formData.get('name');
  const password = formData.get('password');
//console.log(name,password);
console.log('Formdata:', 123);
const values=
       {
           name:name,
           pwd:password,
       }
console.log(values);
socket.emit('/auth',values,
//(data)=>{console.log('data:', data)}
(async (data) => {
    await data;
    console.log('login:',data);
    
  })()
);
});

//console.log(name,password);
const checkformUser=()=>{
    
    loginForm.style.display = "none";

}
checkformUser;
console.log('Formdata:', 123);
//socket.emit('/test',formData);
/*
const run=()=>{
    const name="zzzzzzzzzz";
    socket.emit('/auth',{name:'Gala', pwd:'qwerty'},
    //answer
    (data)=>{console.log('data:', data)}
    );
}
run();
*/
//example
const run=()=>{
socket.emit('/pow',{val:56, lvl:4},
    (data)=>{console.log('data:', data)}
    );
}
run();
/*
let profile = {
  //id: null,
  name: data.name,
  password:data.password
};
socket.emit('login', { name }, (data) => {
    console.log(data);
    
    profile.id = data.id;
    profile.name = data.name;
    profile.password = data.password;
  });
*/














/*
const form = document.forms.form;
form.addEventListener('submit',retriveFormValue);

const retriveFormValue=(event)=>
{
   event.preventDefault();

   const {name, password}=form;
   const values=
       {
           name: name.value,
           password: password.value
       }
       console.log(form);
}
*/












/*form validation*/
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if(myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}
