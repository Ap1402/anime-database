import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Animes from "../Animes";
import CategoriesSidebar from "../CategoriesSidebar";

const MainPageStyle = styled.div`
  .logo {
    margin-top: 3rem;
    margin: auto;
    display: block;
    text-align: center;
    text-decoration: none;
    font-weight: 800;
    color: #ff9122;
    position: relative;
    font-size: 3rem;
    &:after {
      height: 4px;
      background: #ce6c00;
      content: "";
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
      <div className="row ">
        <div className="col-12">
          <Link to="/" className="logo ">
            Explore Anime
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Animes></Animes>
        </div>
      </div>
    </MainPageStyle>
  );
};

export default MainPage;
