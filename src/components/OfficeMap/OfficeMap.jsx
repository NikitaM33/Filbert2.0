import React, { useState } from 'react';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import { setOfficeActive } from '@redux/actions/officeMap';
import { YellowButton } from '@common';
import sixFloor from '@assets/officeMap/6_floor_map.jpg';
import fourFloor from '@assets/officeMap/4_floor_map.jpg';
import { StructurePopup } from '@common';
import OfficeHightLight from './OfficeHightLight';
import BossCard from './BossCard';

const OfficeMap = React.memo(
  () => {
    const dispatch = useDispatch();
    const [isMainMap, setMainMap] = useState(false);
    const [referenceX, setReferenceX] = useState(0);
    const [referenceY, setReferenceY] = useState(0);
    const [cardOrientation, setCardOrientation] = useState(false);

    const {
      mapDataFourFloor,
      mapDataSixFloor,
      activeOffice,
      sixFloorBossData,
      fourFloorBossData
    } = useSelector(({ officeMap }) => officeMap);

    // Map image toggle
    const toggleMap = () => {
      setMainMap(!isMainMap);
    }

    // Office hightlight handler
    const handleOfficeLight = (e) => {
      const path = e.nativeEvent.path[0] || (e.composedPath && e.composedPath());
      const targetId = +e.target.id;

      if (path.closest('path')) {
        dispatch(setOfficeActive(targetId));
      } else {
        dispatch(setOfficeActive(null));
      }
    }

    // Mous coordinates handle by block
    const handleClickBossCard = (e) => {
      if (e.target.closest('.officeNavigate')) {
        const path = e.nativeEvent.path[0] || (e.composedPath && e.composedPath());
        let target = e.target.closest('.officeNavigate');
        let targetCoords = target.getBoundingClientRect();

        if (path.closest('path')) {
          if ((e.clientX) > targetCoords.right - (targetCoords.right / 2)) {
            let xCoordsReverse = e.clientX - (targetCoords.left + 215);
            let yCoordsReverse = e.clientY - (targetCoords.top + 35);

            setCardOrientation(true);
            setReferenceX(xCoordsReverse);
            setReferenceY(yCoordsReverse);
          } else {
            let xCoords = e.clientX - (targetCoords.left - 220);
            let yCoords = e.clientY - (targetCoords.top + 60);

            setCardOrientation(false);
            setReferenceX(xCoords);
            setReferenceY(yCoords);
          }
        } else {
          return;
        }
      }
    }

    return (
      <section className="map" onClick={handleOfficeLight}>
        <div className="wrapper">
          <div className="map__header">
            <h2 className="h2Header">Структура компании</h2>
            <h1 className="h1Header">и карта расположения<br />кабинетов Filbert</h1>
          </div>

          <StructurePopup />

          <div className="map__officeNavigate officeNavigate">

            <div className={cn(
              'officeNavigate__picture',
              {
                'transparent': isMainMap
              }
            )}
              onClick={handleClickBossCard}
            >
              <OfficeHightLight
                mapDataFloor={isMainMap ? mapDataFourFloor : mapDataSixFloor}
                activeOffice={activeOffice}
              />

              <BossCard
                bossData={!isMainMap ? sixFloorBossData : fourFloorBossData}
                x={referenceX}
                y={referenceY}
                activeOffice={activeOffice}
                cardOrientation={cardOrientation}
              />

              <div className="officeNavigate__schema">
                <img src={fourFloor} alt="4 этаж" />
                <img src={sixFloor} alt="6 этаж" id="sixFloor" />
              </div>
            </div>

            <div className="officeNavigate__buttons">
              <div className="officeNavigate__buttonsWrap">
                <YellowButton
                  onPush={toggleMap}
                  disable={!isMainMap}
                >
                  6 этаж
                </YellowButton>
              </div>

              <div className="officeNavigate__buttonsWrap">
                <YellowButton
                  onPush={toggleMap}
                  theme="bordered"
                  disable={isMainMap}
                >
                  4 этаж
                </YellowButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
);

export default OfficeMap;
