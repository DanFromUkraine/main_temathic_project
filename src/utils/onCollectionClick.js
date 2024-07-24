
export function onCollectionClick(el, info) {
    el.addEventListener("click", () => {
        console.log(info)
        sessionStorage.setItem("NFT_collection", JSON.stringify(info));
        location.replace("./collection.html");
    })
}   