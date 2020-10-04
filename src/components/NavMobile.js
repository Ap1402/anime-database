import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ResponsiveNav = styled.div`
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  background: white;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  width: 40%;
  /* min-width: 500px; */
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${(props) => props.open && `transform: translateX(0%);`};

  ul {
    list-style-type: none;
    li a {
      display: flex;
      text-decoration: inherit;
      padding: 0.50rem;
      color: #784079;

      }
    }
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  color: #695575;
  font-size: 3rem;
  cursor: pointer;
  border: 0;
  position: absolute;
  z-index: 2;
  right: 0;
  &:hover {
    color: gray;
  }
`;

const OpenButton = styled.button`
  display: none;
  @media screen and (max-width: 700px) {
    display: block;
    background-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    border: 0;
    position: fixed;

    z-index: 2;
    right: 0;
    top: 0;
    &:hover {
      color: gray;
    }
  }
  div {
    width: 35px;
    height: 5px;
    background-color: black;
    margin: 6px 0;
  }
`;

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <OpenButton onClick={() => handleCloseButton()}>
        <div></div>
        <div></div>
        <div></div>
      </OpenButton>
      <ResponsiveNav open={isOpen}>
        <CloseButton onClick={() => handleCloseButton()} title="close">
          &times;
        </CloseButton>
        <ul>
          <li>
            <Link offset="20px" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link offset="20px" to="/anime/top-upcoming">
              Trend Upcoming
            </Link>
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
};

export default NavMobile;
