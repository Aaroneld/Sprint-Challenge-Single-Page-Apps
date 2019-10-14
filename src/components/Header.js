import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
 background: lightgrey;
 padding-bottom: .5%; 
 margin-bottom: 2%;
 

`;

const MainDiv = styled.div`

display: flex;
justify-content: flex-start;

`;

const PageTitle = styled.h1`

text-align: center;
`;


export default function Heading() {
  return (
    <Header>
      <MainDiv>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/character-list">Characters</Link>
      </MainDiv>   
      <PageTitle>Rick &amp; Morty Fan Page</PageTitle>
    </Header>
  );
}
