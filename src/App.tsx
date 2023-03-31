import Header from "./components/partials/Header";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
      </div>
    </Provider>
  );
}

export default App;
