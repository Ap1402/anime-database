import React from "react";
import styled from "styled-components";

const PaginationStyle = styled.nav`
  .page-item.active .page-link{
    background-color: #408080;

  }

`;

const Pagination = ({ actualPage, pagesLimit, changeURL }) => {

  return (
      <PaginationStyle >
        <ul className="pagination justify-content-center">
          <li
            className={
              "page-item " + ((actualPage === "0" || !actualPage) && "disabled")
            }
          >
            <button
            onClick={(e)=>changeURL('page','set',0)}
             className="page-link">
              First
            </button>
          </li>
          {!(parseInt(actualPage) === 0 || !actualPage) && (
            <li className="page-item ">
              <button
                onClick={(e)=>changeURL('page','set',parseInt(actualPage) - 1)}
                className="page-link"
              >{actualPage - 1}
              </button>
            </li>
          )}
          <li className="page-item active">
            <a className="page-link"                 onClick={(e)=>changeURL('page','set',actualPage)}
>
              {actualPage ? actualPage : "0"}
            </a>
          </li>
          {!(actualPage >=pagesLimit-1) && (
            <li className="page-item ">
              <button
                onClick={(e)=>changeURL('page','set',parseInt(actualPage) + 1)}
                className="page-link"
              >{parseInt(actualPage) + 1}
              </button>
            </li>
          )}
          <li
            className={
              "page-item " + ((actualPage >= pagesLimit-1) && "disabled")
            }
          >
            <button 
                            onClick={(e)=>changeURL('page','set',pagesLimit -1)}

            className="page-link">
              Last
            </button>
          </li>
        </ul>
      </PaginationStyle>
  );
};

export default Pagination;
