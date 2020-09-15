import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
const NavbarStyle = styled.div`
  background-color: #254949;
  font-color: white;
  display: flex;
  height: 3rem;
  .navbar-brand{
    display:inline-block;
    margin-left: 1rem;
  }
  
  ul li .nav-link{
    padding-top: 15px;
    color:white;
    font-size: 0.7rem;
    font-family: "Verdana", Verdana, Sans-serif;
    font-weight: bold;

    display:inline-block;
     
  }

  ul{
    vertical-align: middle;
    display:flex;
   
  }
  .image-brand{
    height: 1rem;
    vertical-align: middle;
  }
`;
const Navbar = () => {
  return (
    <NavbarStyle className="fixed-top" >
       <a class="navbar-brand" href="#">
         <img className="image-brand" src="/images/Navbar-brand.png"></img>
  </a>
      <ul className="nav justify-content-center">
      
        <li className="nav-item">
          
        <Link className="nav-link" to="/">
           Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/categories">
           Categories
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/animes">
           All Animes
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/anime/top-upcoming">
            Trending Upcoming
          </Link>
        </li>
        <li className="nav-item">
          <a
            className="nav-link disabled"
            href="#"
            tabIndex="-1"
            aria-disabled="true"
          >
            Disabled
          </a>
        </li>
      </ul>

    </NavbarStyle>
  );
};

export default Navbar;
