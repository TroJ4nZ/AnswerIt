var isValid = true;
var isAdmin = false;

function validateRegistration() {
  labelsArray = document.getElementsByTagName("label");

  var firstName = document.RegistrationForm.userName.value;
  if (firstName == "" || firstName.length < 6) {
    labelsArray[0].innerHTML =
      "Username<br/>[Please enter a username with at least 6 valid characters.]";
    labelsArray[0].style = "transition: 0.0s; color: red; font-weight: bolder;";
    isValid = false;
  } else {
    labelsArray[0].innerHTML = "Username";
    labelsArray[0].style = "transition: 0.0s; color: black;";
    isValid = isValid ? true : false; // IMPORTANT TERNARY OPERATOR!
  }

  var password = document.RegistrationForm.password.value;
  if (password == "" || password.length < 8) {
    labelsArray[1].innerHTML =
      "Password<br/> [Please enter a password with at least 8 valid characters.]";
    labelsArray[1].style = "transition: 0.0s; color: red; font-weight: bolder;";
    isValid = false;
  } else {
    labelsArray[1].innerHTML = "Password";
    labelsArray[1].style = "transition: 0.0s; color: black;";
    isValid = isValid ? true : false;
  }

  var email = document.RegistrationForm.email.value;
  var regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email == "") {
    labelsArray[2].innerHTML = "Email<br/> [Please enter a valid email.]";
    labelsArray[2].style = "transition: 0.0s; color: red; font-weight: bolder;";
    isValid = false;
  } else if (!regex.test(email)) {
    labelsArray[2].innerHTML = "Email<br/> [Please enter a valid email.]";
    labelsArray[2].style = "transition: 0.0s; color: red; font-weight: bolder;";
    isValid = false;
  } else {
    labelsArray[2].innerHTML = "Email";
    labelsArray[2].style = "transition: 0.0s; color: black;";
    isValid = isValid ? true : false;
  }

  var e = document.RegistrationForm.gender;
  var gender = e.options[e.selectedIndex].value;
  if (gender == "null") {
    labelsArray[3].innerHTML = "Gender<br/> [Please select your gender.]";
    labelsArray[3].style = "transition: 0.0s; color: red; font-weight: bolder;";
    isValid = false;
  } else {
    labelsArray[3].innerHTML = "Gender";
    labelsArray[3].style = "transition: 0.0s; color: black;";
    isValid = isValid ? true : false;
  }

  e = document.RegistrationForm.country;
  var country = e.options[e.selectedIndex].value;
  if (country == "null") {
    labelsArray[4].innerHTML = "Country<br/> [Please select your country.]";
    labelsArray[4].style = "transition: 0.0s; color: red; font-weight: bolder;";
    isValid = false;
  } else {
    labelsArray[4].innerHTML = "Country";
    labelsArray[4].style = "transition: 0.0s; color: black;";
    isValid = isValid ? true : false;
  }

  e = document.RegistrationForm.university;
  var university = e.options[e.selectedIndex].value;
  if (university == "null") {
    labelsArray[5].innerHTML =
      "University<br/> [Please select your university.]";
    labelsArray[5].style = "transition: 0.0s; color: red; font-weight: bolder;";
    isValid = false;
  } else {
    labelsArray[5].innerHTML = "University";
    labelsArray[5].style = "transition: 0.0s; color: black;";
    isValid = isValid ? true : false;
  }
  return isValid;
}

function validateLogin() {
  var isValid = true;
  labelsArray = document.getElementsByTagName("label");

  var firstName = document.LoginForm.userName.value;
  if (firstName == "" || firstName.length < 6) {
    labelsArray[0].innerHTML =
      "Username<br/>[Please enter a valid username]";
    labelsArray[0].style = "transition: 0.0s; color: red; font-weight: bolder;";
    isValid = false;
  } else {
    labelsArray[0].innerHTML = "Username";
    labelsArray[0].style = "transition: 0.0s; color: black;";
    isValid = isValid ? true : false; // IMPORTANT TERNARY OPERATOR!
  }

  var password = document.LoginForm.password.value;
  if (password == "" || password.length < 8) {
    labelsArray[1].innerHTML =
      "Password<br/> [Please enter a valid password]";
    labelsArray[1].style = "transition: 0.0s; color: red; font-weight: bolder;";
    isValid = false;
  } else {
    labelsArray[1].innerHTML = "Password";
    labelsArray[1].style = "transition: 0.0s; color: black;";
    isValid = isValid ? true : false;
  }
// console.log(isValid);
// console.log(isAdmin);
//     if (firstName == "adminadmin" && password == "adminadmin"){
//         isAdmin = true;
//     }

//     console.log(isValid);
// console.log(isAdmin);

    // if  (isValid && isAdmin){

    //     console.log("YES!");
    //     window.location.href = "index.html";
    //     console.log("YES!!!!!!!!!!!!!!!!!!!!");
    //     return isValid && isAdmin;
    // }
  return isValid;
}

// function redirect(){
//     if (isValid && isAdmin){
//         window.location.replace("index.html");
        
//     }
//     return true;
// }



function resetInputs() {
  var labelsReset = [
    "Username",
    "Password",
    "Email",
    "Password",
    "Gender",
    "Country",
    "University",
  ];

  for (var i = 0; i < labelsReset.length; i++) {
    labelsArray[i].innerHTML = labelsReset[i];
    labelsArray[i].style = "transition: 0.0s; color: black";
  }
}
