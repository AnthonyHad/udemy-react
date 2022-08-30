import React, { useState, useCallback } from 'react';

import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';
import './App.css';

//for every state change the affected component is re evaluated
// even the children components and their children
function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  // function will never change - same function object will be reused
  // will allow react memo in the button to do its job as it's comparable now
  const toggleParagraphHandler = useCallback(() => {
    // will store the constant value of the first run if we don't add the dependancy
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle !</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
