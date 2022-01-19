import { Pages } from "pages";
import "./index.scss";
import { withProviders } from "./providers";

function App() {
  return (
    <div className="app">
      <Pages />
    </div>
  );
}

export default withProviders(App);
