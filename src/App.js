import "./styles/style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { About, Home, NotFound, Team, Panel, Login } from "./pages";
import { Navbar, Footer } from "./components/layout";

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
