import { fetch_collections } from "./process_collections";


export function onScrollDown(obserbable_cont) {
  const observer_options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  let count = 1;
  const observer_callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && count <= 3) {
        console.log("see");
        count++;
        fetch_collections({writable: false}, { should_render: true, render_subject: document.querySelector(".cards_cont")});
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(
    observer_callback,
    observer_options
  );

  setTimeout(() => {
    observer.observe(obserbable_cont.lastElementChild);
  }, 1000);
}
