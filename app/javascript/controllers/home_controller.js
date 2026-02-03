import { Controller } from "@hotwired/stimulus";
import React from "react";
import { createRoot } from "react-dom/client";

import HomeHello from "../components/HomeHello";

export default class extends Controller {
  connect() {
    this.mount();
  }

  disconnect() {
    this.unmount();
  }

  mount() {
    const el = this.element;
    if (!el) return;

    const props = parseProps(el.dataset.props);

    // criar um container interno para não sobrescrever atributos/filhos do elemento
    if (!this._container) {
      this._container = document.createElement("div");
      el.appendChild(this._container);
    }

    if (!this._reactRoot) {
      this._reactRoot = createRoot(this._container);
    }

    this._reactRoot.render(React.createElement(HomeHello, props));
  }

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
}

function parseProps(raw) {
  if (!raw) return {};
  if (typeof raw === "object") return raw;
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}
