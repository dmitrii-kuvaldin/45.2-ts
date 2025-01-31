import { HashRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Layout from "./components/layout/Layout";
import ButtonsPage from "./pages/buttonsPage/ButtonsPage";
import InputPage from "./pages/inputPage/InputPage";
import FeedbackPage from "./pages/feedbackPage/FeedbackPage";
import CardsPage from "./pages/cardsPage/CardsPage";
import Products from "./components/products/Products";
import Navbar from "./ui/navigation/navbar/Navbar";
import Sidebar from "./ui/navigation/sudebar/Sidebar";


function App() {

  return (
    <>
      <HashRouter>
        <header>
          <Navbar />
        </header>
        <Sidebar />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<InputPage />} />
            <Route path="/buttons" element={<ButtonsPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/cards" element={<CardsPage />} />
            <Route path="/products/:page?" element={<Products />} />
          </Route>
        </Routes>
      </HashRouter>


    </ >

  );
}

export default App;
