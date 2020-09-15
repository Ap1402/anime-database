import React, { useEffect, useState } from "react";
import Axios from "axios";
import AnimeCard from "./AnimeCard";
import styled from "styled-components";
import Pagination from "./Pagination";
import { useParams } from "react-router";
import Spinner from "./Spinner";
const qs = require("qs");

const MangaGridStyle = styled.div`
  display: grid;
  box-sizing: border-box;
  width: 100%;
  padding: 2rem;
  margin-left: auto;
  margin-right: auto;

  grid-column-gap: 10px;
  grid-row-gap: 2rem;

  grid-template-columns: 20% 20% 20% 20%;

  @media (max-width: 600px) {
    grid-template-columns: 90%;
  }

  @media (min-width: 600px) and (max-width: 800px) {
    grid-template-columns: 30% 30% 30%;
  }
`;

const Animes = () => {
  const { page } = useParams();
  const [mangaData, setMangaData] = useState();
  const [pagination, setPagination] = useState({
    limit: 10,
    offset: null,
    loading: false
    });
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    if (page) {
      setPagination({
        ...pagination,
        offset: page * pagination.limit,
      });
    } else {
      setPagination({
        ...pagination,
        offset: 0,
      });
    }
    setLoading(false);
  }, [setPagination]);

  useEffect(() => {
    const getMangas = async () => {
      let params = {
        page: { limit: pagination.limit, offset: pagination.offset },
      };

      const result = await Axios.get(
        "https://kitsu.io/api/edge/anime?" +
          qs.stringify(params, { encode: true })
      );
      setMangaData(result.data);
    };

    if (!loading) {
      getMangas();
    }
  }, [pagination, loading]);

  if (mangaData) {
    return (
      <>
        <Pagination actualPage={page?page:0} pagesLimit={Math.floor(mangaData.meta.count/pagination.limit)}></Pagination>

        <MangaGridStyle className="justify-content-center">
          
          {mangaData.data.map((data) => {
            return (
              <AnimeCard
                key={data.id}
                title={data.attributes.canonicalTitle}
                imgUrl={data.attributes.posterImage.medium}
                id={data.id}
              ></AnimeCard>
            );
          })}
        </MangaGridStyle>
        <Pagination actualPage={page?page:0} pagesLimit={Math.floor(mangaData.meta.count/pagination.limit)}></Pagination>
      </>
    );
  } else {
    return <Spinner/>;
  }
};

export default Animes;
