import React from "react";
import "./App.css";
import Header from "./components/navbar/Navbar";
import Home from "../src/pages/home/Home";
import About from "../src/pages/about/About";
import Github from "../src/pages/github/Github";
import Login from "../src/pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/github" element={<Github />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
