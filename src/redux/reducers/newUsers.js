import { SET_NEW_WORKERS } from '../constants';

const initialState = {
  newWorkers: [
    {
      id: 1,
      photo: 'http://192.168.10.185:8080/img/Test/1.jpg',
      name: 'Денис',
      surname: 'Гончаров',
      position: 'Старший специалист отдела организации взыскания',
      department: 'Департамент аналитики и организации процедур'
    },
    {
      id: 2,
      photo: 'http://192.168.10.185:8080/img/Test/2.jpg',
      name: 'Евгений',
      surname: 'Тимофеев',
      position: 'Старший инженер',
      department: 'Отдел разработки автоматизированных систем. Департамент информационных технологий'
    },
    {
      id: 3,
      photo: 'http://192.168.10.185:8080/img/Test/3.jpg',
      name: 'Александра',
      surname: 'Елисеева',
      position: 'Архивариус',
      department: 'Архив. Управление делами'
    },
    {
      id: 4,
      photo: 'http://192.168.10.185:8080/img/Test/4.jpg',
      name: 'Денис',
      surname: 'Гончаров',
      position: 'Старший специалист отдела организации взыскания',
      department: 'Департамент аналитики и организации процедур'
    },
    {
      id: 5,
      photo: 'http://192.168.10.185:8080/img/Test/5.jpg',
      name: 'Диана',
      surname: 'Крюкова',
      position: 'Старший специалист',
      department: 'Управление предъявления и восстановления исполнительных документов'
    },
    {
      id: 6,
      photo: 'http://192.168.10.185:8080/img/Test/6.jpg',
      name: 'Денис',
      surname: 'Гончаров',
      position: 'Старший специалист отдела организации взыскания',
      department: 'Департамент аналитики и организации процедур'
    },
    {
      id: 7,
      photo: 'http://192.168.10.185:8080/img/Test/7.jpg',
      name: 'Денис',
      surname: 'Гончаров',
      position: 'Старший специалист отдела организации взыскания',
      department: 'Департамент аналитики и организации процедур'
    },
    {
      id: 8,
      photo: 'http://192.168.10.185:8080/img/Test/8.jpg',
      name: 'Денис',
      surname: 'Гончаров',
      position: 'Старший специалист отдела организации взыскания',
      department: 'Департамент аналитики и организации процедур'
    },
    {
      id: 9,
      photo: 'http://192.168.10.185:8080/img/Test/9.jpg',
      name: 'Денис',
      surname: 'Гончаров',
      position: 'Старший специалист отдела организации взыскания',
      department: 'Департамент аналитики и организации процедур'
    },
    {
      id: 10,
      photo: 'http://192.168.10.185:8080/img/Test/10.jpg',
      name: 'Денис',
      surname: 'Гончаров',
      position: 'Старший специалист отдела организации взыскания',
      department: 'Департамент аналитики и организации процедур'
    },
    {
      id: 11,
      photo: 'http://192.168.10.185:8080/img/Test/11.jpg',
      name: 'Денис',
      surname: 'Гончаров',
      position: 'Старший специалист отдела организации взыскания',
      department: 'Департамент аналитики и организации процедур'
    },
  ]
}

const newUsers = (state = initialState, action) => {
  switch(action.type) {
    case SET_NEW_WORKERS:
      return {
        ...state,
      }

    default:
      return state
  }
}

export default newUsers;
