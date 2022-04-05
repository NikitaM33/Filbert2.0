import React, { useState } from 'react';

import { NewsCell } from '@common';
import Pagination from '../Pagination/Pagination';

const WorldNews = ({ newsItems, column }) => {
  const [ currentPage, setCurrentPage ] = useState(1); // Test
  const [ newsPageSizeBigScreen ] = useState(3); // Count of page in pagination
  const [ newsPerPageBigScreen ] = useState(3); // Count of item on page
  const pagesCount = Math.ceil(newsItems.length / newsPageSizeBigScreen);
  const lastNewsItemOnPage = currentPage * newsPerPageBigScreen;
  const firstNewsItemOnPage = lastNewsItemOnPage - newsPerPageBigScreen;
  const currentNewsItemsOnPage = newsItems.slice(firstNewsItemOnPage, lastNewsItemOnPage);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    if (pagesCount <= newsItems.length) {
      pages.push(i);
    }
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (newsItems == 0) {
    return (
      <div className="loading">
        Loading...
      </div>
    )
  }


  return (
    <div className="newsItem">
      <div className="newsItem__worldSection">
        {
          currentNewsItemsOnPage.map((item) => {
            return (
              <div key={item.id} className="newsItem__worldContainer">
                <NewsCell
                  key={item.id}
                  column={column ? column : ''}
                  newsId={item.id}
                  newsImage={item.newsImage}
                  newsHeader={item.newsHeader}
                  newsTitle={item.source.newsTitle}
                  worldNews
                />
              </div>
            )
          })
        }
      </div>
      <Pagination
        key={pages.index}
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onPaginate={paginate}
      />
    </div>
  )
}

export default WorldNews;
