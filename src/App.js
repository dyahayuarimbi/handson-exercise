import { Provider } from "react-redux";
import Home from "./pages/Home";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}