import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Axios from "axios";
import styled from "styled-components";
import qs from "qs";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const AnimeDescriptionStyle = styled.div`
background: url(${props=>props.imageUrl});
background-repeat: no-repeat;
background-size: 100% 25%;
background
background-color: white;
  .anchor {
    text-decoration: none;
  }
  .anime-image {
    width: 100%;
    height: 30rem;
  }
  .body-card-1 {
    width: 100%;
    height: 100%;
  }
  .top-cover {
    position: absolute;
    width: 100%;
    height: 25%;
    opacity: 0.7;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: 0px;
  }
  .anime-info {
    margin-top: 20%;
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
            <li>
              <Link className="anchor" href="/anime?categories=action">
                {categoryData.attributes.title}
              </Link>
            </li>
          ))}
        </ul>
      )
    );
  };

  if (!loading) {
    console.log(mangaData);
    return (
      <AnimeDescriptionStyle imageUrl={
        mangaData.data.attributes.coverImage
          ? mangaData.data.attributes.coverImage.large
          : null
      } className="card rounded">
        <div className="card-body">
          <div className="row">
            <div className=" col-lg-4 col-md-4 col-sm-10">
              <img
                className="rounded anime-image"
                src={mangaData.data.attributes.posterImage.large}
                alt="Card cap"
              />
            </div>
            <div className=" anime-info  col-lg-7 col-md-7  col-sm-10 ">
              <h1 className="anime-title">
                {mangaData.data.attributes.canonicalTitle}
              </h1>
              <p>{mangaData.data.attributes.synopsis}</p>
              <p>Start Date: {mangaData.data.attributes.startDate}</p>
              <p>Status: {mangaData.data.attributes.status}</p>
              <h5>Categories</h5>
              {showCategories()}
            </div>
          </div>
        </div>
      </AnimeDescriptionStyle>
    );
  } else {
    return <Spinner/>;
  };
}
export default MangaDescription;
