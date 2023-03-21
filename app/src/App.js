import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import { StoreProvider } from "easy-peasy";
import { store } from "./state/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  return (
      <StoreProvider store={store}>
      <BrowserRouter>
            <div><Navbar /></div>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
      </BrowserRouter>
      </StoreProvider>
  )
}

export default App