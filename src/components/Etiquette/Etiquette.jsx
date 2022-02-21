import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const Etiquette = () => {
  const { requirements } = useSelector(({ etiquette }) => etiquette);

  return (
    <section className="etiquette">
      <div className="wrapper">
        <div className="etiquette__header">
          <h2 className="h2Header">Служебный этикет</h2>
          <h1 className="h1Header">В агентстве Filbert принят официально-деловой стиль общения</h1>
        </div>

        {/* TO DO: сделать через map */}
        <div className="etiquette__spots spots">
          {
            requirements && requirements.map((requirement) => {
              return (
                <div className="spots__spot" key={requirement.number}>
                  <div className="spots__label">
                    <div className="spots__name">
                      <h2>{requirement.name}</h2>

                      <div className="spots__requirements">
                        <ul>
                          {
                            requirement.requirement.map((item, index) => {
                              return (
                                <li key={index}>
                                  {item}
                                </li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    </div>

                    <div className="spots__info">
                      <span className="spots__icon">
                        <FontAwesomeIcon icon={faClipboardList} />
                      </span>
                      <span className="spots__number">0{requirement.number}</span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Etiquette;
