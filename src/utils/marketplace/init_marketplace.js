import { read_st, rewrite_cell } from "../st_communicator";
import { insert_via_tpl } from "../insert_card_with_tpl";
import cards_tpl from "../../templates/marketplace_cards.handlebars";
import { fetch_collections } from "../process_collections";
import { onScrollDown } from "../onScrollDown";
import { constants } from "../constants";
import { onCollectionClick } from "../onCollectionClick";
const {classNames} = constants;

export function init_marketplace() {
    if (localStorage.getItem("loaded")) {
      for (const collection of read_st(localStorage, "collections")) {
        insert_via_tpl(cards_tpl, document.querySelector(classNames.mark_def_cards_cont_loc), collection, onCollectionClick)
      } 
    } else {
      fetch_collections({writable: true, callback: onCollectionClick, writing_path: "collections"
      }, { render_subject: document.querySelector(classNames.mark_def_cards_cont_loc)}).then(post_actions)
    }
  }
  
  function post_actions() {
    rewrite_cell(localStorage, "loaded", true);
    onScrollDown(document.querySelector(classNames.mark_def_cards_cont_loc));
}

