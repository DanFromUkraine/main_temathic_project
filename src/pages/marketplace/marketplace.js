import "../../styles/marketplace.scss";
import "../../styles/general.scss";
import "../../utils/add_header";
import "../../utils/add_footer";
import "../../utils/scroll_to_top";
import "../../utils/process_collections";
import "../../utils/onOffline";

window.addEventListener("offline", onOffline);
function onOffline() {
    if (!window.navigator.onLine) {
    }
    location.replace("./error.html");

}