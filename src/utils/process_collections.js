import cards_tpl from "../templates/marketplace_cards.handlebars";
import { constants } from "./constants";
const { GET_collections_opt, GET_collections, GET_acc, classNames } = constants;
import { onCollectionClick } from "./onCollectionClick";
import { add_to_array_cell, rewrite_cell, read_st } from "./st_communicator";
import { insert_via_tpl } from "./insert_card_with_tpl";
import { onScrollDown } from "./onScrollDown";

export function fetch_collections(
  {  writable, writing_path, callback },
  { render_subject = false, render_template = cards_tpl }
) {
  return fetch(GET_collections(read_st(sessionStorage, "next")), GET_collections_opt)
    .then((resp) => resp.json())
    .then((resp) => {
      const fulfield_collections = []
      for (const collection of resp.collections) {
        if (collection.image_url === null) {
          continue;
        }
        get_collection_with_author(collection).then((fulfield_collection) => {
          fulfield_collections.push(collection);
          if (writable !== null) {
            add_to_array_cell(localStorage, writing_path, fulfield_collection);
            rewrite_cell(sessionStorage, "next", resp.next)
          }
          if (render_subject) {
            render_subject.insertAdjacentHTML(
              "beforeend",
              render_template(fulfield_collection)
            );
          }
          if (typeof callback === "function") {
            if (document.querySelector(classNames.mark_def_cards_cont_loc)) { // я не знаю чого, але навіть коли значення callback = undefined, він все одно намагається програти блок коду нижче
              callback(document.querySelector(classNames.mark_def_cards_cont_loc).lastElementChild, fulfield_collection)
            }  
          }
         });
      }
    }).then(() => true).catch(err => console.log(err))
}

function post_actions(rendered) {
  rewrite_cell(localStorage, "loaded", true);
    onScrollDown(document.querySelector(classNames.mark_def_cards_cont_loc));
}



export function main_callbacks(el_node, el_data) {
  onCollectionClick(el_node, el_data);
}

function get_collection_with_author(collection) {
  return fetch(GET_acc(collection.owner), GET_collections_opt)
    .then((resp) => resp.json())
    .then((res) => {
      return { ...collection, ...res };
    });
}

export function init_marketplace() {
  if (localStorage.getItem("loaded")) {
    for (const collection of read_st(localStorage, "collections")) {
      insert_via_tpl(cards_tpl, document.querySelector(classNames.mark_def_cards_cont_loc), collection, main_callbacks)
    } 
  } else {
    fetch_collections({writable: true, callback: main_callbacks, writing_path: "collections"
    }, { render_subject: document.querySelector(classNames.mark_def_cards_cont_loc)}).then(post_actions)
  }
}




