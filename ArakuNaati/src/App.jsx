import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import * as bootstrap from "bootstrap"; // includes Collapse JS
import "./CSS/App.css";
import MangoPage from "./pages/MangoPage";
import CashewPage from "./pages/CashewPage";
import TamarindPage from "./pages/TamarindPage";
import GroundnutsPage from "./pages/GroundnutsPage";
import MilletsPage from "./pages/MilletsPage";
import RicePage from "./pages/RicePage";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";





import Home from "./Home";
import About from "./About";
import Farmers from "./Farmers";
import Notfound from "./Notfound";

import { useSelector } from "react-redux";
import {
  Home as HomeIcon,
  Apple,
  Info,
} from "lucide-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const cartItems = useSelector((state) => state.cart || []);
  
  const cartcount = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);

  // Update page padding dynamically
  useEffect(() => {
    const header = document.querySelector(".top-header");
    const navbar = document.querySelector(".navbar");
    const pageContent = document.querySelector(".page-content");

    const updatePadding = () => {
      if (!header || !navbar || !pageContent) return;
      const headerHeight = header.offsetHeight;
      const navbarHeight = navbar.offsetHeight;

      document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);
      document.documentElement.style.setProperty("--navbar-height", `${navbarHeight}px`);

      pageContent.style.paddingTop = `${headerHeight + navbarHeight}px`;
    };

    updatePadding();
    window.addEventListener("resize", updatePadding);
    window.addEventListener("load", updatePadding);

    return () => {
      window.removeEventListener("resize", updatePadding);
      window.removeEventListener("load", updatePadding);
    };
  }, []);

  // Smoothly close navbar on mobile click
  const closeNavbar = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (!navbarCollapse) return;

    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      } else {
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    }
  };

  return (
    <BrowserRouter>
<header className="top-header text-light shadow-sm">

  <div className="container d-flex justify-content-between align-items-center">

    {/* 🔥 LEFT SIDE — LOGO */}
    <img 
      src="/image/logo1.png" 
      alt="Araku Naati Logo" 
      className="logo-img"
      style={{ height: "68px", width: "75px", borderRadius: "50%" }}
    />

    {/* 🔥 CENTER — TITLE + MANGO ICON */}
    <div className="d-flex flex-column align-items-center">
       <div className="d-flex align-items-center gap-2">
      <img
        src="/image/Micon.png"
        alt="Mango Icon"
        className="img-fluid"
        style={{ maxHeight: "45px" }}
      />

      <h2 className="brand-title mb-0">Araku Naati</h2>
      </div>
      <p className="tagline mb-0 small text-center">
        Your one-stop shop for fresh and organic fruits
      </p>
    </div>

    {/* 🔥 RIGHT SIDE — EMPTY (for perfect centering) */}
    <div style={{ width: "55px" }}></div>

  </div>
</header>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">

  <div className="container">

    {/* LEFT SIDE: Delivery Nav + Dropdown */}
    <div className="d-flex align-items-center me-auto gap-3">

      {/* Delivery Locations NavLink */}
 <div className="nav-link text-light d-flex align-items-center gap-1">
        <Info size={18} /> Delivery Locations
      </div>
      {/* Dropdown */}
      <select
        style={{
          padding: "6px 10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
      >
        <option>Vishakapatnam</option>
        <option>Vizianagaram</option>
        <option>Gajapathinagaram</option>
      </select>

    </div>

    {/* Toggler */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* RIGHT SIDE MENU */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">

        <li className="nav-item">
          <NavLink to="/" end className="nav-link d-flex align-items-center gap-2" onClick={closeNavbar}>
            <HomeIcon size={20} /> Home
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/about" className="nav-link d-flex align-items-center gap-2" onClick={closeNavbar}>
            <Info size={20} /> About Us
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/farmers" className="nav-link d-flex align-items-center gap-2" onClick={closeNavbar}>
            <Info size={20} /> Farmers
          </NavLink>
        </li>

      </ul>
    </div>

  </div>
</nav>

      <a
  href="https://wa.me/8186936909"
  className="whatsapp_float"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="fab fa-whatsapp whatsapp-icon"></i>
</a>



      <div className="page-content">
        {/* Show search results if user types in search box */}
        {searchQuery ? (
          <SearchResults query={searchQuery} />
        ) : (
          <main className="page-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
           <Route path="/farmers" element={<Farmers />} />
        <Route path="/*" element={<Notfound />} />
             <Route path="/mango" element={<MangoPage />} />
               <Route path="/cashew" element={<CashewPage />} />
        <Route path="/tamarind1" element={<TamarindPage />} />
                <Route path="/groundnuts" element={<GroundnutsPage />} />
        <Route path="/millets" element={<MilletsPage />} />
                <Route path="/rice" element={<RicePage />} />

          </Routes>
          </main>
 )}
                </div>
                <Footer/>
  </BrowserRouter>
  );
}

export default App;
