import React from "react";
import { useState } from "react";
import "./index.css";

const Card = ({ day, present, classNames }) => {
  const [isOpen, setIsOpen] = useState(false);
  const now = new Date();
  let today = now.getDay();

  const handleClick = () => {
    if (today === day) {
      setIsOpen(true);
    }
  };

  const isPast = () => {
    if (isOpen) {
      return "Card_Open";
    } else if (day < today) {
      return "Card_Open";
    } else {
      return "Card_Closed";
    }
  };

  return (
    <div className={classNames}>
      <div className={isPast()} onClick={() => handleClick()}>
        <div className="Box_Btn">
          <button className="Btn">
            <a href={present} target="_blank">
              {" "}
              GIFT
            </a>{" "}
          </button>
        </div>
        <div className="Day">
          <p>{day}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
