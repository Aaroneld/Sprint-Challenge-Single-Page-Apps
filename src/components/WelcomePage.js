import React from "react";
import styled from "styled-components";

const Header = styled.header`

  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 3% 0;
`;

const Image = styled.img`

`;

const Welcome = styled.h1`

`;

export default function WelcomePage() {
  return (
    
      <Header>
        
        <Welcome>Welcome to the ultimate fan site!</Welcome>
        <Image
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </Header>
   
  );
}
