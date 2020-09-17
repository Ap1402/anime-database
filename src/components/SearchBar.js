import React, { useState } from "react";
import styled from "styled-components";

const SearchBarForm = styled.form`
  .btn-search-style{
    background-color: #408080;
    color: white;
    font-weight: bold;
    &:hover{
      background-color: #214141;
      transition: all 0.5s ease;
    }
  }

  .form-control:focus{
    box-shadow: 0 0 0 0.2rem rgb(115, 154, 143, 0.8);
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
            <button className="btn btn-search-style md-2 " type="submit">
              Search
            </button>
          </div>
        </div>
      </SearchBarForm>
    </>
  );
};

export default Searchbar;
