import NFTs_tpl from "../templates/NFTs.handlebars";

export function onCollectionClick(el, info) {
    console.log("slfksdf");
    el.addEventListener("click", () => {
        sessionStorage.setItem("NFT_collection", JSON.stringify(info));
        location.replace("./collection.html");
    })
}