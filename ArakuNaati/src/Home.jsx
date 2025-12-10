import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./CSS/home.css";

function Home() {
  const images = [
        { src: "/image/rice.png", name: " Rice", price: "₹90/kg" ,link: "/rice", bg: "#F5F1E4",textColor: "#5A4A2E"},
    { src: "/image/Mango.jpg", name: "Mango", price: "₹120/kg",link: "/mango" ,bg: "#FFF7D6",textColor: "orange"},
    { src: "/image/cashew.jpg", name: "Cashew", price: "₹850/kg" ,link: "/cashew",  bg: "#F5EFE6", textColor: "brown"}, 
    { src: "/image/tamarind1.jpg", name: "Tamarind", price: "₹90/kg" ,link: "/tamarind1", bg: "#E8F7EE",textColor: "green"},
    { src: "/image/Groundnuts.jpg", name: "Groundnuts", price: "₹90/kg" ,link: "/groundnuts", bg: "#F9EFD9",textColor: "#A8682A"},
    { src: "/image/Millets.jpg", name: " Finger Millets", price: "₹90/kg" ,link: "/millets", bg: "#FFF7D1",textColor: "#6A8F1F"},


  ];

  return (
    <>
      {/* ================= Header Text ================= */}
      <div>
        <h1 className="text-center mt-4">
          From our farms to your home — naturally packed, plastic-free
        </h1>
      </div>

      {/* ================= 6 Images Grid ================= */}
      <div className="gallery-container">
        {images.map((item, index) => (
          <div className="image-card" key={index}
           onClick={() => navigate(item.link)}
            style={{
        cursor: "pointer",
        backgroundColor: item.bg ,// ← Background color here
         border: item.border,
    borderRadius: "18px"     
      }}>
            <img src={item.src} alt={item.name} />
            <Link to={item.link} style={{ textDecoration: "none" }}>
  <h3
    style={{
      color: item.textColor,
      fontWeight: "bold"
    }}
  >
    {item.name}
  </h3>
</Link>

            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>

      {/* ================= Reviews ================= */}
      <section className="reviews-section">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">What Our Customers Say</h2>

          <div className="scroll-wrapper">
            <div className="scroll-content">

              <div className="review-box">"Amazing fresh vegetables! Fast delivery." — Gopal RKrishna ⭐⭐⭐⭐⭐</div>
              <div className="review-box">"Quality is excellent!" — Meena ⭐⭐⭐⭐⭐</div>
              <div className="review-box">"Very fresh fruits!" — Ravi Kumar ⭐⭐⭐⭐⭐</div>
              <div className="review-box">"Great service!" — Divya ⭐⭐⭐⭐⭐</div>

              {/* Duplicate for loop effect */}
              <div className="review-box">"Amazing fresh vegetables! Fast delivery." — Gopal RKrishna ⭐⭐⭐⭐⭐</div>
              <div className="review-box">"Quality is excellent!" — Meena ⭐⭐⭐⭐⭐</div>
              <div className="review-box">"Very fresh fruits!" — Ravi Kumar ⭐⭐⭐⭐⭐</div>
              <div className="review-box">"Great service!" — Divya ⭐⭐⭐⭐⭐</div>

            </div>
          </div>
        </div>
      </section>
</>
  );
}

export default Home;
