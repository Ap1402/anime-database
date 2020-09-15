import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/* const AnimeCardStyle = styled.div`
  text-decoration: none;

  .anchor {
    text-decoration: none;
  }
  &:hover {
    opacity: 0.5;
  }
`; */
const AnimeCardStyle = styled.div`
widht: 100%;
.anchor:hover{
  text-decoration:none;
}
.container_foto {
  background-color: rgba(57, 62, 93, 0.7);
  padding: 0;
  overflow: hidden;
  max-width: 350px;
  margin: 5px;
}

.container_foto article {
  padding: 10%;
  position: absolute;
  bottom: 0;
  z-index: 1;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

h2 {
  color: black;
  font-size: 1rem;
  font-family: "Verdana", Verdana, Sans-serif;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
}


.container_foto h4 {
  font-weight: 300;
  color: #fff;
  font-size: 16px;
}

.container_foto img {
  width: 100%;
  top: 0;
  left: 0;
  opacity: 1;
  -webkit-transition: all 1.3s ease;
  -moz-transition: all 1.3s ease;
  -o-transition: all 1.3s ease;
  -ms-transition: all 1.3s ease;
  transition: all 1.3s ease;
}

.ver_mas {
  position: absolute;
  box-sizing: border-box;
padding: 5px;
  width: 100%;
  height: 100%;
  margin:auto;
  bottom: 0;
  z-index: 1;
  opacity: 1;
  transform: translate(0px, 100%);
  -webkit-transform: translate(0px, 100%);
  -moz-transform: translate(0px, 100%);
  -o-transform: translate(0px, 100%);
  -ms-transform: translate(0px, 100%);
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.ver_mas span {
  font-size: 40px;
  color: #fff;
  position: relative;
  margin: 0 auto;
  width: 100%;
  top: 13px;
}
.ver_mas h4{
  font-size: 0.7rem;
  white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
}

/*hovers*/

.container_foto:hover {
  cursor: pointer;
}

.container_foto:hover img {
  opacity: 0.1;
  transform: scale(1.5);
}

.container_foto:hover article {
  transform: translate(2px, -69px);
  -webkit-transform: translate(2px, -69px);
  -moz-transform: translate(2px, -69px);
  -o-transform: translate(2px, -69px);
  -ms-transform: translate(2px, -69px);
}

.container_foto:hover .ver_mas {
  transform: translate(0px, 0px);
  -webkit-transform: translate(0px, 0px);
  -moz-transform: translate(0px, 0px);
  -o-transform: translate(0px, 0px);
  -ms-transform: translate(0px, 0px);
  opacity: 1;
  .fa-heart {
    color:red;
  }

  .fadeout {
    position: absolute; 
    bottom: 0em;
    width:100%;
    height: 4em;
    background: -webkit-linear-gradient(
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
    ); 
    background-image: -moz-linear-gradient(
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
    );
    background-image: -o-linear-gradient(
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
    );
    background-image: linear-gradient(
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
    );
    background-image: -ms-linear-gradient(
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
    );
} 

}
`;

/* const MangaCard = ({title, imgUrl, id}) => {
  return (
          <AnimeCardStyle  className="card" style={{width: '100%'}}>
            <Link to={'/anime/'+id} className="anchor">

           
  <img src={imgUrl} className="card-img-top" alt={title}/>
  <div className="card-body">
    <p className="card-text">{title}</p>
  </div>
  </Link>
</AnimeCardStyle>

  );
}; */
const MangaCard = ({ title, imgUrl, id, popularityRank, ratingRank}) => {
  return (
    <AnimeCardStyle  >
      <Link to={"/anime/" + id} className="anchor">
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto rounded ">
          <div className="ver_mas text-center">
  <h4><i class="fas fa-heart"></i>{' '}Popularity Rank #{popularityRank}</h4>
  <h4><i class="fas fa-star"></i>{' '} Most Rated #{ratingRank}</h4>

            <span className="lnr lnr-eye"></span>
          </div>
          <article className="text-left">
            
          </article>
          <img src={imgUrl} alt="" />
        </div>
        <h2>{title}</h2>
      </Link>
    </AnimeCardStyle>
  );
};

export default MangaCard;
