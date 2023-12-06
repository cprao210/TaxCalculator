import "./App.css";
import TaxCalculator from "./containers/TaxCalculator";
import { Todos } from "./containers/TaxCalculator/Todos";
// import Todos from "./containers/TaxCalculator/Todos";

function App() {
  return (
    <div className="App">
      {/* <TaxCalculator /> */}
      <Todos />
    </div>
  );
}

export default App;
