import React, { useState, useRef, useEffect } from "react";

import { FaAngleUp } from "react-icons/fa";

const Question = ({ question, answer }) => {
  const [showInfo, setShowInfo] = useState(false);
  const textContainerRef = useRef(null);
  const textRef = useRef(null);

  // dynamic dropdown calculated by height of the content
  useEffect(() => {
    const textHeight = textRef.current.getBoundingClientRect().height;
    if (showInfo) {
      textContainerRef.current.style.height = `${textHeight}px`;
    } else {
      textContainerRef.current.style.height = "0px";
    }
  }, [showInfo]);

  let iconStyles = { height: "100%", width: "50%", color: "white" };

  return (
    <article className="Question">
      <header className="Question__header">
        <h4 className="Question__title">{question}</h4>
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
        ref={textContainerRef}
      >
        <p ref={textRef}>{answer}</p>
      </div>
    </article>
  );
};

export default Question;
