import footer_tpl from "../templates/footer.handlebars"

async function add_footer() {
    if (!document.querySelector("footer")) {
      await new Promise((resolve) => {
        document
          .querySelector("main")
          .insertAdjacentHTML(
            "beforeend",
            footer_tpl()
          );
        resolve();
      });
    } 
}
  
  add_footer()