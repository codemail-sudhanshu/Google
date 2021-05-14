var container = document.getElementById("content");

window.addEventListener("load", (e) => {
  container.classList.add("anim");
  document.querySelector(".navigator").classList.remove("n-active");
  container.style.opacity = 1;
});

var pass = document.getElementById("pass");
var confpass = document.getElementById("conf-pass");
var username_info = document.getElementById("Username-info");
var username = document.getElementById("Username");
var nameCheck = document.querySelector("name-check");
var names = document.getElementById("name-check");
console.log("Sds");
var checks = false;

function loading() {
  container.classList.add("loading");
  document.querySelector(".navigator").classList.add("n-active");
}
function usernamecheck() {
  var len = username.value.length;
  if (len <= 6 || len >= 30) {
    username_info.classList.add("alert");
    username_info.classList.add(".alert-border");
    username_info.innerHTML =
      "&#10006; Sorry, your username must be between 6 and 30 characters long.";
  } else {
    checks = true;
    username_info.classList.remove("alert");
    username_info.classList.remove(".alert-border");
    username_info.textContent = "You can use letters, number & speriods";
  }
}

function showpass() {
  if (pass.type === "password") {
    pass.type = "text";
    confpass.type = "text";
  } else {
    pass.type = "password";
    confpass.type = "password";
  }
}
function next() {
  loading();
  document.querySelector(".content").classList.add("next");
}
document.getElementById("details").addEventListener("submit", function (e) {
  e.preventDefault();
  submitCheck();
});

function submitCheck() {
  passcheck();
  usernamecheck();
  nameempty();
  checkinput("First-Name");
  checkinput("Last-Name");
  checkinput("Username");
  checkinput("pass");
  checkinput("conf-pass");
  if (checks) {
    var x = setTimeout(next, 0000);
    var endd = setTimeout(end, 3000);
  }
}

var nameString;
function checkinput(id) {
  var elemet = document.getElementById(id);

  if (!elemet.value) {
    elemet.classList.add("alert-border");
  } else {
    elemet.classList.remove("alert-border");
  }
}

function nameempty() {
  var fname = document.getElementById("First-Name");
  var lname = document.getElementById("Last-Name");

  if (!fname.value && !lname.value) {
    names.classList.add("active");
    fname.focus();
    names.innerHTML = "&#10006; Enter First & Last name";
  } else if (!fname.value) {
    fname.focus;
    names.classList.add("active");
    names.innerHTML = "&#10006; Enter First name";
  } else if (!lname.value) {
    lname.focus();
    names.classList.add("active");
    names.innerHTML = "&#10006; Enter Last name";
  } else {
    checks = true;
    names.classList.remove("active");
  }
}
function passcheck() {
  var pass = document.getElementById("pass");
  var pass_sug = document.getElementById("pass-sug");
  var pass_sug_string = "";
  var confpass = document.getElementById("conf-pass");

  if (!pass.value) {
    pass.focus();
    pass_sug.classList.add("alert");
    pass_sug.innerHTML = "Enter a password";
  } else if (pass.value.length <= 8) {
    checks = false;
    console.log("LEDSSTHAN");
    pass.focus();
    pass_sug.classList.add("alert");
    pass_sug.innerHTML = "Password should be more than 8 characters";
  } else if (!confpass.value) {
    confpass.focus();
    pass_sug.classList.add("alert");
    pass_sug.innerHTML = "Confirm the Password";
  } else if (pass.value !== confpass.value) {
    confpass.focus();
    pass_sug.classList.add("alert");
    pass_sug.innerHTML = "&#10006; Password Do Not Match";
  } else {
    checks = true;
    pass_sug.classList.remove("alert");
    pass_sug.innerHTML = "";
  }
}
function end() {
  console.log("ended");
  container.classList.remove("loading");
  document.querySelector(
    ".cont"
  ).innerHTML = `Ended <button class="btn" onclick="location.reload()" style="position:absolute"></button> `;

  document.querySelector(".navigator").classList.remove("n-active");
}
