import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  margin: 0.5rem;
  background: ${({isActive, theme}) => (isActive ? "black" : theme.background)};
  border: 0.5px solid ${({theme})=>theme.toggleBorder};
  color: ${({theme}) => (theme.text)};
`;
const CategoryButton = ({
  categoryName,
  slug,
  onClickCategoryHandler,
  isActive,
}) =>  (
    <StyledButton
    className="btn"
      isActive={isActive}
      onClick={(e) => onClickCategoryHandler(e, slug)}
    >      
    {categoryName}
    </StyledButton>
  )


export default CategoryButton;
