import header from "../templates/header.handlebars";
import { sign_out } from "../utils/firebase";


async function add_header() {
  if (!document.querySelector("header")) {
    await new Promise((resolve) => {
      document
        .querySelector("main")
        .insertAdjacentHTML(
          "afterbegin",
          header({ status: sessionStorage.getItem("status") })
        );
        if (sessionStorage.getItem("status")) {
          document.querySelector(".logout_button").addEventListener("click", () => {
                    sign_out().then(mess => {
                        console.log(mess);
                        sessionStorage.setItem("status", false);
                        location.reload(false);
                        location.replace("./create_account.html");
                    } ).catch(err => console.log(err));
                });
        }
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



