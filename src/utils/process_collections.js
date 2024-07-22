import cards_tpl from "../templates/marketplace_cards.handlebars";
import { constants } from "./constants";
const { GET_collections_opt, GET_collections, GET_acc } = constants;
import { onCollectionClick } from "./onCollectionClick";
import { add_to_array_cell, rewrite_cell } from "./write_in_st";

// export async function fetch_collections(next_str, storage, writing_path) {
//   fetch(GET_collections(next_str), GET_collections_opt)
//     .then((resp) => resp.json())
//     .then((res) => {
//       const { collections } = res;
//       sessionStorage.setItem("next_str", res.next);
//       collections.map((collection) => {
//         fetch(GET_acc(collection.owner), GET_collections_opt)
//           .then((resp) => resp.json())
//           .then((res) => {
//             const fulfield_collection = { ...collection, ...res };

//             if (!storage) {
//               write_in_localStorage("collections", fulfield_collection);

//               document
//                 .querySelector(".cards_cont")
//                 .insertAdjacentHTML(
//                   "beforeend",
//                   cards_tpl(fulfield_collection)
//                 );

//               onCollectionClick(
//                 document.querySelector(".cards_cont").lastElementChild,
//                 fulfield_collection
//               );
//             }
//             if (writing_path) {
//               write_in_localStorage(writing_path, fulfield_collection);
//             }
//           });
//       });
//     })
//     .catch((err) => {
//       location.replace("./error.html");
//     });
//   if (!storage) {
//     localStorage.setItem("loaded", true);
//   }
// }

// if (localStorage.getItem("loaded")) {
//   const cards_data = JSON.parse(localStorage.getItem("collections"));
//   cards_data.forEach((card_data) => {
//     document
//       .querySelector(".cards_cont")
//       .insertAdjacentHTML("beforeend", cards_tpl(card_data));

//     onCollectionClick(
//       document.querySelector(".cards_cont").lastElementChild,
//       card_data
//     );
//   });
// } else {
//   fetch_collections();
// }

export function fetch_collections(
  { next, writable, writing_path },
  { should_render, render_subject, render_template }
) {
  fetch(GET_collections(next), GET_collections_opt)
    .then((resp) => resp.json())
    .then((resp) => {

      for (const collection of resp.collections) {
        get_collection_with_author(collection).then((fulfield_collection) => {
          console.log(fulfield_collection);
          if (writable) {
            add_to_array_cell(localStorage, writing_path, fulfield_collection);
            rewrite_cell(sessionStorage, "next", resp.next)
          }
          if (should_render) {
            render_subject.insertAdjacentHTML(
              "beforeend",
              render_template(fulfield_collection)
            );
          }
        });
      }
    }).catch(err => console.log(err))
}

fetch_collections({writable: true}, { should_render: false });

function get_collection_with_author(collection) {
  return fetch(GET_acc(collection.owner), GET_collections_opt)
    .then((resp) => resp.json())
    .then((res) => {
      return { ...collection, ...res };
    });
}

