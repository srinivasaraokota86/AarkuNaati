import React, { useState } from "react";

export default function LanguageSwitcher({ content }) {
  const [lang, setLang] = useState("te");

  return (
    <div className="info-container">

      {/* Language Buttons */}
      <div className="lang-buttons">
        <button onClick={() => setLang("te")}>తెలుగు</button>
        <button onClick={() => setLang("hi")}>हिन्दी</button>
        <button onClick={() => setLang("en")}>English</button>
      </div>

      {/* Title */}
      <h1>{content[lang].title}</h1>

      <img src={content.image} className="info-image" />

      {/* Description */}
      <p>{content[lang].desc}</p>

      <ul>
        {content[lang].benefits.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
