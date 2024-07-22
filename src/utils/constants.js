export const constants = {
  GET_collections_opt: {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-api-key": "0105b77a5d9943bea0cb15e50287d826",
    },
  },
  GET_collections: (next, limit) => {
    console.log(next);
    if (next) {
      console.log("truly next");
    } else {
      console.log("nope");
    }
    return `https://api.opensea.io/api/v2/collections?chain=ethereum&include_hidden=false&limit=12&${
      next ? "next=" + next : ""
    }&order_by=seven_day_volume`;
  },
  GET_acc: (acc_name) => `https://api.opensea.io/api/v2/accounts/${acc_name}`,
  GET_NFTs_by_collection: (coll_slug) =>
    `https://api.opensea.io/api/v2/collection/${coll_slug}/nfts?limit=24`,
};
