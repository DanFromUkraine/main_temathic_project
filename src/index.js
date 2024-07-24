import "./styles/homepage&index.scss";
import "./styles/general.scss";
import "./utils/add_header";
import "./utils/add_footer";
import "./utils/scroll_to_top";
import "./utils/renderNftsHomepage"  
import { scroll_to } from "./utils/scroll_to_el";

scroll_to(document.querySelector(".get_started"), document.querySelector(".how_it_works"));