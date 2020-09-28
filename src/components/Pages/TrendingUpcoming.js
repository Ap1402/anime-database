/* import SearchBar from "../SearchBar";
import styled from "styled-components";
import AnimeCard from "../AnimeCard";
 */
import React, { useState, useEffect } from "react";
import Axios from "axios";
import qs from "qs";
import AnimeCardsGrid from "../AnimeCardsGrid";

const TrendingUpcoming = () => {
  const [inputData, setInput] = useState();
  const [animesData, setAnimesData] = useState();

  const getAnimes = async () => {
    let params = {
      filter: {
        status: "upcoming",
      },
      sort: "popularityRank",
      include: ["categories"].toString(),
      fields:{
          categories:['title'].toString()
      }
    };

    const result = await Axios.get(
      "https://kitsu.io/api/edge/anime?" +
        qs.stringify(params, { encode: true })
    );

    console.log(result.data);

    setAnimesData(result.data);
  };

  useEffect(() => {
    getAnimes();
  }, []);

  return (
    <>
      <AnimeCardsGrid animesData={animesData}></AnimeCardsGrid>
    </>
  );
};

export default TrendingUpcoming;
