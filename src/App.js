import "./styles/style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "pages/Login";
import { Panel } from "pages/Panel";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Team from "./pages/Team";
// import { useLoginContext } from "components/login/LoginProvider";

const App = () => {
  // const {logged} = useLoginContext();
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="main">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/*" element={<NotFound />} />
              {/* Examplary rout  */}
              {/* <Route path="example" element={logged ? <ExampleElem/> : <Login/>}/> */}
              <Route path="/login" element={<Login />} />
              <Route path="/panel" element={<Panel />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
