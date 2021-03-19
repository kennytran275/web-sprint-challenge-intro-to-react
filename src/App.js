import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Characters from "./components/Characters";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [chars, setChars] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    // console.log(https://swapi.dev/api/people/);
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        console.log(res);
        setChars(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Characters chars={chars} />
    </div>
  );
};

export default App;
