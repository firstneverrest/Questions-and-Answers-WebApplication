import React, { useState } from "react";

import "./sass/main.scss";
import Footer from "./components/Footer";
import Questions from "./components/Questions";
import data from "./data";

function App() {
  const [questions, setQuestions] = useState(data);

  const filterQuestions = (category) => {
    if (category === "all") {
      setQuestions(data);
      return;
    }

    const newQuestions = data.filter(
      (question) => question.category === category
    );
    setQuestions(newQuestions);
  };
  return (
    <div className="App">
      <Questions questions={questions} filterQuestions={filterQuestions} />
      <Footer />
    </div>
  );
}

export default App;
