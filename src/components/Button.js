import React from 'react'
import button from 'react-bootstrap/Button'
import styled from "styled-components";

const ButtonStyle = styled(button)`
    color: ${({theme})=>theme.text};
    background: ${({theme})=>theme.background};
    transition: all 0.4s ease 0s;
    border: 1px solid white;
    &:hover{
        text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
        -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        transition: all 0.4s ease 0s;
    }
`;

const Button = ({label, onClickFunction, children, isActive}) => {
    return (
        <ButtonStyle className="mx-1" isActive={isActive} onClick={(e)=>onClickFunction(e)} name={label.toLowerCase()}>
            {children&&children}
            {label}
        </ButtonStyle>
    )
}

export default Button
