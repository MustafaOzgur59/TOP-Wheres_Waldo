import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Level from "./Components/Level";
import styled from "styled-components";
function App() {
  return (
    <AppWrapper>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/scores" element={<Scores />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/:id" element={<Level />} />
        </Routes>
        <Footer />
      </Router>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
export default App;
