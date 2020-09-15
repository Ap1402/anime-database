import React from "react";
import styled from "styled-components";
import AnimeCard from "./AnimeCard";

const AnimeCardsStyle = styled.div`
  display: grid;
  box-sizing: border-box;
  width: 100%;
  padding: 2rem;
  margin-left: auto;
  margin-right: auto;
  grid-column-gap: 10px;
  grid-row-gap: 1rem;
    p:{
        text-decoration: none;

    }
  grid-template-columns: 20% 20% 20% 20%;
    &:hover:{

    }
  @media (max-width: 600px) {
    grid-template-columns: 90%;
  }

  @media (min-width: 600px) and (max-width: 800px) {
    grid-template-columns: 30% 30% 30%;
  }
`;

const AnimeCardsGrid = ({ animesData }) => {
  return (
    <AnimeCardsStyle className="justify-content-center">
      {animesData&&
        animesData.data.map((data) => {
          return (
            <AnimeCard
              key={data.id}
              title={data.attributes.canonicalTitle}
              imgUrl={data.attributes.posterImage.medium}
              id={data.id}
              popularityRank={data.attributes.popularityRank}
              ratingRank={data.attributes.ratingRank}
              synopsis={data.attributes.synopsis}


            ></AnimeCard>
          );
        })}
    </AnimeCardsStyle>
  );
};

export default AnimeCardsGrid;
