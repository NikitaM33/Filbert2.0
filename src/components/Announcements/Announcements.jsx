import React from 'react';

import { BlockHeader } from '@common';
import logoAnnouncment from '@assets/LogoAnnouncment.png';
import AnnouncmentsList from './AnnouncementsList';

const Announcements = () => {
  return (
    <div className="announcements">
      <div className="wrapper">
        <div className="announcements__header">
          <div className="announcements__headerBlock">
            <BlockHeader
              blue
              reverse
              textH3={'Объявления'}
              textH2={'Раздел для публикаций'}
              textB={'объявлений'}
              textP={'Здесь Вы можете разместить свое объявление'}
            />
          </div>
          <div className="announcements__logo">
            <img src={logoAnnouncment} alt="Logo" />
          </div>
        </div>

        <AnnouncmentsList />
      </div>
    </div>
  )
}

export default Announcements;
