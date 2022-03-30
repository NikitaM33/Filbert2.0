import React, { useState } from 'react';

import { NewsCell } from '@common';
import Pagination from '../Pagination/Pagination';
import NewsModal from '@common/Popups/NewsModal'

const InnerNews = ({ innerNewsItems }) => {
  const [currentPage, setCurrentPage] = useState(1); // Test
  const [innerNewsPageSize] = useState(1);
  const [innerNewsPerPage] = useState(1);

  // Pgination
  const pagesCount = Math.ceil(innerNewsItems.length / innerNewsPageSize); // Buttons count
  const lastInnerNews = currentPage * innerNewsPerPage;
  const firstOnnerNews = lastInnerNews - innerNewsPerPage;
  const currentInnerNews = innerNewsItems.slice(firstOnnerNews, lastInnerNews);
  const pages = []; // Pages

  if (innerNewsItems == 0) {
    return (
      <div className="loading">
        Loading...
      </div>
    )
  }

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="pagin">
      {
        currentInnerNews && currentInnerNews.map((item) => {
          return (
            <NewsCell
              key={item.id}
              newsId={item.id}
              newsImage={item.source.newsImage}
              newsHeader={item.source.newsHeader}
              newsTitle={item.source.newsTitle}
            />
          )
        })
      }

      <div className="pagin__pagination">
        <Pagination
          key={pages.index}
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          onPaginate={paginate}
        />
      </div>

      <NewsModal></NewsModal>
    </div>
  )
}

export default InnerNews;
