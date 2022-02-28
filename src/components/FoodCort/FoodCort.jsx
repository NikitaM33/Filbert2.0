import React from 'react';
import { useSelector } from 'react-redux';

const FoodCort = () => {
  const { foodGalery, foodText } = useSelector(({ foodCort }) => foodCort);

  return (
    <section className="food">
      <div className="wrapper">
        <div className="food__header">
          <h2 className="h2Header">Где перекусить</h2>
          <h1 className="h1Header">В бизнесс центре есть два кафе</h1>
          <p className="pHeader">Отвлечься от работы и приятно провести время за чашечкой горячего капучино или пообедать домашней едой?</p>
        </div>

        {
          foodText && foodText.map((cafe) => {
            return (
              <div key={cafe.h3Header} className="food__caffeDescr caffeDescr">
                <div className="caffeDescr__galery">
                  <ul className="caffeDescr__imgContainer">
                    {
                      foodGalery && foodGalery.map((item) => {
                        return (
                          <li key={item} className="caffeDescr__img">
                            <img src={item} alt="Food img" />
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
                <div className="caffeDescr__text">
                    <h3 className="h1Header">{cafe.h3Header} <span>{cafe.caffeName}</span></h3>
                    <h2 className="h2Header">{cafe.h2Header}</h2>
                    <p className="pHeaderSub">{cafe.subText}</p>
                    <p className="pHeader">{cafe.mainText}</p>
                </div>
              </div>
            )
          })
        }

      </div>
    </section>
  )
}

export default FoodCort;
