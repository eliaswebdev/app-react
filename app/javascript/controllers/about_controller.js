import AboutPage from "../react/pages/About";
import ReactController from "./react_controller";

export default class extends ReactController {
  mount() {
    const props = this.parseProps(this.element.dataset.props);
    this.mountComponent(AboutPage, props);
  }
}
