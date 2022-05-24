var counter = 1;
var captions = [
  "Mathematics",
  "Biology",
  "Computer Science",
  "Network & Cybersecurity",
];
var references = [
"math.html",
"bio.html",
"cs.html",
"network.html"
];


function nextSlide() {
  var slideShowImage = document.getElementById("SubjectSlideShowImage");
  var slideShowCaption = document.getElementById("SubjectSlideShowCaption");
  var slideShowRef = document.getElementById("SlideShowReference");
  if (counter != 4) {
    counter++;
  } else {
    counter = 1;
  }
  console.log(references[counter-1]);
  console.log(slideShowRef.href);
  slideShowCaption.innerHTML = captions[counter - 1];
  slideShowImage.src = "images/" + counter + ".jpg";
  slideShowRef.setAttribute('href', references[counter-1]);
  // slideShowReference.href = references[counter-1];
  // document.links.SlideShowReference.src= references[counter-1];
  // setTimeout(function(){
  //   var slideShowReference = document.getElementById("SlideShowReference");
  //   slideShowReference.setAttribute("href", references[counter-1]);
  // }, 100)
}

function prevSlide() {
  var slideShowImage = document.getElementById("SubjectSlideShowImage");
  var slideShowCaption = document.getElementById("SubjectSlideShowCaption");
  
  if (counter != 1) {
    counter--;
  } else {
    counter = 4;
  }
  slideShowCaption.innerHTML = captions[counter - 1];
  slideShowImage.src = "images/" + counter + ".jpg";

  // setTimeout(function(){
  //   var slideShowReference = document.getElementById("SlideShowReference");
  //   slideShowReference.setAttribute("href", references[counter-1]);
  // }, 100)
  // slideShowReference.href = references[counter-1];
  // document.links.SlideShowReference.src= references[counter-1];
}

var timer = null;
timer = setInterval(nextSlide, 3000);

document.getElementById("SubjectSlideShowImage").hover(
  function () {
    clearInterval(timer);
  },
  function () {
    timer = setInterval(nextSlide, 500);
  }
);




// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("SubjectClass");
//   if (n > x.length) { slideIndex = 1 }
//   if (n < 1) { slideIndex = x.length };
//   for (i = 0; i < x.length; i++) {
//     x[i].style.visibility = "hidden";
//   }
//   x[slideIndex - 1].style.visibility = "visible";
// }

// var slideIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("SubjectClass");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {slideIndex = 1}
//   x[slideIndex-1].style.display = "inline";
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }
