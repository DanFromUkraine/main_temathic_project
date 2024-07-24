import "../../styles/collection_page.scss";
import "../../styles/general.scss";
import "../../utils/add_header"; 
import "../../utils/add_footer";
import "../../utils/scroll_to_top";
import "../../utils/show_more"
import { onScrollDown } from "../../utils/onScrollDown";

import card_tpl from "../../templates/marketplace_cards.handlebars";
import main_cont_tpl from "../../templates/collection.handlebars";
import { fetch_by_coll_slug } from "../../utils/fetch_by_coll_slug";

const main = document.querySelector("main");

const collection_info = JSON.parse(sessionStorage.getItem("NFT_collection"));
main.insertAdjacentHTML("afterbegin", main_cont_tpl(collection_info))
fetch_by_coll_slug(collection_info.collection).then(({nfts}) => {
    nfts.forEach((nft) => {
        if (nft.image_url) {
            document.querySelector(".cards_cont").insertAdjacentHTML("beforeend", card_tpl(nft));
        }
    });
    // onScrollDown(document.querySelector(".cards_cont"))
})

console.log(JSON.parse(sessionStorage.getItem("NFT_collection")));

