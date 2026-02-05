import HomePage from "../react/pages/Home";
import ReactController from "./react_controller";

export default class extends ReactController {
  mount() {
    const props = this.parseProps(this.element.dataset.props);
    this.mountComponent(HomePage, props);
  }
}
