import React, { useState } from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Animes from '../Animes';

const MainPageStyle = styled.div`
  display: flex;
  flex-direction: column;
 .logo{
  margin-top:3rem;
  margin:auto;
   text-align: center;
   text-decoration: none;
   font-weight: 800;
   color: #ff9122;
   position: relative;
   font-size: 3rem;
   &:after{
    height: 4px;
    background: #ce6c00;
    content: '';
    width: 350px;
    position: absolute;
    transform: translateX(-50%);
    transition: width 0.4s;
    transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
    left: 50%;
    margin-top: 3.8rem;
   }
 }
`;

const MainPage = (props) => {

    return (
        <MainPageStyle>   
          <Link to="/" className="logo">Anime{' '}
          Database</Link>           
        <Animes ></Animes>
        </MainPageStyle>
    )
}

export default MainPage
