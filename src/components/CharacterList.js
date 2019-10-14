import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from "styled-components";

const MainDiv = styled.div`

display: flex;
flex-flow: column;
align-items: center;
margin: 0 5%;
background: white;

`;


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  
  
  
  
  const [characters, setCharacters] = useState(false);

  
  
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    

    const getInfo = () => {
        Axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          setCharacters(response.data.results);
          console.log(response.data);
        })
        .catch(err => { 
          console.log(err);
        })
    }

    getInfo();
    console.log(characters)

  }, []);

  return (
    <MainDiv>
      <SearchForm characters={characters}/>
      {console.log(characters)}
      {characters.length > 0 && characters.map(character => (
        <CharacterCard key={character.id} character={character} />
       ))}
    </MainDiv>
  );
}
