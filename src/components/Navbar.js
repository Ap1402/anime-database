import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const NavbarStyle = styled.nav`
  display: flex;
  background-color: ${({ theme }) => theme.navBar};
  font-color: white;
  padding-top:1rem;
  font-weight: 500;
  font-size: 0.7rem;
  img {
    display: inline-block;
    float:left;
    vertical-align: middle;
    height: 90%;
    margin-top: -0.3rem;
    margin-left: 1rem;
  }
  ul {
    display: inline-block;
    vertical-align: middle;

    list-style-type: none;
    float: left;
    left: 30%;
    position: relative;
  }
  
  li {
    display: inline-block;

    margin: 0 30px;
    float: left;
    left: -50%;
    position: relative;
  }
  
  a {
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
  }

  & a:before {
    content: "[";
    left: -5px;
  }
  
  & a:after {
    content: "]";
    right: -5px;
  }
  
  & a:before,
  & a:after {
    position: absolute;
    opacity: 0;
    color: #fff;
    top: -1px;
    transition: all .5s;
  }
  
  & a:hover:before,
  & a:hover:after {
    opacity: 0.7;
  }
  
  & a:hover:before {
    left: -20px;
  }
  
  & a:hover:after {
    right: -20px;
  }
`;
const Navbar = () => {
  return (
    <NavbarStyle className="fixed-top">
      <img src="/images/Navbar-brand.png"></img>
      <ul >
        <li >
          <Link  to="/">
            Home
          </Link>
        </li>
        <li >
          <Link  to="/categories">
            Categories
          </Link>
        </li>
        <li >
          <Link  to="/animes">
            All Animes
          </Link>
        </li>
        <li >
          <Link   to="/anime/top-upcoming">
            Trending Upcoming
          </Link>
        </li>
      </ul>
    </NavbarStyle>
  );
};

export default Navbar;
