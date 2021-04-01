import React from "react";

import Question from "./Question";
import Navbar from "./Navbar";

const Questions = ({ questions, filterQuestions }) => {
  return (
    <div className="Questions">
      <h2 className="Questions__header">Questions and Answers about me</h2>
      <div className="Questions__navigation">
        <Navbar filterQuestions={filterQuestions} />
      </div>

      <div className="Questions__question">
        {questions.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
      </div>
    </div>
  );
};

export default Questions;
