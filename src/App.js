import { BrowserRouter} from "react-router-dom";
import Port from "./Port";
import Port2 from "./Port2";
import Port3 from "./Port3";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Port />
        <Port2 />
        <Port3 />
      </BrowserRouter>
    </div>
  );
}

export default App;
