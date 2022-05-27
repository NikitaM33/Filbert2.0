import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { HeaderText } from '@common';
import { getLeadersInfo } from '@redux/actions/getLeadersInfo';
import {
  Rating,
  NewsBlock,
  Announcements,
  NewWorkers
} from '../';
import filbertTeam from '@assets/filbertTeam.png';

const News = () => {
  const dispatch = useDispatch();
  const { leaders } = useSelector(({ newsLeaders }) => newsLeaders);

  useEffect(() => {
    dispatch(getLeadersInfo());
  }, []);

  return (
    <div className="news">
      <div className="wrapper">
        <div className="news__header">
          <div className="news__text">
            <HeaderText
              h2Header={'Новостной центр'}
              h1Header={'Будь в центре внимания'}
              pHeader={'Страница с новостными изданиями нашей компании, наших коллег, а так же новостями Collections и полезными советами по финансовым вопросам'}
            />
          </div>
          <div className="news__teamImage">
            <img src={filbertTeam} alt="Filbert team" />
            <span className="news__teamCircle"></span>
          </div>
        </div>
      </div>
      <Rating
        leaders={leaders}
      />
      <NewsBlock />
      <Announcements />
      <NewWorkers />
    </div>
  )
}

export default News;
