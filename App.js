import Counter from "./src/featuer/counter/Counter";
import store from "./src/Store";

import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
