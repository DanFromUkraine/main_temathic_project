const path = location.pathname.match(/\/([^\/]+)\.html$/);
document.querySelectorAll(`.${path[1]}`).forEach((link) =>
  link.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  })
);
