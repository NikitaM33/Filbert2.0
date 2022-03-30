import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useDispatch } from 'react-redux';

import { openNewsModal } from '@redux/actions/fetchAllNews';

const NewsCell = ({ column, newsId, newsImage, newsHeader, newsTitle }) => {
  const dispatch = useDispatch();
  let articleLength = null;

  const openModal = (e) => {
    console.log('Modal')
    dispatch(openNewsModal());
  }

  if (column) {
    articleLength = newsTitle > 250 ?
      `${newsTitle.slice(0, 250)}...`
      : newsTitle;
  } else {
    articleLength = newsTitle && newsTitle > 700 ?
      newsTitle.slice(0, 700)
      : newsTitle;
  }

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
          <p>{articleLength}</p>
        </div>

        <div className={cn(
          {
            'newsCell__textReadMore': !column,
            'column__textReadMore': column
          }
        )}>
          {
            newsTitle && <div className="modal__trigger" onClick={openModal}>
              Читать
            </div>
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
