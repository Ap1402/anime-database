import React, { useState } from 'react'
import SearchBar from '../SearchBar'
import Axios from 'axios';
import qs from 'qs';
import AnimeCardsGrid from '../AnimeCardsGrid';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const MainPageStyle = styled.div`
 .logo-image{
   text-align:center;
   margin:auto;
   margin-top:3rem;
   display: block;
 }
`;

const MainPage = () => {
    const [inputData, setInput] = useState();
    const [animesData, setAnimesData] = useState(null);

    const getAnimes = async () => {

        let params = {
            filter:{
                text:inputData
          },
          fields:{
              anime:['canonicalTitle','posterImage'].toString()
          }
        };

        const result = await Axios.get(
          "https://kitsu.io/api/edge/anime?" +
            qs.stringify(params, { encode: true })
        );

        console.log(result.data)

        setAnimesData(result.data);
      };

    const handleSubmit = (e)=>{
        e.preventDefault();
            getAnimes();
    };



    const handleInputChange = (e)=>{
        setInput(e.target.value)
    };

    return (
        <MainPageStyle>              
        <Link to="/" ><img src="/images/Logo-principal.png" className="logo-image"></img></Link>
        <SearchBar handleSubmit={handleSubmit}  handleInput={handleInputChange} value={inputData}></SearchBar>

        <AnimeCardsGrid animesData={animesData}/>
        </MainPageStyle>
    )
}

export default MainPage
