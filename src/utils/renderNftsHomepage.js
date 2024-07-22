import { fetch_collections } from "./process_collections"


fetch_collections({writable: false, next: sessionStorage.getItem("next"), writing_path: "homepage"}, {should_render: false});

setTimeout(() => {
    console.log(
        JSON.parse(localStorage.getItem("homepage"))
    );  
}, 1000)
