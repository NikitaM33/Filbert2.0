import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAnnouncement } from '@redux/actions/announcements';
import Pagination from '../NewsPapers/Pagination/Pagination';

const Announcements = () => {
  const dispatch = useDispatch();
  const { announcementsList } = useSelector(({ announcements }) => announcements);
  const [ currentPage, setCurrentPage ] = useState(1); // Test
  const [ announcementsPageSize ] = useState(10);
  const [ announcementsPerPage ] = useState(10);
  const pageCount = Math.ceil(announcementsList.length / announcementsPageSize);
  const lastPageItem = currentPage * announcementsPerPage;
  const firstPageItem = lastPageItem - announcementsPerPage;
  const currentItemsOnPage = announcementsList.slice(firstPageItem, lastPageItem);
  const pages = [];

  for(let i = 1; i <= pageCount; i++) {
    if(pageCount <= announcementsList.length) {
      pages.push(i);
    }
  }

  const paginatePage = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(fetchAnnouncement());
  }, [announcementsList]);

  return (
    <div className="announcementsList">
      <div className="announcementsList__link">
        <Link to="\">Подать объявление</Link>
      </div>
      <ul className="announcementsList__list">
        {
          currentItemsOnPage && currentItemsOnPage.map((item) => {
            return (
              <li key={item.id} className="announcementsList__item">
                <Link to="\">
                  <img src={item.img} alt="Item" />
                  <div className="announcementsList__info">
                    <h3>{item.title}</h3>
                    <div className="announcementsList__photoCount">
                      {
                        item.count > 9 ?
                          `${item.count} фото`
                        : item.count < 1 ? ''
                        : `0${item.count} фото`
                      }
                    </div>
                  </div>
                </Link>
              </li>
            )
          })
        }
      </ul>
      <Pagination
        onDark
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onPaginate={paginatePage}
      />
    </div>
  )
}

export default Announcements;
