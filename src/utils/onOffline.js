
window.addEventListener("offline", onOffline);
function onOffline() {
    location.replace("./error.html");
}