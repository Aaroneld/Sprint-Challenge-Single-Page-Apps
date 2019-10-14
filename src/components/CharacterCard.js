import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

const Name = styled.h2`

text-align: center;

`;

const Image = styled.img`

max-width: 90%;

`

export default function CharacterCard(props) {
  return (
    <CardDiv>
      <Image src={props.character.image}></ Image>
      <Name>{props.character.name}</Name>


    </CardDiv>

  );
}
