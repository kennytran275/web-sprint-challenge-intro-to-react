import React from "react";
import Character from "./Character";

const Characters = (props) => {
  const { chars } = props;

  return (
    <div>
      {chars.map((char) => {
        return <Character key={char.created} char={char} />;
      })}
    </div>
  );
};

export default Characters;