import { write_in_localStorage } from "./process_collections"
import { constants } from "./constants";
const { GET_collections_opt} = constants;
document.querySelector(".marketplace_search_input").addEventListener("click", fetch_more_collections)


document.addEventListener("DOMContentLoaded", fetch_more_collections)

function fetch_more_collections() {
    let next;
    for (let i = 0; i <= 5; i++) {
        fetch(GET_collections(next), GET_collections_opt)
         .then((resp) => resp.json())
            .then((res) => {
        const {collections} = res;
        next = res.next;

        collections.map((collection) => {
          fetch(GET_acc(collection.owner), GET_collections_opt)
            .then(resp => resp.json())
            .then(res => {
                const fulfield_collection = {...collection, ...res}
                    write_in_localStorage("collections", fulfield_collection);
            });
        })
    });
    }
}