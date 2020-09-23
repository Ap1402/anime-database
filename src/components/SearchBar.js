import React, { useState } from "react";
import styled from "styled-components";

const SearchBarForm = styled.form`
  .btn-search-style{
    color: white;
    font-weight: bold;
    border: 1px solid #444f77;
    &:hover{
      background-color: #214141;
      transition: all 0.5s ease;
    }
  }

  .form-control:focus{
    box-shadow: 0 0 0 0.2rem rgb(115, 154, 143, 0.8);
  }

  .hvr-rectangle-in {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }
  .hvr-rectangle-in:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({theme})=>theme.searchBar};
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .hvr-rectangle-in:hover, .hvr-rectangle-in:focus, .hvr-rectangle-in:active {
    color: white;
  }
  .hvr-rectangle-in:hover:before, .hvr-rectangle-in:focus:before, .hvr-rectangle-in:active:before {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
`;

const Searchbar = ({handleSubmit}) => {
  const [searchBarValue, setSearchBarValue] = useState();

  const handleInputChange = (e) => {
    setSearchBarValue(e.target.value);
  };

  

  return (
    < >
      <SearchBarForm onSubmit={(e)=>handleSubmit(e,searchBarValue)} className="my-4 ">
        <div className="row offset-2">
          <div className="col-md-8">
            <input
            onChange={(e)=>handleInputChange(e)}
              className="form-control md-8 mr-sm-4"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value = {searchBarValue}
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-search-style md-2 hvr-rectangle-in " type="submit">
              Search
            </button>
          </div>
        </div>
      </SearchBarForm>
    </>
  );
};

export default Searchbar;
