import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Header } from "@/components";

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
