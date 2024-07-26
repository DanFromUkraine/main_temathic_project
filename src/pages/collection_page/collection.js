import "../../styles/collection_page.scss";
import "../../styles/general.scss";
import "../../utils/add_header"; 
import "../../utils/add_footer";
import "../../utils/scroll_to_top";

import card_tpl from "../../templates/marketplace_cards.handlebars";
import main_cont_tpl from "../../templates/collection.handlebars";
import { fetch_by_coll_slug } from "../../utils/fetch_by_coll_slug";
import { constants } from "../../utils/constants";
import { read_st } from "../../utils/st_communicator";
import { onScrollDown } from "../../utils/onScrollDown";
const { classNames } = constants;

const main = document.querySelector("main");

const collection_info = JSON.parse(sessionStorage.getItem("NFT_collection"));
main.insertAdjacentHTML("afterbegin", main_cont_tpl(collection_info))
fetch_by_coll_slug(collection_info.collection).then(render)

function render({nfts}) {
    nfts.forEach((nft) => {
        if (nft.image_url) {
            document.querySelector(".cards_cont").insertAdjacentHTML("beforeend", card_tpl(nft));
        }
    });
}


document.querySelector(".show_more_btn").addEventListener("click", () => {
    console.log("show_more_btn onclick");
    fetch_by_coll_slug(collection_info.collection, read_st(sessionStorage, "nft_next")).then(render)
})
