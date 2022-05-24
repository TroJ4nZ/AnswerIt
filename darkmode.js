function toggleDarkMode() {
  document.body.classList.toggle("dark-mode-on");
}
var isDarkModeOn = false;

function toggleDarkModeSubject() {
  document.body.classList.toggle("dark-mode-on");
  var arrayOfQuestions = document.body.getElementsByClassName("Subject");
  if (!isDarkModeOn) {
    for (var i = 0; i < arrayOfQuestions.length; i++) {
      arrayOfQuestions[i].style.background = "#535353";
    }
    isDarkModeOn = true;
  } else {
    for (var i = 0; i < arrayOfQuestions.length; i++) {
      arrayOfQuestions[i].style.background = "#eee";
    }
    isDarkModeOn = false;
  }
}

function toggleDarkModeQA() {

    document.body.classList.toggle("dark-mode-on");
    var arrayOfQuestions = document.body.getElementsByClassName("QA");

    if (!isDarkModeOn) {
      for (var i = 0; i < arrayOfQuestions.length; i++) {
        arrayOfQuestions[i].style.background = "#535353";

      }
      isDarkModeOn = true;

    } else {
      for (var i = 0; i < arrayOfQuestions.length; i++) {
        arrayOfQuestions[i].style.background = "#eee";

      }
      isDarkModeOn = false;
    }
  }