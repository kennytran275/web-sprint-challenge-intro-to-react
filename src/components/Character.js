// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledChar = styled.div`
  color: red;
  border: 1px dashed black;
  margin: 2%;

  h1 {
    color: black;
  }
`;

const Character = (props) => {
  const { char } = props;

  return (
    <StyledChar>
      <h1>Name: {char.name}</h1>
      <h2>Gender: {char.gender}</h2>
      <h3>Height: {char.height}</h3>
    </StyledChar>
  );
};

export default Character;
