import React, { useState, useRef, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';

const newsModal = document.querySelector('#modal');

const NewsModal = ({ children, isModalOpen, setIsModalOpen }) => {
  const element = useMemo(() => document.createElement('div'), []);
  const ref = useRef();
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const toggleVisibleModal = (e) => {
  //   setIsModalOpen(!isModalOpen);
  // }

  useEffect(() => {
    if (isModalOpen) {
      newsModal.appendChild(element);

      return () => {
        newsModal.removeChild(element);
      }
    }
  });

  if (isModalOpen) {
    return createPortal(
      <div className="newsModal" onClick={() => {setIsModalOpen(false)}}>
        <div className="newsModal__screen screen">
          <div className="screen__item">
            <h3>{children}</h3>
          </div>
        </div>
      </div>
      , element
    );
  }

  return null;

  // (
  // <div className="modal">
  //   {/* <Link to={`http://192.168.10.185:8080/news?newsID=${id}`}>Читать</Link> */}
  //   <div className="modal__trigger" onClick={toggleVisibleModal}>
  //     Читать
  //   </div>

  //   {/* {
  //       isModalOpen && */}
  //   <div className="modal__screen screen">
  //     <div className="screen__item">
  //       <h3>I`m modal screen</h3>
  //     </div>
  //   </div>
  //   {/* } */}
  // </div>
  // )
}

export default NewsModal;
