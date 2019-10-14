import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  border: 2px dashed black;
  max-width: 60%;
  margin: 2% auto;
`;
const Name = styled.h2`

`;

const Episode = styled.h2`

`;

export default function LocationCard(props) {
  
  
  return (

    <MainDiv>
      <Name>{props.episode.name}</Name>
      <Episode>{props.episode.episode}</Episode>
    </MainDiv>

  );
}
