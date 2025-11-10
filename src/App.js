import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import { Route, Routes } from "react-router-dom";
const HatsPage = (props) => (
  <div>
    {console.log(props)}
    <h1>HatsPage</h1>
  </div>
);
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop/hats" element={<HatsPage />} />
      </Routes>
      \
    </div>
  );
}

export default App;
