import React from 'react';
import { useSelector } from 'react-redux';

import { HeaderText, MainUserCard } from '@common';
import sunrise from '@assets/SunRise.svg';


const NewWorkers = () => {
  const { newWorkers } = useSelector(({ newUsers }) => newUsers);

  return (
    <div className="newWorkers">
      <div className="newWorkers__header">
        <div className="wrapper">
          <div className="newWorkers__headerText">
            <HeaderText
              h2Header={'Новые сотрудники'}
              h1Header={'Мы рады приветствовать новых сотрудников в нашей компании'}
            />
          </div>
        </div>
        <div className="newWorkers__headerImg">
          <img src={sunrise} alt="Sunrise" />
        </div>
      </div>

      <div className="newWorkers__newPersonList">
        <div className="wrapper">
          <div className="newWorkers__container">
            {
              newWorkers ? newWorkers.map(person => <MainUserCard
                key={person.id}
                image={person.photo}
                name={`${person.name} ${person.surname}`}
                pos={person.position}
                dep={person.department}
              />)
                : <div>
                  <h1 className="h1Sub">В этом месяце нет новых сотрудников</h1>
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewWorkers;
