import React from "react";
import styled from "styled-components";

const CategoriesStyle = styled.div`
  padding: 1rem;
  h5 {
    color: black;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  }

  ul {
    display: flex;
    flex-flow: row wrap;
    text-decoration: none;
    font-size: 0.9rem;
    list-style: none;
    li {
      min-width: 50%;
      a {
        text-decoration: none;
      }
    }
  }
  .logo {
    margin-top: 3rem;
    margin: auto;
    display: block;
    text-align: center;
    text-decoration: none;
    font-weight: 800;
    color: #ff9122;
    position: relative;
    font-size: 3rem;
    &:after {
      height: 4px;
      background: #ce6c00;
      content: "";
      width: 350px;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 3.8rem;
    }
  }
`;

const CategoriesSidebar = () => {
  return (
    <>
      <div class="explore-sidebar col-sm">
        <div class="card is-sticky">
          <CategoriesStyle>
            <h5 class="text-uppercase">Categories</h5>
            <div id="ember327" class="ember-view">
              <ul class="list-unstyled categories-list">
                <li>
                  <a href="/explore/anime/category/comedy">Comedy</a>
                </li>
                <li>
                  <a href="/explore/anime/category/fantasy">Fantasy</a>
                </li>
                <li>
                  <a href="/explore/anime/category/romance">Romance</a>
                </li>
                <li>
                  <a href="/explore/anime/category/action">Action</a>
                </li>
                <li>
                  <a href="/explore/anime/category/school-life">School Life</a>
                </li>
                <li>
                  <a href="/explore/anime/category/drama">Drama</a>
                </li>
                <li>
                  <a href="/explore/anime/category/adventure">Adventure</a>
                </li>
                <li>
                  <a href="/explore/anime/category/slice-of-life">
                    Slice of Life
                  </a>
                </li>
                <li>
                  <a href="/explore/anime/category/shoujo-ai">Shoujo Ai</a>
                </li>
                <li>
                  <a href="/explore/anime/category/science-fiction">
                    Science Fiction
                  </a>
                </li>
                <li>
                  <a href="/explore/anime/category/yaoi">Yaoi</a>
                </li>
                <li>
                  <a href="/explore/anime/category/ecchi">Ecchi</a>
                </li>
                <li>
                  <a href="/explore/anime/category/sports">Sports</a>
                </li>
                <li>
                  <a href="/explore/anime/category/japan">Japan</a>
                </li>
                <li>
                  <a href="/explore/anime/category/historical">Historical</a>
                </li>
                <li>
                  <a href="/explore/anime/category/earth">Earth</a>
                </li>
                <li>
                  <a href="/explore/anime/category/thriller">Thriller</a>
                </li>
                <li>
                  <a href="/explore/anime/category/harem">Harem</a>
                </li>
                <li>
                  <a href="/explore/anime/category/mystery">Mystery</a>
                </li>
                <li>
                  <a href="/explore/anime/category/magic">Magic</a>
                </li>
                <li>
                  <a href="/explore/anime/category/present">Present</a>
                </li>
                <li>
                  <a href="/explore/anime/category/asia">Asia</a>
                </li>
                <li>
                  <a href="/explore/anime/category/kids">Kids</a>
                </li>
                <li>
                  <a href="/explore/anime/category/music">Music</a>
                </li>
                <li>
                  <a href="/explore/anime/category/horror">Horror</a>
                </li>
                <li>
                  <a href="/explore/anime/category/mecha">Mecha</a>
                </li>
                <li>
                  <a href="/explore/anime/category/psychological">
                    Psychological
                  </a>
                </li>
                <li>
                  <a href="/explore/anime/category/shounen-ai">Shounen Ai</a>
                </li>
                <li>
                  <a href="/explore/anime/category/martial-arts">
                    Martial Arts
                  </a>
                </li>
                <li>
                  <a href="/explore/anime/category/super-power">Super Power</a>
                </li>
                <li>
                  <a href="/explore/anime/category/demon">Demon</a>
                </li>
                <li>
                  <a href="/explore/anime/category/supernatural">
                    Supernatural
                  </a>
                </li>
                <li>
                  <a href="/explore/anime/category/military">Military</a>
                </li>
                <li>
                  <a href="/explore/anime/category/shounen">Shounen</a>
                </li>
                <li>
                  <a href="/explore/anime/category/seinen">Seinen</a>
                </li>
                <li>
                  <a href="/explore/anime/category/fantasy-world">
                    Fantasy World
                  </a>
                </li>
                <li>
                  <a href="/explore/anime/category/plot-continuity">
                    Plot Continuity
                  </a>
                </li>
                <li>
                  <a href="/explore/anime/category/violence">Violence</a>
                </li>
                <li>
                  <a href="/explore/anime/category/parody">Parody</a>
                </li>
                <li>
                  <a href="/explore/anime/category/motorsport">Motorsport</a>
                </li>
              </ul>
            </div>
          </CategoriesStyle>
        </div>
      </div>
    </>
  );
};

export default CategoriesSidebar;
