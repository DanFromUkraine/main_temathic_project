import { constants } from "./constants"
import { rewrite_cell, read_st } from "./st_communicator";
const {GET_NFTs_by_collection, GET_collections_opt} = constants;

export async function fetch_by_coll_slug(coll_slug) {
   return fetch(GET_NFTs_by_collection(coll_slug), GET_collections_opt).then(resp => resp.json()).then(res => {
      console.log(res.next);
      rewrite_cell(sessionStorage, "nft_next", res.next);
      return res;
   })
}