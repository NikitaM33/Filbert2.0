const initialState = {
  requirements: [
    {
      name: 'Дресскод',
      requirement: [
        'В рабочие дни, с понедельника по четверг, сотрудники компании должны придерживаться делового стиля одежды. По пятницам сотрудники могут приходить в деловой или неформальной одежде.'
      ],
      number: 1
    },
    {
      name: 'Требования',
      requirement: [
        '1. Ограничение по времени и частоте взаимодействия с должником',
        '2. Требования в представлении при общении с должником',
        '3. Недопустимость введения должника в заблуждение'
      ],
      number: 2
    },
    {
      name: 'Поведение',
      requirement: [
        '1. Уважительно общаться с коллегами',
        '2. Вопросы к начальству через непосредственного руководителя',
        '3. Соблюдать чистоту на кухне',
        '4. Соблюдать дресскод'
      ],
      number: 3
    }
  ]
}

const etiquette = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default etiquette;
