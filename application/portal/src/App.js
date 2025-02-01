import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./main/pages/Home";
import Login from "./main/pages/Login";
import Register from "./main/pages/Register";
import Header from "./main/componets/Header";
import BottomHeader from "./main/componets/BottomNavigationHeader";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <BottomHeader/>
    </BrowserRouter>
  );
};

export default App;
