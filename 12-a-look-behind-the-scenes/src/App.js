import React, { useState } from 'react';

import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [counter, setCounter] = useState(0);

  console.log('APP RUNNING');

  const toggleParagraphHandler = () => {
    setCounter(prevCounter => prevCounter + 1);
    console.log("The counter is : ", counter);
    if(counter === 5) {
      console.log("Correct :) The counter is 5!!!");
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
