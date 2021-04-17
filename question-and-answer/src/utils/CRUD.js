import firebase from "../utils/InitialFirebase";

// read question and answer to realtime firebase database
const readQuestionAnswer = (category) => {
  const ref = firebase.database().ref(category);
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

// add question and answer to realtime firebase database
const addQuestionAnswer = (category) => {
  const ref = firebase.database().ref(category);
  const questionAnswer = {
    question: "What is your favorite sport",
    answer: "Gun Shooting is my favorite sport",
  };

  ref.push(questionAnswer);
};

// delete question and answer to realtime firebase database
const deleteQuestionAnswer = (category) => {
  const ref = firebase.database().ref(category).child(data.id);
  ref.remove();
};

// edit question and answer to realtime firebase database
const editQuestionAnswer = (category) => {
  const ref = firebase.database().ref(category).child(data.id);
  let updatedData = {
    question: "Edited question",
    answer: "Edited answer",
  };

  ref.update(updatedData);
};