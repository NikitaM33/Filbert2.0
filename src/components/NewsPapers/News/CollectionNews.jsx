import React, { useState } from 'react';
import cn from 'classnames';

import { NewsCell } from '@common';
import Pagination from '../Pagination/Pagination';

const CollectionNews = ({ newsItems, column, world, collect }) => {
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ newsPageSize ] = useState(2);
  const [ newsPerPage ] = useState(2);
  const pagesCount = Math.ceil(newsItems.length / newsPageSize);
  const lastCollectionNewsOnPage = currentPage * newsPerPage;
  const firstCollectionNewsOnPage = lastCollectionNewsOnPage - newsPerPage;
  const currentNewsItemOnPage = newsItems.slice(firstCollectionNewsOnPage, lastCollectionNewsOnPage);
  const pages = [];


  for (let i = 1; i <= pagesCount; i++) {
    if (pagesCount <= newsItems.length) {
      pages.push(i);
    }
  };

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
          currentNewsItemOnPage.map((item) => {
            return (
              <div key={item.id} className={cn({
                'newsItem__worldContainer': world,
                'newsItem__collectionContainer': collect
              })}>
                <NewsCell
                  key={item.id}
                  column={column ? column : ''}
                  newsId={item.id}
                  newsImage={item.newsImage}
                  newsHeader={item.newsHeader}
                  newsTitle={item.source.newsTitle}
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

export default CollectionNews;
