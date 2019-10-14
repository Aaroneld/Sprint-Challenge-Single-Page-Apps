import React, { useEffect, useState } from "react";
import LocationCard from './LocationCard';
import styled from "styled-components";
import Axios from 'axios';

const MainDiv = styled.div`

`;



export default function LocationsList() {

    
  const [locations, setLocations] = useState(false);

  
  
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    

    const getInfo = () => {
        Axios
        .get(" https://rickandmortyapi.com/api/location/")
        .then(response => {
          setLocations(response.data.results);
          console.log(response.data);
        })
        .catch(err => { 
          console.log(err);
        })
    }

    getInfo();
    console.log(locations)

  }, []);

    return(
        <MainDiv>
            {console.log(locations)}
            {locations.length > 0 && locations.map(location => (
                <LocationCard key={location.id} location={location} />
            ))}
        </MainDiv>
    );
}
