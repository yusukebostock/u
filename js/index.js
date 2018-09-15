 /*
                Inspired by: "Login Page & Homepage"
                By: Neo
                Link: https://dribbble.com/shots/4485321-Login-Page-Homepage
              */

var usernameInput = document.querySelector('.username');
var passwordInput = document.querySelector('.password');
var showPasswordButton = document.querySelector('.password-button');
var face = document.querySelector('.face');

passwordInput.addEventListener('focus', function (event) {
  document.querySelectorAll('.hand').forEach(function (hand) {
    hand.classList.add('hide');
  });
  document.querySelector('.tongue').classList.remove('breath');
});

passwordInput.addEventListener('blur', function (event) {
  document.querySelectorAll('.hand').forEach(function (hand) {
    hand.classList.remove('hide');
    hand.classList.remove('peek');
  });
  document.querySelector('.tongue').classList.add('breath');
});

usernameInput.addEventListener('focus', function (event) {
  var length = Math.min(usernameInput.value.length - 16, 19);
  document.querySelectorAll('.hand').forEach(function (hand) {
    hand.classList.remove('hide');
    hand.classList.remove('peek');
  });

  face.style.setProperty('--rotate-head', -length + 'deg');
});

usernameInput.addEventListener('blur', function (event) {
  face.style.setProperty('--rotate-head', '0deg');
});

usernameInput.addEventListener('input', _.throttle(function (event) {
  var length = Math.min(event.target.value.length - 16, 19);

  face.style.setProperty('--rotate-head', -length + 'deg');
}, 100));

showPasswordButton.addEventListener('click', function (event) {
  if (passwordInput.type === 'text') {
    passwordInput.type = 'password';
    document.querySelectorAll('.hand').forEach(function (hand) {
      hand.classList.remove('peek');
      hand.classList.add('hide');
    });
  } else {
    passwordInput.type = 'text';
    document.querySelectorAll('.hand').forEach(function (hand) {
      hand.classList.remove('hide');
      hand.classList.add('peek');
    });
  }
});