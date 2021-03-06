import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import News from './components/News';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const appKey = process.env.REACT_APP_NEWS_API_KEY;
  const toggleMode = () =>{
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert('success', 'Light mode has been changed')
    } else {
      setMode("dark");
      document.body.style.backgroundColor = 'peru';
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
        <Navbar title="React" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Alert alert={alert}/>
        </div>
        <div className="container my-3">      
          <Routes>
              <Route exact path="/" element={<Textform exact mode={mode} heading="Enter the text for analyze below" showAlert={showAlert}/>}></Route>
              <Route exact path="/news" element={<News key="general" pageSize={12} apiKey={appKey} category="general"/>}></Route>
              <Route exact path="/sports" element={<News key="sports" pageSize={12} apiKey={appKey} category="sports"/>}></Route>
              <Route exact path="/business" element={<News key="business" pageSize={12} apiKey={appKey} category="business"/>}></Route>
              <Route exact path="/entertainment" element={<News key="entertainment" pageSize={12} apiKey={appKey} category="entertainment"/>}></Route>
              <Route exact path="/health" element={<News key="health" pageSize={12} apiKey={appKey} category="health"/>}></Route>
              <Route exact path="/technology" element={<News key="technology" pageSize={12} apiKey={appKey} category="technology"/>}></Route>
              <Route exact path="/science" element={<News key="science" pageSize={12} apiKey={appKey} category="science"/>}></Route>
          </Routes>      
        </div>
      </Router>
    </>
  );
}

export default App;
