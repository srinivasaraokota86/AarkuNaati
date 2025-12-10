import React from "react";
import "./CSS/Farmers.css";
const Farmers = () => {
  const images = [
   { src:"/image/farmera.jpg",name: "Satyavathi Team"},
   { src:"/image/farmerb.jpg",name: "Rama Team"},
   { src:"/image/farmerc.jpg",name: "Srinu"},
   { src:"/image/farmere.jpg",name: "Devi Team"},
   { src:"/image/farmerg.jpg",name: "Ramunaidu"},
      { src:"/image/farmer6.jpg",name: "Narayana Rao"},
   { src:"/image/farmer7.jpg",name: "Venkata Ramana"},
   { src:"/image/farmer8.jpg",name: "Subba Rao"},
   { src:"/image/farmer9.jpg",name: "Appala Naidu Team"},
   { src:"/image/farmer10.jpg",name: "Annapurna Team"}

  ];
return (
        <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>Farmers</h1>

    <div className="gallery-container">
      {images.map((img, index) => (
        <div className="image-card" key={index}>
          <img src={img.src} alt={img.name} />
          <p>{img.name}</p>
        </div>
      ))}
    </div>
    </div>
  );
}
  export default Farmers;


