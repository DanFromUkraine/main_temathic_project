import "../../styles/create_account.scss";
import "../../styles/general.scss";
import "../../utils/add_header";
import { constants } from "../../utils/constants";
import { create_user_with_email_and_password } from "../../utils/firebase";
import { sign_in_with_popup } from "../../utils/firebase";
import "../../utils/firebase"
import "../../utils/add_footer"
import "../../utils/scroll_to_top"
const forms = document.querySelectorAll("form");

forms.forEach(form => {
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const user_info_iterator = (new FormData(form)).entries();
        const user_info = {}
        for (const [key, val] of user_info_iterator) {
            user_info[key] = val;
        }
        console.log(user_info);
        create_user_with_email_and_password(user_info)
    })
})



document.querySelectorAll(".google-login-button").forEach((btn) => {
    btn.addEventListener("click", () => {
        sign_in_with_popup()
    })
})

const sign_in_btn = document.querySelector(".sign-up-link"),
    sign_up_btn = document.querySelector(".sign-in-link");

[sign_in_btn, sign_up_btn].forEach((el, _i, array) => {
    el.addEventListener("click", () => {
        for (let btn of array) {
            const form_classlist = btn.parentNode.parentNode.classList;
            form_classlist.toggle("hidden");
        }
    })
})