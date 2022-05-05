import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'antd';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper-bundle.min.css';

import { fetchAnnouncement, getAnnounceById } from '@redux/actions/announcements';
import MyPagination from '../NewsPapers/Pagination/Pagination';

const Announcements = () => {
  const dispatch = useDispatch();
  const { announcementsList, announcementById } = useSelector(({ announcements }) => announcements);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Test
  const [announcementsPageSize] = useState(10);
  const [announcementsPerPage] = useState(10);
  const pageCount = Math.ceil(announcementsList.length / announcementsPageSize);
  const lastPageItem = currentPage * announcementsPerPage;
  const firstPageItem = lastPageItem - announcementsPerPage;
  const currentItemsOnPage = announcementsList.slice(firstPageItem, lastPageItem);
  const pages = [];

  for (let i = 1; i <= pageCount; i++) {
    if (pageCount <= announcementsList.length) {
      pages.push(i);
    }
  }

  const paginatePage = (pageNumber) => setCurrentPage(pageNumber);

  const toggleModal2Visible = (id) => {
    dispatch(getAnnounceById(id));
    setModal2Visible(!modal2Visible);
  }

  const goToChat = () => {
    console.log('Going to chat!');
  }



  useEffect(() => {
    dispatch(fetchAnnouncement());
  }, [announcementsList]);

  return (
    <div className="announcementsList">
      <div className="announcementsList__link">
        <Link to="/createAnnouncement">Подать объявление</Link>
      </div>
      <ul className="announcementsList__list">
        {
          currentItemsOnPage && currentItemsOnPage.map((item) => {
            return (
              <li key={item.id} className="announcementsList__item">
                <Button onClick={() => toggleModal2Visible(item.id)} className="announcementsList__button">
                  {
                    item.img ? <img src={item.img} alt="Item" /> : ''
                  }
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
                </Button>
              </li>
            )
          })
        }
        {
          announcementById && announcementById.map((item) => {
            return (
              <Modal
                key={item.id}
                title={item.title}
                centered
                visible={modal2Visible}
                onOk={() => setModal2Visible(false)}
                onCancel={() => setModal2Visible(false)}
                footer={null}
                width={920}
                className="popup__content"
              >
                <div key={item.id} className="announcement__section">
                  <div className="announcement__body body">
                    <Swiper
                      modules={[Navigation, Pagination]}
                      spaceBetween={50}
                      navigation
                      pagination={{ clickable: true }}
                      className="body__photoContent"
                    >
                      {
                        item.img && item.img.map((image, index) => {
                          return (
                            <SwiperSlide key={image + index} className="body__photo">
                              <img src={image} alt={item.title} />
                            </SwiperSlide>
                          )
                        })
                      }
                    </Swiper>

                    <div className="body__descrContainer">
                      <div className="body__descr">
                        {item.descr}
                      </div>

                      <div className="body__contacts contacts">
                        <div className="contacts__container">
                          <div className="contacts__name">
                            {item.userName}
                          </div>
                          <div className="contacts__phone">
                            т. {item.phone}
                          </div>
                        </div>

                        <div className="contacts__chatConnect">
                          <button onClick={goToChat} className="contacts__button">Написать в чате</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            )
          })
        }
      </ul>
      <MyPagination
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
