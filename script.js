// Variable to track the state of the navigation bar
let isNavOpen = false;

function toggleNav() {
  const nav = document.querySelector(".nav-list");
  const navbar = document.querySelector(".navbar");

  isNavOpen = !isNavOpen; // Toggle the state

  if (isNavOpen) {
    nav.classList.add("show-nav");
    navbar.classList.add("show-nav");
  } else {
    nav.classList.remove("show-nav");
    navbar.classList.remove("show-nav");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const navIcon = document.querySelector(".menu-icon");

  navIcon.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleNav();
  });

  document.addEventListener("click", function (event) {
    if (isNavOpen && !navIcon.contains(event.target)) {
      toggleNav();
    }
  });
});

// Rest of your code (form validation and sending message) remains the same

// form validation

function validateForm() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim();
  const nameError = document.getElementById("name-error");

  const messageInput = document.getElementById("message");
  const message = messageInput.value.trim();
  const messageError = document.getElementById("message-error");

  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();
  const emailError = document.getElementById("email-error");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let isValid = true;

  if (name === "") {
    nameError.textContent = "Name is required.";
    nameInput.focus();
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  if (message === "") {
    messageError.textContent = "Message is required.";
    messageInput.focus();
    isValid = false;
  } else {
    messageError.textContent = "";
  }

  if (email === "" || !emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    emailInput.focus();
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  return isValid;
}

// To send message

function sendMessage() {
  (function () {
    emailjs.init("Wp2mMuvahyPJTJm0m"); // Account Public Key
  })();

  var serviceID = "service_hncxfg8"; // Email Service ID
  var templateID = "template_xwpz9us"; // Email Template ID

  var params = {
    sendername: document.querySelector("#name").value,
    senderemail: document.querySelector("#email").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value,
  };

  emailjs
    .send(serviceID, templateID, params)
    .then(function (response) {
      alert(
        "Thank you, " +
          params.sendername +
          "! Your message has been sent."
      );
    })
    .catch(function (error) {
      console.error("Error sending email:", error);
    });
}
