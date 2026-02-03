import { Controller } from "@hotwired/stimulus";
import React from "react";
import { createRoot } from "react-dom/client";

export default class ReactController extends Controller {
  connect() {
    this.mount();
  }

  disconnect() {
    this.unmount();
  }

  // Subclasses can override mount() or call mountComponent from it.
  mount() {}

  unmount() {
    if (this._reactRoot) {
      this._reactRoot.unmount();
      this._reactRoot = null;
    }

    if (this._container && this._container.parentNode === this.element) {
      this._container.remove();
      this._container = null;
    }
  }

  mountComponent(Component, props = {}) {
    const el = this.element;
    if (!el) return;

    if (!this._container) {
      this._container = document.createElement("div");
      el.appendChild(this._container);
    }

    if (!this._reactRoot) {
      this._reactRoot = createRoot(this._container);
    }

    this._reactRoot.render(React.createElement(Component, props));
  }

  parseProps(raw) {
    if (!raw) return {};
    if (typeof raw === "object") return raw;
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  }
}
