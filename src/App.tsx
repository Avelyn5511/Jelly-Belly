import "./App.css";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer.tsx";
import Header from "./components/header/header.tsx";
import BeanPage from "./components/pages/BeanPage/BeanPage.tsx";
import BeansPage from "./components/pages/BeansPage/BeansPage.tsx";
import Combinations from "./components/pages/CombinationsPage/CombinationsPage.tsx";
import Facts from "./components/pages/FactsPage/FactsPage.tsx";
import History from "./components/pages/HistoryPage/HistoryPage.tsx";
import Home from "./components/pages/HomePage/HomePage.tsx";
import { NotFound } from "./components/pages/NotFound/NotFound.tsx";
import Recipes from "./components/pages/RecipesPage/RecipesPage.tsx";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Jelly-Belly/home" element={<Home />} />
        <Route path="/Jelly-Belly/beans" element={<BeansPage />} />
        <Route path="/Jelly-Belly/bean/:beanId" element={<BeanPage />} />
        <Route path="/Jelly-Belly/facts" element={<Facts />} />
        <Route path="/Jelly-Belly/recipes" element={<Recipes />} />
        <Route path="/Jelly-Belly/combinations" element={<Combinations />} />
        <Route path="/Jelly-Belly/history" element={<History />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
