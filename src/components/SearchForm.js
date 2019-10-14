import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const MainDiv = styled.div`


margin: 5% 0;
min-width: 80%;
box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
display: flex;
justify-content: center;
flex-flow: column;
background: pink;
opacity: .6;

`;

const Form = styled.form`

display: flex;
flex-wrap: nowrap;
justify-content: center;
margin: 3% 0;

`;

const Label = styled.label`

  margin-right: 2%;


`;

const Input = styled.input`

`;

export default function SearchForm(props) {

  const [filteredChar, setFilter] = useState(false);

  const handleChange = (event) => {

    let filterArr = props.characters.filter(character => {
      return character.name.includes(event.target.value);
    });

    setFilter(filterArr);
  }
 
  return (
    <MainDiv>

      <Form>
                <Label htmlFor="filter-characters">Filter Characters</Label>
                    <Input id ="characterSearch" 
                    type="text" 
                    name="filter-characters"
                    onChange={event => handleChange(event)}
                    ></Input>
                
                
      </Form>
      {filteredChar.length > 0 && filteredChar.map(character => (
        <CharacterCard key={character.id} character={character} />
       ))}
    </MainDiv>
  );
}
