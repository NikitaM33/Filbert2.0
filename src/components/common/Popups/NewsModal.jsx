import React, { useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';

const newsModal = document.querySelector('#modal');

const NewsModal = ({ children, isModalOpen, setIsModalOpen }) => {
  const element = useMemo(() => document.createElement('div'), []);

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
}

export default NewsModal;
