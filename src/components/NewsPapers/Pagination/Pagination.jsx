import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import arrowScroll from '../../../assets/icons/arrowScrollYellow.svg';

const Pagination = ({ onDark, pages, currentPage, setCurrentPage, onPaginate }) => {
  const nextPage = () => setCurrentPage((prev) => {
    if (prev >= pages.length) {
      return pages.length;
    } else {
      return prev + 1;
    }
  });

  const prevPage = () => setCurrentPage((prev) => {
    if (prev <= 1) {
      return 1;
    } else {
      return prev - 1;
    }
  });

  return (
    <div className="controlContainer">
      {/* Prev button */}
      <span className="pagin__prev" onClick={prevPage}>
        {
          currentPage === 1 ?
            <img src={arrowScroll} alt="Next" className="pagin__nextDisabled" />
            : <img src={arrowScroll} alt="Next" />
        }
      </span>
      {/* Pagination pages */}
      <ul className="pagin__control">
        {
          pages && pages.map((page, index) => {
            return (
              <li key={page + index} className="pagination">
                <Link to="#" className={cn(
                  'pagination__scrollTheFeed',
                  {
                    'activeScrollTheFeed': page === currentPage,
                    'onDark': onDark
                  }
                )} onClick={() => onPaginate(page)}>{page}</Link>
              </li>
            )
          })
        }
      </ul>
      {/* Next button */}
      <span className="pagin__next" onClick={nextPage}>
          {
            pages && currentPage === pages.length ?
              <img src={arrowScroll} alt="Next" className="pagin__nextDisabled" />
              : <img src={arrowScroll} alt="Next" />
          }
        </span>
    </div>
  )
}

export default Pagination;
