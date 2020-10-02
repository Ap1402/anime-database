import React, { useState } from "react";
import styled from "styled-components";
import CategoryButton from "./CategoryButton";
import { Fade } from "react-reveal";

const CategoriesWrapperStyled = styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
width: 100%
margin-top:1.15rem;
margin-bottom:1.15rem;

;
`;

const CategoriesWrapper = ({
  showCategories,
  onClickCategoryHandler,
  activeCategory,
}) => {
  const categoriesButtons = [
    { name: "Action", slug: "action" },
    { name: "Fiction", slug: "fiction" },
    { name: "Horror", slug: "horror" },
    { name: "Romance", slug: "romance" },
    { name: "Drama", slug: "drama" },
    { name: "Fantasy", slug: "fantasy" },
    { name: "Ecchi", slug: "ecchi" },
    { name: "Sports", slug: "sports" },
    { name: "School life", slug: "school-life" },
    { name: "Adventure", slug: "adventure" },
  ];

  return (
    <CategoriesWrapperStyled className="mb-2 mt-2">
      <Fade when={showCategories} collapse>
        {categoriesButtons.map((category) => (
          <CategoryButton
            key={category.slug}
            isActive={activeCategory === category.slug ? true : false}
            onClickCategoryHandler={onClickCategoryHandler}
            slug={category.slug}
            categoryName={category.name}
          />
        ))}
      </Fade>
    </CategoriesWrapperStyled>
  );
};

export default CategoriesWrapper;
