import React from "react";
import {Route} from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import styled from "styled-components";

const MainDiv = styled.div`

    background-color: lightblue;
`;


export default function App() {
  return (
    <MainDiv>
      <Header />
      <Route exact path="/" component={WelcomePage}></Route>
      <Route path="/character-list" component={CharacterList}></Route>
    
    </MainDiv>
  );
}
