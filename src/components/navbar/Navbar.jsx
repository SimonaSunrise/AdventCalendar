import React from "react";
import "./index.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Calendar">📅</div>
      <div className="Title">
        <div>
          <h2>🎅🏻 IT'S TIIIIIIIME! 🎄</h2>
        </div>
        <div>
          {" "}
          <h4> ADVENT CALENDAR FOR DEVELOPERS 💌 </h4>
        </div>
      </div>
      <div className="Tooltip">
        <p> Come funziona❔</p>
        <span className="Tooltip_text">
          Il calendario dell'avvento è un countdown natalizio che inizia il 1°
          dicembre e termina il 24. <br /> Ogni giorno, apri una finestrella e
          trovi una sorpresa!❤️
        </span>
      </div>
    </div>
  );
};

export default Navbar;
