const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const btn = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
  body.classList.toggle("dark-theme");
  btn.classList.toggle("dark-theme");

  var myclass = body.classList;
  if (myclass == "dark-theme") {
    var span = document.getElementById("myspan");
    span.innerHTML = "light_mode";
    var namedev = document.getElementById("name");
    namedev.style.color = "white";
    var namedev = document.getElementById("dev");
    namedev.style.color = "#fff";
  } else {
    var span = document.getElementById("myspan");
    span.innerHTML = "dark_mode";
    var namedev = document.getElementById("name");
    namedev.style.color = "black";
    var namedev = document.getElementById("dev");
    namedev.style.color = "black";
  }
});
