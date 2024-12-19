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
        <Route path="/BeansHomeWork/home" element={<Home />} />
        <Route path="/BeansHomeWork/beans" element={<BeansPage />} />
        <Route path="/BeansHomeWork/bean/:beanId" element={<BeanPage />} />
        <Route path="/BeansHomeWork/facts" element={<Facts />} />
        <Route path="/BeansHomeWork/recipes" element={<Recipes />} />
        <Route path="/BeansHomeWork/combinations" element={<Combinations />} />
        <Route path="/BeansHomeWork/history" element={<History />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
