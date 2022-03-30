import React, { useState, useRef, useEffect } from 'react';
import PrismaZoom from 'react-prismazoom';

import companyStructure from '@assets/officeMap/companyStructure.png';

function StructurePopup() {
  const [visiblePopUp, setVisiblePopUp] = useState(false);
  const popupRef = useRef();

  const visiblePopup = () => {
    setVisiblePopUp(!visiblePopUp)
  }

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.structurePopup__picture')) {
      setVisiblePopUp(false);
    }
  }

  const handleRefClick = (e) => {
    const path = e.path || (e.composedPath && e.composedPath());

    if (!path.includes(popupRef.current)) {
      setVisiblePopUp(false);
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', handleRefClick);

    return () => {
      document.body.removeEventListener('click', handleRefClick);
    }
  }, []);

  return (
    <div ref={popupRef}>
      <div className="map__companiStructure companiStructure" onClick={visiblePopup}>
        <div className="companiStructure__textWrap">
          <div className="companiStructure__name">
            <span>Структура <br />компании</span>
          </div>
          <div className="companiStructure__chevron">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" className="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#08415C" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
          </div>
        </div>
      </div>
      {
        visiblePopUp && <div className="structurePopup" onClick={handleOutsideClick}>
          <div className="structurePopup__picture">
            <PrismaZoom>
              <img src={companyStructure} alt="Структура компании" />
            </PrismaZoom>
          </div>
        </div>
      }
    </div>
  )
}

export default StructurePopup;
