// // Add Class For Links List
let linksA = document.querySelectorAll(".list_link a");

linksA.forEach((link) => {
  link.addEventListener("click", () => {
    linksA.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
    console.log("Hello I'm Islam");
  });
});

// Toggle Menu Bars
let Menu_Toggle = document.getElementById("menu_bars");
let List_Link = document.getElementById("list_link");

Menu_Toggle.addEventListener("click", () => {
  List_Link.classList.toggle("m-show");
});

// Colse Menu Bars By Onclick AnyWay
document.addEventListener("click", (e) => {
  if (e.target !== Menu_Toggle) {
    List_Link.classList.remove("m-show");
  }
});

// Colse Menu Bars By Links
let links = document.querySelectorAll(".list_link .link");

links.forEach((l) => {
  l.addEventListener("click", () => {
    List_Link.classList.remove("m-show");
  });
});

// Toggle Menu Bars By Hover Pointer
List_Link.addEventListener("mouseenter", () => {
  List_Link.classList.add("show");
});

List_Link.addEventListener("mouseleave", () => {
  List_Link.classList.remove("show");
});

// Change Main-Color For AllPage
let ColorsLi = document.querySelectorAll(".data_color .list_color li");

ColorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    ColorsLi.forEach((li) => {
      li.classList.remove("active");
    });

    li.classList.add("active");
    console.log(e.target.dataset.color);
    console.log("Hello I'm Islam");
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
  });
});
