import React from 'react'
import styled from "styled-components";

const FooterStyle = styled.footer`
 background:${({theme})=>theme.navBar}; 
 width:100%;
`;

const Footer = ({children}) => {
    return (
        <FooterStyle>
            {children}
        </FooterStyle>
    )
}

export default Footer
