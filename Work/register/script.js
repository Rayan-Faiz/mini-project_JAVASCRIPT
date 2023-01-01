
const emailInput = document.getElementById("email");

emailInput.addEventListener("input", function emailcheck() {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!emailRegex.test(emailInput.value)) {
    emailInput.setCustomValidity("Please enter a valid email address");
  } else {
    emailInput.setCustomValidity("");
  }
});

const pswInput = document.getElementById("psw");
const pswRepeatInput = document.getElementById("psw-repeat")

pswInput.addEventListener("input", function pswcheck(){
  const pswRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  

  if (!pswRegex.test(pswInput.value)) {
    pswInput.setCustomValidity("Please enter a valid password");
  } else {
    pswInput.setCustomValidity("");
  }
});


pswRepeatInput.addEventListener("input", function(event) {
 
  if (pswInput.value !== pswRepeatInput.value) {
    pswRepeatInput.setCustomValidity("Please enter the same password");
    event.preventDefault();
  } else {
    pswRepeatInput.setCustomValidity("");
  }
});