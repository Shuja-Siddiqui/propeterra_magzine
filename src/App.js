import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBox from "./components/header/Search";
import NavBar from "./components/navbar/NavBar";
import HeaderPage from "./pages/Header";
import { useState } from "react";
import Footer from "./pages/Footer";
import SlideShow from "./components/slideshow/SlideShow";

function App() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <Router>
      <div className="">
        <HeaderPage />
        <NavBar showSearch={showSearch} setShowSearch={setShowSearch} />
        {showSearch && <SearchBox showSearch={showSearch} />}
        {/* <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} /> */}
        <SlideShow />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
