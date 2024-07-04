import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import SearchBox from "./components/header/Search";
import NavBar from "./components/navbar/NavBar";
import HeaderPage from "./pages/Header";
import { useState } from "react";
import Footer from "./pages/Footer";
import useIsMobile from "./hooks/useIsMobile";
import MobileHeader from "./components/header/MobileHeader";
import MobileFooter from "./components/footer/MobileFooter";
import MainPage from "./components/blogPost/MainPage";
import Home from "./pages/Home";
import ScrollToTop from "./components/helper/ScrollToTop";
import ImageCarousel from "./components/footer/ImageCarousel";
import CategoryPage from "./components/categories/CategoryPage";

function App() {
  const [showSearch, setShowSearch] = useState(false);
  const [newsFilter, setNewsFilter] = useState("Home");
  const isMobile = useIsMobile();
  return (
    <Router>
      <ScrollToTop />
      <div className="">
        {isMobile ? (
          <MobileHeader
            setNewsFilter={setNewsFilter}
            showSearch={showSearch}
            setShowSearch={setShowSearch}
          />
        ) : (
          <HeaderPage />
        )}
        {isMobile ? (
          <></>
        ) : (
          <NavBar
            setNewsFilter={setNewsFilter}
            showSearch={showSearch}
            setShowSearch={setShowSearch}
          />
        )}
        {showSearch && <SearchBox showSearch={showSearch} />}
        <Routes>
          <Route path="/" exact element={<Home newsFilter={newsFilter} />} />
          <Route path="/blog" element={<MainPage />} />
          <Route path="/category" element={<CategoryPage newsFilter={newsFilter} />} />
        </Routes>
        <ImageCarousel />

        {isMobile ? <MobileFooter /> : <Footer />}
      </div>
    </Router>
  );
}

export default App;
