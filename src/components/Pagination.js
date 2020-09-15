import React from "react";
import styled from "styled-components";

const PaginationStyle = styled.nav`
  .page-item.active .page-link{
    background-color: #408080;

  }

`;

const Pagination = ({ actualPage, pagesLimit }) => {

  console.log(pagesLimit);
  return (
      <PaginationStyle >
        <ul className="pagination justify-content-center">
          <li
            className={
              "page-item " + ((actualPage === "0" || !actualPage) && "disabled")
            }
          >
            <a href={"/animes"} className="page-link">
              First
            </a>
          </li>
          {!(parseInt(actualPage) === 0 || !actualPage) && (
            <li className="page-item ">
              <a
                href={"/animes/" + (parseInt(actualPage) - 1)}
                className="page-link"
              >{actualPage - 1}
              </a>
            </li>
          )}
          <li className="page-item active">
            <a className="page-link" href={"/animes/" + actualPage}>
              {actualPage ? actualPage : "0"}
            </a>
          </li>
          {!(actualPage >=pagesLimit-1) && (
            <li className="page-item ">
              <a
                href={"/animes/" + (parseInt(actualPage) + 1)}
                className="page-link"
              >{parseInt(actualPage) + 1}
              </a>
            </li>
          )}
          <li
            className={
              "page-item " + ((actualPage >= pagesLimit-1) && "disabled")
            }
          >
            <a href={"/animes/" + (pagesLimit -1)} className="page-link">
              Last
            </a>
          </li>
        </ul>
      </PaginationStyle>
  );
};

export default Pagination;
