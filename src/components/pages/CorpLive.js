import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { HeaderText } from "@common";
import { TodayBirthday, PartyBanner, MonthBirthdays } from "../";
import winterHeaderVideo from "@assets/headerVideo/headerVideo.mp4";
import summerHeaderVideo from "@assets/headerVideo/SummerHeaderVideo.webm";
import wave from "@assets/whiteWave.svg";

const CorpLive = () => {
  const changeHeaderVideo = () => {
    const month = new Date().getMonth();

    if (month >= 4 && month < 9) {
      return summerHeaderVideo;
    } else {
      return winterHeaderVideo;
    }
  };

  useEffect(() => {
    // TO DO: Сделать запрос header видео из базы, чтобы потом можно было добавлять любой видос
    // dispatchEvent(fetchVideoHeader());
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="corpLive">
      <div className="corpLive__header videoHeader">
        <div className="videoHeader__text">
          <div className="videoHeader__textContainer">
            <HeaderText
              h2Header={"Внутренняя жизнь"}
              h1Header={"Filbert"}
              pHeader={
                "Какие мероприятия готовятся в нашей компании, а так же фото и видео с прошедших корпоративов, конкурсы и поздравления."
              }
            />
          </div>
          <div className="videoHeader__galleryBtn">
            <Link to="/photoGalery">
              <div className="videoHeader__button">Галерея</div>
            </Link>
          </div>
        </div>
        <div className="videoHeader__video">
          <video autoPlay muted loop>
            <source src={changeHeaderVideo()} type="video/mp4" />
          </video>
        </div>
        <div className="videoHeader__whiteWave">
          <img src={wave} alt="Wave" />
        </div>
      </div>

      <TodayBirthday />
      <PartyBanner />
      <MonthBirthdays />
    </section>
  );
};

export default CorpLive;
