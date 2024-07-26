import { fetch_collections } from "./process_collections";
import { read_st } from "./st_communicator";

import { onCollectionClick } from "./onCollectionClick";
import hero_card_tpl from "../templates/hero_card.handlebars";
import trending_card_tpl from "../templates/trending_card.handlebars";

import { insert_via_tpl } from "./insert_card_with_tpl";

const cards_to_insert = [
  [hero_card_tpl, document.querySelector(".hero_img")],
  [trending_card_tpl, document.querySelector(".trending_cards_cont")],
  [trending_card_tpl, document.querySelector(".trending_cards_cont")],
  [trending_card_tpl, document.querySelector(".trending_cards_cont")],
];

if (!read_st(localStorage, "collections")) {
  fetch_collections(
    { next: sessionStorage.getItem("next"), writing_path: "collections" },
    { should_render: false }
  )
} else {
  assign_arrays(
    cards_to_insert,
    read_st(localStorage, "collections"),
    insert_via_tpl
  );
}

function assign_arrays(array1, array2, callback) {
  for (let i = 0; i < array1.length; i++) {
    callback(...array1[i], array2[i], onCollectionClick);
  }
}

