
export function scroll_to(subject, object) {
    subject.addEventListener("click", (e) => {
        e.preventDefault();
        const obj_dist_to_top = object.getBoundingClientRect().top;
        console.log(obj_dist_to_top);
        window.scrollTo({
            top: obj_dist_to_top,
            behavior: "smooth"
        })
    });
}

