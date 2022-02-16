import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faClipboardList, faChess } from '@fortawesome/free-solid-svg-icons';

const Etiquette = () => {
  return (
    <section className="etiquette">
      <div className="wrapper">
        <div className="etiquette__header">
          <h2 className="h2Header">Служебный этикет</h2>
          <h1 className="h1Header">В агентстве Filbert принят официально-деловой стиль общения</h1>
        </div>

        <div className="etiquette__spots spots">
          <div className="spots__spot">
            <div className="spots__label">
              <div className="spots__name">
                <h2>Дресскод</h2>

                <div className="spots__requirements">
                  <p>
                    В рабочие дни, с понедельника по четверг, сотрудники компании должны придерживаться делового стиля одежды. По пятницам сотрудники могут приходить в деловой или неформальной одежде.
                  </p>
                </div>
              </div>

              <div className="spots__info">
                <span className="spots__icon">
                  <FontAwesomeIcon icon={faUserTie} />
                </span>
                <span className="spots__number">01</span>
              </div>
            </div>
          </div>

          <div className="spots__spot">
            <div className="spots__label">
              <div className="spots__name">
                <h2>Требования</h2>

                <div className="spots__requirements">
                  <ol>
                    <li>1. Ограничение по времени и частоте взаимодействия с должником</li>
                    <li>2. Требования в представлении при общении с должником</li>
                    <li>3. Недопустимость введения должника в заблуждение</li>
                  </ol>
                </div>
              </div>

              <div className="spots__info">
                <span className="spots__icon">
                  <FontAwesomeIcon icon={faClipboardList} />
                </span>
                <span className="spots__number">02</span>
              </div>
            </div>
          </div>

          <div className="spots__spot">
            <div className="spots__label">
              <div className="spots__name">
                <h2>Поведение</h2>

                <div className="spots__requirements">
                  <ol>
                    <li>1. Уважительно общаться с коллегами</li>
                    <li>2. Вопросы к начальству через непосредственного руководителя</li>
                    <li>3. Соблюдать чистоту на кухне</li>
                    <li>4. Соблюдать дресскод</li>
                  </ol>
                </div>
              </div>

              <div className="spots__info">
                <span className="spots__icon">
                  <FontAwesomeIcon icon={faChess} />
                </span>
                <span className="spots__number">03</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Etiquette;
