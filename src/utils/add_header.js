import header from "../templates/header.handlebars";

async function add_header() {
  if (!document.querySelector("header")) {
    await new Promise((resolve) => {
      console.log(localStorage.getItem("status"));
      document
        .querySelector("main")
        .insertAdjacentHTML(
          "afterbegin",
          header({ status: JSON.parse(localStorage.getItem("status")) })
        );
      resolve();
    });
  } else {
    console.warn("шаблон вже доданий");
  }

  document
    .querySelector(".burger_menu")
    .addEventListener("click", function (e) {
      const burger = document.querySelector(".burger_menu"),
        li_elements = burger.parentNode.children;
      burger.classList.toggle("open");

      for (let i = 1; i < li_elements.length; i++) {
        li_elements[i].classList.toggle("db");
      }
    });
}

add_header();
