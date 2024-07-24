export const constants = {
  GET_collections_opt: {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-api-key": "197215ab710f4517a080c9046b9d14e2",
    },
  },
  GET_collections: (next, limit) => {
    console.log(next);
    if (next) {
      console.log("truly next");
    } else {
      console.log("nope");
    }
    return `https://api.opensea.io/api/v2/collections?chain=ethereum&include_hidden=false&limit=13&${
      next ? "next=" + next : ""
    }&order_by=seven_day_volume`;
  },
  GET_acc: (acc_name) => `https://api.opensea.io/api/v2/accounts/${acc_name}`,
  GET_NFTs_by_collection: (coll_slug, next) =>
    `https://api.opensea.io/api/v2/collection/${coll_slug}/nfts?limit=24&${
      next ? "next=" + next : ""
    }`,
  classNames: {
    mark_def_cards_cont_loc: ".cards_cont", //marketplace default cards container location
    show_more_btn: ".show_more_btn"
  },
  vars: {
    count: 1
  }
};


