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
// const emailvalid = /^({a-z\d\.-}+)\@({a-z\d-}+)\.({a-z}{2,8})?  $/;
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
//     if (emailvalid.test(email.value)) {
//       throw new Error("email invalid");
//     }

//     const data = {
//       username: userName.value,
//       lastName: lastName.value,
//       email: email.value,
//       password: password.value,
//       confirmPassword: confirmPassword.value,
//     };
//     console.log(data);

//     text.textContent = "Registration successful";
//     text.style.color = "green";
//     console.log(data);
//   } catch (err) {
//     text.textContent = err.message;
//     text.style.color = "red";
//   }
// });

// დავალება 2
// დაამატეთ ინფუთის ველი;
// ღილაკზე დაჭერისას , რასაც ჩაწერთ ინფუთის ველში, დააფუშეთ ცარიელ მასივში;
//  ამ მასივში შენახული  მნიშვნელობები გამოიტანეთ li ტეგების შიგნით.

// const pushInput = document.getElementById("pushInput");
// const submitButton = document.getElementById("submit-button");
// const listDiv = document.querySelector(".list");
// const arr = [];

// const pushToArr = function () {
//   arr.push(pushInput.value);
//   let ul = document.querySelector("ul");
//   if (!ul) {
//     ul = document.createElement("ul");
//     listDiv.appendChild(ul);
//   }
//   ul.innerHTML = "";
//   for (let i = 0; i < arr.length; i++) {
//     const li = document.createElement("li");
//     li.textContent = arr[i];
//     ul.appendChild(li);
//   }
// };
// // pushToArr(pushInput);
// submitButton.addEventListener("click", pushToArr);

// დავალება 3
// შექმენით 5 ელემენტიანი  ობიექტების მასივი (სახელი, გვარი, ასაკი, პროფესია);
//  გაფილტრეთ ის ელემენტები, რომლის ასაკიც მეტია 18ზე;
// გამოიტანეთ მხოლოდ გაფილტრული ობიექტები  li კონტენტის შიგნით.

// const listDiv = document.querySelector(".list");
// // const ul = document.createElement("ul");

// const persons = [
//   {
//     name: "luka",
//     lastname: "goginashvili",
//     age: 22,
//     profession: "developer",
//   },
//   {
//     name: "gioegi",
//     lastname: "bazadze",
//     age: 16,
//     profession: "back-end developer",
//   },
//   {
//     name: "nikita",
//     lastname: "bespalov",
//     age: 24,
//     profession: "graphic designer",
//   },
//   {
//     name: "irakli",
//     lastname: "romanchenko",
//     age: 17,
//     profession: "student",
//   },
//   {
//     name: "lizi",
//     lastname: "nijaradze",
//     age: 18,
//     profession: "student",
//   },
// ];

// const filterAge = function (arr) {
//   arr.filter((el) => {
//     let ul = document.createElement("ul");
//     listDiv.appendChild(ul);
//     if (el.age > 18) {
//       console.log(el);
//       for (let i = 0; i < 1; i++) {
//         const li = document.createElement("li");
//         li.textContent = `${el.name} ${el.lastname} ${el.age} ${el.profession}`;
//         ul.appendChild(li);
//       }
//     }
//   });
// };
// filterAge(persons);
