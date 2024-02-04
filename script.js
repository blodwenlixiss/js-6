"use strict";
const form = document.getElementById("registration");
const userName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submit = document.getElementById("submitBtn");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  try {
    if (userName.value === "") {
      throw new Error("type username");
    }
    if (userName.value.length < 6) {
      throw new Error("username is too short");
    }
    if (lastName.value === "") {
      throw new Error("type lastname");
    }
    if (lastName.length < 6) {
      throw new Error("username is too short");
    }
  } catch (err) {
    console.log(err);
  }
});
