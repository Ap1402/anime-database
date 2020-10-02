import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Axios from "axios";
import styled from "styled-components";
import qs from "qs";
import Spinner from "./Spinner";

const AnimeDescriptionStyle = styled.div`
  background-color: ${({ theme }) => theme.cardBackColor};
  border-radius: 1rem;
  color: ${({ theme }) => theme.color};
  overflow: hidden;
  .anchor {
    text-decoration: none;
  }
  .background {
    width: 100%;
    height: auto;
    opacity: 0.7;
  }
  .anime-image {
    border: 4px solid white;
    position: relative;
    width: 100%;
    height: auto;
    margin-top: 1rem;
    @media screen and (min-width: 1000px) {
      margin-top: -190px;
      z-index: 10;
    }
  }

  .anime-info {
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 1rem;
    @media screen and (min-width: 1000px) {
      margin: 0;
      margin-top: 2rem;
    }
  }
  ul {
    list-style: none;
    li {
      color: #464646;
      background: #fff;
      border: 1px solid #eaeaea;
      border-radius: 3px;
      padding: 4px 8px;
      margin: 2px;
      display: inline-block;
      font-family: Asap, sans-serif;
      .anchor {
        color: inherit;
        text-decoration: none;
      }
    }
  }
`;

const StatusBar = styled.p`
  display: block;
  position: relative;
  background-color: ${({ status }) => {
    if (status === "finished") {
      return "#b50012";
    }
    if (status === "upcoming") {
      return "#003b8f";
    }
    if (status === "current") {
      return "#005c0b";
    }
  }};
  color: white;
  padding: 10px;
  margin-top: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.15);
  font-weight: bold;
  text-align: center;
`;

const MangaDescription = () => {
  const { id } = useParams();

  const [mangaData, setMangaData] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let params = {
      include: ["categories"].toString(),
      fields: {
        categories: ["title"].toString(),
      },
    };
    const getMangas = async () => {
      const result = await Axios.get(
        "https://kitsu.io/api/edge/anime/" +
          id +
          "?" +
          qs.stringify(params, { encode: true })
      );

      setMangaData(result.data);
      setLoading(false);
    };
    getMangas();
  }, [id]);

  /*   useEffect(() => {
    setLoading(false);
  }, [mangaData]); */

  const showCategories = () => {
    return (
      mangaData.included && (
        <ul>
          {mangaData.included.map((categoryData) => (
            <li className="anchor">{categoryData.attributes.title}</li>
          ))}
        </ul>
      )
    );
  };

  if (!loading) {
    console.log(mangaData);
    return (
      <AnimeDescriptionStyle>
        <div className="row">
          <div className="col-12">
            <img
              className="background"
              src={
                mangaData.data.attributes.coverImage
                  ? mangaData.data.attributes.coverImage.large
                  : null
              }
              alt="Card cap"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-10 mx-4">
            <img
              className="rounded anime-image"
              src={mangaData.data.attributes.posterImage.large}
              alt="Card cap"
            />
            <StatusBar status={mangaData.data.attributes.status}>
              <span className="fas fa-tv">
                {" " + mangaData.data.attributes.status.toUpperCase()}
              </span>
            </StatusBar>
          </div>
          <div className=" anime-info  col-lg-7 col-md-7  col-sm-10 ">
            <h1 className="anime-title">
              {mangaData.data.attributes.canonicalTitle}
            </h1>
            <p>{mangaData.data.attributes.synopsis}</p>
            <p>Start Date: {mangaData.data.attributes.startDate}</p>
            <h5>Categories</h5>
            {showCategories()}
          </div>
        </div>
      </AnimeDescriptionStyle>
    );
  } else {
    return <Spinner />;
  }
};
export default MangaDescription;
