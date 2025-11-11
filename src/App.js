import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/Header";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop/" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
