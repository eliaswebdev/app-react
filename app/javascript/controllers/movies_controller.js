import MoviesPage from "../pages/Movies";
import ReactController from "./react_controller";

export default class extends ReactController {
  mount() {
    this.mountComponent(MoviesPage);
  }
}
