import React, { useState, useEffect } from "react";

import "./sass/main.scss";
import Footer from "./components/Footer";
import Questions from "./components/Questions";
import Loading from "./components/Loader";
import Error from "./components/Error";
import firebase from "./utils/InitialFirebase";

function App() {
  const [questions, setQuestions] = useState([]);
  const [keepQuestions, setKeepQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQA();
    setInterval(() => {
      setLoading(false);
    },2000)
    
  }, []);


  // fetch articles from realtime firebase database
  const fetchQA = () => {
    try {
      readQuestionAnswer();
    } catch (error) {
      return <Error />;
    }
  };

  const readQuestionAnswer = () => {
    const ref = firebase.database().ref("Activity");
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      const dataList = [];
      for (let id in data) {
        dataList.push({ id, ...data[id] });
      }
      setKeepQuestions(dataList);
      setQuestions(dataList);
    });
  };

  const filterQuestions = (category) => {
    if (category === "all") {
      setQuestions(keepQuestions);
      return;
    }

    const newQuestions = keepQuestions.filter(
      (question) => question.category === category
    );
    setQuestions(newQuestions);
  };

  // if this app is loading, it will appear loading screen until loading is finish
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Questions questions={questions} filterQuestions={filterQuestions} />
      <Footer />
    </div>
  );
}

export default App;
