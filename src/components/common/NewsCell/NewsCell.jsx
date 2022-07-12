import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { NewsPopup } from '@common';

const NewsCell = ({
  column,
  innerNews,
  worldNews,
  collectionNews,
  newsId,
  newsImage,
  newsHeader,
  newsTitle
}) => {
  // let articleLength = null;

  // if (column) {
  //   articleLength = newsTitle > 250 ?
  //     `${newsTitle.slice(0, 250)}...`
  //     : newsTitle;
  // } else {
  //   articleLength = newsTitle && newsTitle > 700 ?
  //     newsTitle.slice(0, 700)
  //     : newsTitle;
  // }

  return (
    <div className={cn(
      {
        'newsCell': !column,
        'column': column
      }
    )}>
      <div className={cn(
        {
          'newsCell__image': !column,
          'column__image': column
        }
      )}>
        <img src={newsImage} alt="News" />
      </div>

      <div className={cn(
        {
          'newsCell__text': !column,
          'column__text': column
        }
      )}>
        <div className={cn(
          {
            'newsCell__textItem': !column,
            'column__textItem': column
          }
        )}>
          <h3>{newsHeader}</h3>
          <p>{newsTitle}</p>
        </div>

        <div className={cn(
          {
            'newsCell__textReadMore': !column,
            'column__textReadMore': column
          }
        )}>
          {/* Button */}
          {
            <NewsPopup
              innerNews={innerNews}
              worldNews={worldNews}
              collectionNews={collectionNews}
              id={newsId}
            />
          }
        </div>
      </div>
    </div>
  )
}

NewsCell.propTypes = {
  column: PropTypes.bool,
  id: PropTypes.number,
  newsImage: PropTypes.string,
  newsHeader: PropTypes.string,
  newsTitle: PropTypes.string
};

NewsCell.defaultProps = {
  column: false
};

export default NewsCell;
