import cards_tpl from "../templates/marketplace_cards.handlebars";

import { constants } from "./constants";
const { GET_collections_opt, GET_collections, GET_acc } = constants;

async function fetch_collections(next_str, storage) {
  fetch(GET_collections(next_str), GET_collections_opt)
    .then((resp) => resp.json())
    .then((res) => {
        const {collections} = res;
        sessionStorage.setItem("next_str", res.next);
    //   Promise.all(
        collections.map((collection) => {
          fetch(GET_acc(collection.owner), GET_collections_opt)
            .then(resp => resp.json())
            .then(res => {
                const fulfield_collection = {...collection, ...res}
                document.querySelector(".cards_cont").insertAdjacentHTML("beforeend", cards_tpl(fulfield_collection));
                if (storage) {
                    console.log(storage);
                } else {
                    console.log(storage);
                    write_in_localStorage("collections", fulfield_collection);
                }
            });
        })
    //   );
    });
    localStorage.setItem("loaded", true);
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("loaded")) {
    const cards_data = JSON.parse(localStorage.getItem("collections"));
    cards_data.forEach(card_data => document.querySelector(".cards_cont").insertAdjacentHTML("beforeend", cards_tpl(card_data)));
  } else {
    fetch_collections();
  }
});


function write_in_localStorage(key, value) {
    if (!JSON.parse(localStorage.getItem(key))) {
        localStorage.setItem(key, JSON.stringify([value]));
    } else {
        const last_val = JSON.parse(localStorage.getItem(key));
        last_val.push(value);

        if (last_val.length <= 12) {
            localStorage.setItem(key, JSON.stringify(last_val));
        } else {
            console.log("Сховище переповнено")
        }
    }
}

let count = 0;
document.addEventListener("scroll", () => {
    if (count < 3 && window.innerHeight - window.scrollY < 600) {
        fetch_collections(sessionStorage.getItem("next_str"), true);
        count++;
    }
})