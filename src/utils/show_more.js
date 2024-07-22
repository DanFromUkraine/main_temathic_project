import { fetch_collections } from "./process_collections";

const show_more_btn = document.querySelector(".show_more_btn");
show_more_btn.addEventListener("click", (e) => {
    fetch_collections(sessionStorage.getItem("next_str", true))
});