import "./App.css";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";

/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link

  
} from "react-router-dom";*/

export function App() {
  const [mode, setmode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#10123b";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TexUttils- Dark mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TexUttils- Light mode";
    }
  };
  
  return (
    <>
    

    {/*router is used to navigate to other component of a website  and link is used to hover without loading to other component*/}

      {/*<Router>*/}
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />

        <div className="container my-3">
        {/*(<Routes>*/}
            {/*<Route exact path="/about" element={<About mode={mode} />}/>*/}
            <Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert}/>
            
            {/*<Route exact path="/" element={<Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}/>*/}
          {/*</Routes>*/}
       
          
          
        </div>
      {/*</Router>*/}
    </>
  );
}

export default App;
