import "../../styles/create_account.scss";
import "../../styles/general.scss";
import "../../utils/add_header";
import { create_user_with_email_and_password, sign_in_with_email_and_password, sign_in_with_popup, sign_out } from "../../utils/firebase";
import "../../utils/add_footer"
import "../../utils/scroll_to_top"

const sign_in_cont = document.querySelector(".sign_in"),
        sign_up_cont = document.querySelector(".sign_up");
    
sign_in_cont.addEventListener("submit", on_sign_in_submit);
sign_up_cont.addEventListener("submit", on_sign_up_submit);

function on_sign_in_submit(e) {
    e.preventDefault();
    sign_in_with_email_and_password(gather_form_info(e.target)).then(on_success).catch(on_sign_in_failure); // я хз чого, але блок catch не спрацьовує, коли виникає помилка fetch запиту
}
function on_sign_up_submit(e) {
    e.preventDefault();
    create_user_with_email_and_password(gather_form_info(e.target)).then(on_success).catch(on_sign_up_failure);
}
function gather_form_info(form) {
    const user_info_iterator = (new FormData(form)).entries();
        const user_info = {}
        for (const [key, val] of user_info_iterator) {
            user_info[key] = val;
        }
    return user_info;
}

function on_success(user) {
    if (typeof user !== "string" && user !== undefined) {
        sessionStorage.setItem("status", true);
        location.replace("./success_page.html");
    } else {
        throw "Error in fetch request";
    }
}
function on_sign_in_failure() {
    document.querySelector(".Err_invalid_input").classList.add("animation_appearance");
}
function on_sign_up_failure() {
    document.querySelector(".Err_user_exists").classList.add("animation_appearance");

}

document.querySelectorAll(".google-login-button").forEach((btn) => {
    btn.addEventListener("click", () => {
        sign_in_with_popup();
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
    });
});


