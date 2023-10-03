import Home from "@lib/pages/home";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const Index = () => {
  return <Home />;
};

export default Index;
