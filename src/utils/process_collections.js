import cards_tpl from "../templates/marketplace_cards.handlebars";

import { constants } from "./constants";
const { GET_collections_opt, GET_collections, GET_acc } = constants;

export async function fetch_collections(next_str, storage) {
  fetch(GET_collections(next_str), GET_collections_opt)
    .then((resp) => resp.json())
    .then((res) => {
        const {collections} = res;
        sessionStorage.setItem("next_str", res.next);
        collections.map((collection) => {
          fetch(GET_acc(collection.owner), GET_collections_opt)
            .then(resp => resp.json())
            .then(res => {
                const fulfield_collection = {...collection, ...res}
                document.querySelector(".cards_cont").insertAdjacentHTML("beforeend", cards_tpl(fulfield_collection));
                if (!storage) {
                    write_in_localStorage("collections", fulfield_collection);
                }
            });
        })
    }).catch(err => {
        location.replace("./error.html")
    });
    localStorage.setItem("loaded", true);
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("loaded")) {
    const cards_data = JSON.parse(localStorage.getItem("collections"));
    cards_data.forEach(card_data => document.querySelector(".cards_cont").insertAdjacentHTML("beforeend", cards_tpl(card_data)));
    observer.observe(document.querySelector(".cards_cont").lastElementChild);
  } else {
    fetch_collections();
  }
});


export function write_in_localStorage(key, value) {
    if (!JSON.parse(localStorage.getItem(key))) {
        localStorage.setItem(key, JSON.stringify([value]));
    } else {
        const last_val = JSON.parse(localStorage.getItem(key));
        last_val.push(value);

        if (last_val.length <= 12) {
            localStorage.setItem(key, JSON.stringify(last_val));
        } 
    }
}


const observer_callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            fetch_collections(sessionStorage.getItem("next_str"), true);
            observer.unobserve(entry.target); 

        }
    });
};

const observer_options = {
    root: null, 
    rootMargin: '0px',
    threshold: 0.1 
};

const observer = new IntersectionObserver(observer_callback, observer_options);


const show_more_btn = document.querySelector(".show_more_btn");
show_more_btn.addEventListener("click", (e) => {
    fetch_collections(sessionStorage.getItem("next_str", true))
})