import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
