import { fetch_collections } from "./process_collections";
import { constants } from "./constants";
import { onCollectionClick } from "./onCollectionClick";
const { classNames } = constants;

function show_more_func(btn, writing_path, next_str) {
    btn.addEventListener("click", btn_onclick)
    function btn_onclick() {
        fetch_collections({ callback: onCollectionClick, next_str: next_str }, { render_subject: writing_path});
    }
}



show_more_func(document.querySelector(classNames.show_more_btn), document.querySelector(classNames.mark_def_cards_cont_loc));    