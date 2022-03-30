import React from 'react';

import {
  NewsHeader,
  NewsPapers
} from '../';

const NewsBlock = () => {
  return (
    <div className="newsBlock">
      <NewsHeader />
      <NewsPapers />
    </div>
  )
}

export default NewsBlock;
