import { fetch_collections } from "./process_collections";

function onScrollDown(obserbable_cont) {
  const observer_options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };
  let count = 1;

  const observer_callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && count <= 2) {
        console.log("see");
        count++;
        fetch_collections({next: sessionStorage.getItem("next"), writable: false});
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(
    observer_callback,
    observer_options
  );

  setTimeout(() => {
    observer.observe(document.querySelector(o).lastElementChild);
  }, 1000);
}
