import React from "react";
import Home from "./pages/home";
import HTML from "./pages/html";
import Css from "./pages/css";
import Javascript from "./pages/javascript";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/html" exact element={<HTML />} />
        <Route path="/css" exact element={<Css />} />
        <Route path="/javascript" exact element={<Javascript />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
