import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchInnerNews, fetchWorldNews } from '@redux/actions/fetchAllNews';
import InnerNews from './News/InnerNews';
import WorldNews from './News/WorldNews';
import CollectionNews from './News/CollectionNews';

const NewsPapers = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const {
    innerNewsItems,
    worldNewsItems,
    collectionNewsItems,
  } = useSelector(({ news }) => news);

  // Отслеживание изменения экрана ЭТО МОЖЕТ ПРИГОДИТЬСЯ!!!!

  // const observer = useRef(
  //   new ResizeObserver((entries) => {
  //     const { width } = entries[0].contentRect;
  //     console.log('Current width: ', width);
  //   })
  // );

  // useEffect(() => {
  //   observer.current.observe(ref.current)
  // }, [ref, observer]);

  // useEffect(() => {
  //   dispatch(fetchAllNews());
  // }, []);

  useEffect(() => {
    dispatch(fetchInnerNews());
    dispatch(fetchWorldNews());
  }, []);

  return (
    <div className="newspaper" ref={ref}>
      <div className="wrapper">
        <div className="newspaper__inside">
          <h3>Новости компании</h3>
          <div className="newspaper__items">
            <InnerNews
              innerNewsItems={innerNewsItems}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </div>

        <div className="newspaper__worldNews">
          <h3>СМИ</h3>
          <div className="newspaper__worldNewsItem">
            <WorldNews
              newsItems={worldNewsItems}
              column
              world
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </div>

        <div className="newspaper__collectionNews">
          <h3>Новости collection</h3>
          <div className="newspaper__collectionNewsItem">
            <CollectionNews
              newsItems={collectionNewsItems}
              column
              collect
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsPapers;
