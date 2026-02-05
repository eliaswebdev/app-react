import { Controller } from "@hotwired/stimulus";
import {
  mount,
  mountComponent as mountComponentRoot,
  unmount,
} from "../react/react_application";

export default class ReactController extends Controller {
  connect() {
    const mountNode =
      this.element.querySelector("[data-react-root]") || this.element;

    if (typeof this.mount === "function") {
      // allow child controllers to implement a `mount()` method
      this.mount();
    } else if (mountNode) {
      mount(mountNode);
    }
  }

  disconnect() {
    const mountNode =
      this.element.querySelector("[data-react-root]") || this.element;
    if (mountNode) unmount(mountNode);
  }

  parseProps(raw) {
    if (!raw) return {};
    try {
      return JSON.parse(raw);
    } catch (e) {
      return {};
    }
  }

  mountComponent(Component, props = {}) {
    const mountNode =
      this.element.querySelector("[data-react-root]") || this.element;
    if (mountNode) mountComponentRoot(mountNode, Component, props);
  }
}
