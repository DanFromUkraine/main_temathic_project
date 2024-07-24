import { fetch_collections, main_callbacks } from "./process_collections";
import { constants } from "./constants";
const { classNames } = constants;

export function show_more(btn, writing_path) {
    btn.addEventListener("click", btn_onclick)
    function btn_onclick() {
        fetch_collections({ callback: main_callbacks }, { render_subject: writing_path});
    }
}

show_more(document.querySelector(classNames.show_more_btn), document.querySelector(classNames.mark_def_cards_cont_loc));