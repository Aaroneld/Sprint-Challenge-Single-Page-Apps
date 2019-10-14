import React, { useEffect, useState } from "react";
import EpisodeCard from './EpisodeCard';
import styled from "styled-components";
import Axios from 'axios';

const MainDiv = styled.div`

`;



export default function LocationsList() {

    
  const [episodes, setEpisodes] = useState(false);

  
  
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    

    const getInfo = () => {
        Axios
        .get("https://rickandmortyapi.com/api/episode/")
        .then(response => {
          setEpisodes(response.data.results);
          console.log(response.data);
        })
        .catch(err => { 
          console.log(err);
        })
    }

    getInfo();
    console.log(episodes)

  }, []);

    return(
        <MainDiv>
            {console.log(episodes)}
            {episodes.length > 0 && episodes.map(episode => (
                <EpisodeCard key={episode.id} episode={episode} />
            ))}
        </MainDiv>
    );
}
