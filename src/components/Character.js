// Write your Character component here
import React from "react";

const Character = (props) => {
    const { char } = props;
  
    return (
      <div>
        <h1>{char.name}</h1>
      </div>
    );
  };
  
  export default Character;