
import './App.css';

import React, { useState } from "react";

const App = () => {
  const [bmi, setBmi] = useState();
  const [suggestion,setSuggestion]= useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [result,setResult]=useState();
  
  const handleBmi = () => {
    setResult("your BMI is ")
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(val);
    if (val < 18.6) {
      
      setSuggestion( "your suggested weight range is between 35-49");
      setInfo("You are in a Under Weight Range");
    } else if (val > 18.6 && val <= 25.0) {
      setSuggestion( "your suggested weight range is between 50-67");
      setInfo("You are in a Healthy Weight Range");
    } else if (val > 25.0 && val < 30) {
      setSuggestion( "your suggested weight range is between 45-55");
      setInfo(" You are in a Overweight Range");
    } else {
      setSuggestion( "your suggested weight range is between 40-50");
      setInfo(" You are in a Obesity Range");
    }
  };
  return (
    <div>
    <center>
      <h1>BMI Calculator</h1><br/>
      <label>Enter your Height in cm</label><br/>
      <input
        type="text"
        onChange={(e) => setHeight(e.target.value)}
        
      /><br/><br/>
      <label>Enter your Weight in Kg's</label><br/>
      <input
        type="text"
        onChange={(e) => setWeight(e.target.value)}
        
      /><br/><br/>
      <button type="button" onClick={handleBmi} className="btn btn-primary" >Submit</button>
     
      <h2>{result}{bmi}</h2>
      <h2>{suggestion}</h2>
      <h2>{info}</h2>
      </center>
      
    </div>
  );
};

export default App;