import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import {
  getInnerNewsById,
  getWorldNewsById,
  getCollectionNewsById
} from '@redux/actions/fetchAllNews';

const NewsPopup = ({
  innerNews,
  worldNews,
  id
}) => {
  const dispatch = useDispatch();
  const { newsById } = useSelector(({ news }) => news);
  const [ modal2Visible, setModal2Visible ] = useState(false);

  const toggleModal2Visible = () => {
    if(innerNews) {
      dispatch(getInnerNewsById(id));
      setModal2Visible(!modal2Visible);
    } else if(worldNews) {
      dispatch(getWorldNewsById(id));
      setModal2Visible(!modal2Visible);
    } else {
      dispatch(getCollectionNewsById(id));
      setModal2Visible(!modal2Visible);
    }
  }

  return (
    <>
      <Button onClick={toggleModal2Visible} className="popup">
        Читать
      </Button>
      {
        newsById && newsById.map((item, index) => {
          return (
            <Modal
              key={item + index}
              title={item.newsHeader}
              centered
              visible={modal2Visible}
              onCancel={() => setModal2Visible(false)}
              footer={null}
              width={920}
              className="popup__content"
            >
              <div className="popup__imgContent">
                <img src={item.newsImage} alt="News" />
              </div>
              <div className="popup__textContent">
                <p>{item.newsArticle}</p>
              </div>
            </Modal>
          )
        })
      }
    </>
  );
}

export default NewsPopup;
