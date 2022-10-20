// // Add Class For Links List
// let linksA = document.querySelectorAll(".list_link a");

// linksA.forEach((link) => {
//   link.addEventListener("click", () => {
//     linksA.forEach((link) => {
//       link.classList.remove("active");
//     });
//     link.classList.add("active");
//     console.log("hello");
//   });
// });

// Toggle Menu Bars
let Menu_Toggle = document.getElementById("menu_bars");
let List_Link = document.getElementById("list_link");

Menu_Toggle.addEventListener("click", () => {
  List_Link.classList.toggle("show");
});

let links = document.querySelectorAll(".list_link .link");

links.forEach((l) => {
  l.addEventListener("click", () => {
    List_Link.classList.remove("show");
  });
});
let Xmark = document.querySelector(".list_link #xmark");
Xmark.addEventListener("click", () => {
  List_Link.classList.remove("show");
});
