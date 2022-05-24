function openMenu() {
  var menu = document.getElementById("sideMenu");
  document.getElementById("sideMenu").style.width = "250px";
  document.getElementById("PageBodyContent").style.marginLeft = "250px";
  document.getElementById("MenuIcon").style.visibility = "hidden";
}

function closeMenu() {
  document.getElementById("sideMenu").style.width = "0";
  document.getElementById("PageBodyContent").style.marginLeft = "0";
  document.getElementById("MenuIcon").style.visibility = "visible";
}
