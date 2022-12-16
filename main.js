var email = document.querySelector("input[type=email]");
var password = document.querySelector("input[type=password]");


document.querySelector("input[type=submit]").addEventListener('click', function(e){
  
  var emailValue = email.value
var passwordValue = password.value;
e.preventDefault();
  
 
 var alrt = `Your Email : ${emailValue} <br> Password : ${passwordValue}`;
 
 
 console.log(alrt);
  
})
