import React, { useState } from 'react'

import './sass/main.scss';
import Header from './components/Header'
import Footer from './components/Footer'
import Questions from './components/Questions'
import data from './data'

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="App">
      <Header />
      <Questions data={questions}/>
      <Footer />
    </div>
  );
}

export default App;
