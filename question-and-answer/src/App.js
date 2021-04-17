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
    }, 1500);
  }, []);

  // fetch articles from realtime firebase database
  const fetchQA = () => {
    try {
      // addQuestionAnswer("Activity");
      readQuestionAnswer();
    } catch (error) {
      return <Error />;
    }
  };

  // const addQuestionAnswer = (category) => {
  //   const ref = firebase.database().ref(category);
  //   const questionAnswer = {
  //     question: "Do you have some recommended food for the tourist?",
  //   answer: "I would recommend my favorite food - Tom Yum Goong (Spicy Shrimp Soup) - but in a less spicy favor because some foreigner don't similar with spicy (it can make you feel uncomfortable). Moreover, Thailand's dessert is absolutely tasty as well. I would recommend mango sticky rice (very good combination), and I'm sure that you will love it!",
  //   category: "food",
  //   };

  //   ref.push(questionAnswer);
  // };

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
