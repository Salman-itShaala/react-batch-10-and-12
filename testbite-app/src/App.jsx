import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Recipes from "./pages/recipes/Recipes";
import "./App.css";
import Header from "./components/header/Header";
import NotFound from "./pages/not-found/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="recipes" element={<Recipes />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
