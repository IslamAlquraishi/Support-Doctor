// Functions Will Word After Onload Window
window.onscroll = () => {
  scroll();
};

// Functions Will Word With Scroll Window
window.onscroll = () => {
  ShowCards();
  CardFolio();
  scroll();
};

// Add Class For Links List
let linksA = document.querySelectorAll(".list_link a");

linksA.forEach((link) => {
  link.addEventListener("click", () => {
    linksA.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
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

// Get Color In LocalStorage
let NewColor = localStorage.getItem("Main_Color");

// Check For Color In LocalStorage
if (NewColor !== null) {
  document.documentElement.style.setProperty("--main-color", NewColor);

  ColorsLi.forEach((li) => {
    li.classList.remove("active");
    if (li.dataset.color == NewColor) {
      li.classList.add("active");
    }
  });
}

ColorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    ColorsLi.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");

    console.log("Hello I'm Islam");
    Data_Color = e.target.dataset.color;
    document.documentElement.style.setProperty("--main-color", Data_Color);

    // Set Color In LocalStorage
    localStorage.setItem("Main_Color", Data_Color);
  });
});

// Remove Main Color From LocalStorage
let Reset = document.getElementById("reset");

Reset.addEventListener("click", () => {
  localStorage.removeItem("Main_Color");
  window.location.reload();
});

// Go to Up By Click On Title
let TitleHeader = document.getElementById("title_header");

TitleHeader.addEventListener("click", () => {
  document.documentElement.scrollTop = "0";
});

// Make Show Card Banner By Scroll Window
function ShowCards() {
  if (window.scrollY + 500 >= CradsSection.offsetTop) {
    if (started == false) {
      Progresss.forEach((prog) => {
        CardsProgress(prog);
      });
    }
    started = true;
  }
}

// Counter For Progress
let CradsSection = document.getElementById("cards");
let Progresss = document.querySelectorAll("#cards .progress");
let started = false;

function CardsProgress(Prog) {
  let progress = Prog.dataset.progress;
  let count = setInterval(() => {
    Prog.textContent++;
    if (Prog.textContent == progress) {
      clearInterval(count);
    }
  }, 500 / progress);
}

// Scroll Window for Show Card Banner
let Card_Block = document.querySelectorAll(".lbanner .block");

function CardFolio() {
  Card_Block.forEach((c) => {
    if (window.scrollY + 550 >= c.offsetTop) {
      c.classList.add("show");
    } else {
      c.classList.remove("show");
    }
  });
}

let UP = document.getElementById("up");
let scroll = () => {
  let pos = document.documentElement.scrollTop;
  let CalcHeigth =
    document.body.clientHeight - document.documentElement.clientHeight;
  let scrollProgress = Math.round((Math.floor(pos) * 100) / CalcHeigth);

  if (pos > 450) {
    UP.classList.add("active");
  } else {
    UP.classList.remove("active");
  }

  UP.style.background = ` conic-gradient(#0f0 ${scrollProgress}% , #00000030 ${scrollProgress}%) `;
  UP.addEventListener("click", () => {
    document.documentElement.scrollTop = "0";
  });
};
