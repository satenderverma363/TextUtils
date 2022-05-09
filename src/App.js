
import './App.css';
import About from './Text Utils/About';

import TextForm from './Text Utils/TextForm'
import { useState } from 'react';
import Alert from './Text Utils/Alert';
import Navigation from './Text Utils/Navigation';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);
  const [blueMode, setBlueMode] = useState('light');

  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode Enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
    }
  }


  return (
    <>
      
      <Navigation title="Text Utilities" home="Home" about="About US" contact="Contact Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading='Enter the Text to Analyze' mode={mode} toggleMode={toggleMode} />


        
        {/* <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter the Text to Analyze' mode={mode} toggleMode={toggleMode} />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/textform" element={<TextForm showAlert={showAlert} heading='Enter the Text to Analyze' mode={mode} toggleMode={toggleMode} />} />
        </Routes> */}
      

    </>
  );
}

export default App;
