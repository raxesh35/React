import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const toggleMode = () =>{
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert('success', 'Light mode has been changed')
    } else {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert('success', 'Dark mode has been changed')
    }
  }

  const showAlert = (type,message) => {
    setAlert({
      type:type,
      msg:message,
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000)
  };
  return (
    <>
      <Router>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Alert alert={alert}/>
        </div>
        <div className="container my-3">      
          <Routes>
              <Route exact path="/" element={<Textform exact mode={mode} heading="Enter the text for analyze below" showAlert={showAlert}/>}></Route>
              <Route exact path="/about" element={<About/>}></Route>
          </Routes>      
        </div>
      </Router>
    </>
  );
}

export default App;
