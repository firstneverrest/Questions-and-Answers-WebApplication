import React, { useState } from "react";

import { FaAngleUp, FaAngleDown } from "react-icons/fa";
// import { CSSTransition } from "react-transition-group";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  let iconStyles = { height: "100%", width: "50%", color: "white" };

  return (
    <article className="Question">
      <header className="Question__header">
        <h4 className="Question__title">{title}</h4>
        <button
          className={`${
            showInfo ? "Question__button-normal" : "Question__button-active"
          }`}
          onClick={() => setShowInfo(!showInfo)}
        >
          <FaAngleUp style={iconStyles} />
        </button>
      </header>
      <div
        className={`${
          showInfo ? "Question__info-active" : "Question__info-hide"
        }`}
      >
        <p>{info}</p>
      </div>
    </article>
  );
};

export default Question;
