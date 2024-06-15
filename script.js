var nameE = document.getElementById("name-error");
var phoneE = document.getElementById("phone-error");
var emailE = document.getElementById("email-error");
var msgE = document.getElementById("msg-error");
var submitE = document.getElementById("submit-error");

function displayName() {
  var name = document.getElementById("name").value;

  if (name.length == 0) {
    nameE.innerHTML = "*Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameE.innerHTML = "*Write full name";
    return false;
  }
  nameE.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function displayPhone() {
  var phone = document.getElementById("phone").value;

  if (phone.length == 0) {
    phoneE.innerHTML = "*Phone is required";
    return false;
  }
  if (phone.length < 10) {
    phoneE.innerHTML = "* 10 digits required";
    return false;
  }
  phoneE.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function displayEmail() {
  var email = document.getElementById("email").value;

  if (email.length == 0) {
    emailE.innerHTML = "*Email is required";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailE.innerHTML = "Invalid Email";
    return false;
  }
  emailE.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function displayMsg(){
  var message = document.getElementById("message").value;
  var required = 30;
  var left = required - message.length;

 if(left > 0){
  msgE.innerHTML = left + " more characters required";
  return false;
 }
 msgE.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
 return true;
}

function validateForm(){
if(!displayName() || !displayPhone() || !displayEmail() || !displayMsg()){
  submitE.style.display = "block";
  submitE.innerHTML = "Please fill all the required fields";
  setTimeout(()=>{
    submitE.style.display = "none";
  },3000)
  return false;
}
}