"use strict";
// const form = document.getElementById("registration");
// const userName = document.getElementById("firstName");
// const lastName = document.getElementById("lastName");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const confirmPassword = document.getElementById("confirmPassword");
// const submit = document.getElementById("submitBtn");
// const textArea = document.getElementById("text-area");
// const text = document.getElementById("text-content");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // const formValues = document.forms.registration;
//   try {
//     if (userName.value === "" || userName.value.length < 6) {
//       throw new Error("username is less then 6 words");
//     }
//     if (lastName.value === "" || lastName.length < 6) {
//       throw new Error("lastname is less then 6 words");
//     }
//     if (password.value.length < 6) {
//       throw new Error("password is less then 6 words");
//     }
//     if (password.value !== confirmPassword.value) {
//       throw new Error("paswords doesn't match");
//     }
//     if (textArea.value.length > 100) {
//       throw new Error("too many characters");
//     }
//     const data = {
//       username: userName.value,
//       lastName: lastName.value,
//       email: email.value,
//       password: password.value,
//       confirmPassword: confirmPassword.value,
//     };
//     text.textContent = "Registration successful";
//     text.style.color = "green";
//     console.log(data);
//   } catch (err) {
//     text.textContent = err.message;
//     text.style.color = "red";
//   }
// });

const pushInput = document.getElementById("pushInput");
const submitButton = document.getElementById("submit-button");
const li = document.createElement("li");
const arr = [];
const pushToArr = function () {
  arr.push(pushInput.value);
  for (let i = 0; i < arr.length; i++) {}
};
// pushToArr(pushInput);
submitButton.addEventListener("click", pushToArr);
