import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () =>{
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = 'white';
    } else {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
    }
  }
  return (
    <>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Textform mode={mode} heading="Enter the text for analyze below"/>
      </div>
    </>
  );
}

export default App;
