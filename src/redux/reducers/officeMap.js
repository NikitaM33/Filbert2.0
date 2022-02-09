import { SET_ACTIVE_OFFICE } from '../constants';

const initialState = {
  mapDataFourFloor: [
    {
      href: '#40',
      title: 'Лифт',
      tip: 'Лифт',
      id: '0',
      d: 'M 222.27929,194.162103 V 248.18785 H 162.1016738 V 194.812039 Z',
      active: false,
      bossPhoto: '../img/officesBoss/elevator.svg',
      bossPosition: 'Лифт'
    },
    {
      href: '#41',
      title: 'Женский туалет',
      tip: 'Женский туалет',
      id: '1',
      d: 'M 243.27929,260.162103 V 383.18785 H 162.1016738 V 260.812039 Z',
      active: false,
      bossPhoto: '../img/officesBoss/ladies.svg',
      bossPosition: 'Женский туалет'
    },
    {
      href: '#42',
      title: 'Мужской туалет',
      tip: 'Мужской туалет',
      id: '2',
      d: 'M 293.27929,389 V 447.18785 H 162.1016738 V 389.812039 Z',
      active: false,
      bossPhoto: '../img/officesBoss/toilet_men.svg',
      bossPosition: 'Мужской туалет'
    },
    {
      href: '#43',
      title: 'Запасной выход',
      tip: 'Запасной выход',
      id: '3',
      d: 'M 293.27929,17 V 120.18785 H 234.1016738 V 17.812039 Z',
      active: false,
      bossPhoto: '../img/officesBoss/emergensyExit.svg',
      bossPosition: 'Запасной выход'
    },
    {
      href: '#44',
      title: 'Отдел внедрения и сопровождения автоматизированных систем',
      tip: 'Отдел внедрения и сопровождения автоматизированных систем',
      id: '4',
      d: 'M 458.27929,17 V 279.18785 H 305.1016738 V 17.812039 Z',
      active: false,
      bossPhoto: '../img/officesBoss/Permyakov-min.jpg',
      bossPosition: 'Начальник отдела внедрения и сопровождения автоматизированных систем',
      bossLastName: 'Пермяков',
      bossName: 'Сергей',
      bossSecondName: 'Вячеславович'
    },
    {
      href: '#45',
      title: 'Отдел сопровождения и обработки кредитных портфелей',
      tip: 'Отдел сопровождения и обработки кредитных портфелей',
      id: '5',
      d: 'M 608.27929,17 V 279.18785 H 465.1016738 V 17.812039 Z',
      active: false,
      bossPhoto: '../img/officesBoss/Permyakova-minS.jpg',
      bossPosition: 'Начальник отдела сопровождения и обработки кредитных портфелей',
      bossLastName: 'Пермякова',
      bossName: 'Мария',
      bossSecondName: 'Александровна'
    },
    {
      href: '#46',
      title: 'Управление дистанционного взыскания и исполнительного производства',
      tip: 'Управление дистанционного взыскания и исполнительного производства',
      id: '6',
      d: 'M 763.27929,17 V 279.18785 H 615.1016738 V 17.812039 Z',
      active: false,
      bossPhoto: '../img/officesBoss/Vasunina-minS.jpg',
      bossPosition: 'Начальник управления дистанционного взыскания и исполнительного производства',
      bossLastName: 'Васюнина',
      bossName: 'Мария',
      bossSecondName: 'Витальевна'
    },
    {
      href: '#47',
      title: 'Управление дистанционного взыскания и исполнительного производства',
      tip: 'Управление дистанционного взыскания и исполнительного производства',
      id: '7',
      d: 'M 763.27929,372 V 716.18785 H 615.1016738 V 372.812039 Z',
      active: false,
      bossPhoto: '../img/officesBoss/Vasunina-minS.jpg',
      bossPosition: 'Начальник управления дистанционного взыскания и исполнительного производства',
      bossLastName: 'Васюнина',
      bossName: 'Мария',
      bossSecondName: 'Витальевна'
    },
    {
      href: '#48',
      title: 'Управление дистанционного взыскания и исполнительного производства',
      tip: 'Управление дистанционного взыскания и исполнительного производства',
      id: '8',
      d: 'M 608.27929,372 V 716.18785 H 465.1016738 V 372.812039 Z',
      active: false,
      bossPhoto: '../img/officesBoss/Vasunina-minS.jpg',
      bossPosition: 'Начальник управления дистанционного взыскания и исполнительного производства',
      bossLastName: 'Васюнина',
      bossName: 'Мария',
      bossSecondName: 'Витальевна'
    },
    {
      href: '#49',
      title: 'Женский туалет',
      tip: 'Женский туалет',
      id: '9',
      d: 'M 1122.27929,372 V 487.18785 H 1038.1016738 V 372.812039 Z',
      active: false
    },
    {
      href: '#50',
      title: 'Мужской туалет',
      tip: 'Мужской туалет',
      id: '10',
      d: 'M 1216.27929,372 V 487.18785 H 1128.1016738 V 372.812039 Z',
      active: false
    },
    {
      href: '#51',
      title: 'Лифт',
      tip: 'Лифт',
      id: '11',
      d: 'M 1393.27929,57 V 174.18785 H 1313.1016738 V 57 Z',
      active: false
    },
    {
      href: '#52',
      title: 'Запасной выход',
      tip: 'Запасной выход',
      id: '12',
      d: 'M 1484.27929,17 V 174.18785 H 1405.1016738 V 17 Z',
      active: false
    }
  ],
  mapDataSixFloor: [
    {
      href: '#06',
      title: 'Генеральный директор',
      tip: 'Генеральный директор',
      id: '0',
      d: 'M 243.27929,18.162103 V 161.18785 H 20.1016738 V 18.812039 Z',
      active: false,
      bossPhoto: '../img/officesBoss/Ivanov.jpg',
      bossPosition: 'Генеральный директор',
      bossLastName: 'Иванов',
      bossName: 'Андрей',
      bossSecondName: 'Борисович'
    },
    {
      href: '#07',
      title: 'Юридическое управление',
      tip: 'Юридическое управление',
      id: '1',
      d: 'm 167.16365,166.52467 0.24753,113.60855 H 20.1587171 L 20.6537829,166.27714 Z',
      active: false,
      bossPhoto: '../img/officesBoss/Talanova.jpg',
      bossPosition: 'Начальник юридического управления',
      bossLastName: 'Таланова',
      bossName: 'Анна',
      bossSecondName: 'Александровна'
    },
    {
      href: '#08',
      title: 'Управление по работе с персоналом',
      tip: 'Управление по работе с персоналом',
      id: '2',
      d: 'M 20.1587171,399.1875 167.41118,399.43503 167.16365,286.33141 H 20.6537829 Z',
      active: false,
      bossPhoto: '../img/officesBoss/Egorova.jpg',
      bossPosition: 'Начальник управления по работе с персоналом',
      bossLastName: 'Егорова',
      bossName: 'Надежда',
      bossSecondName: 'Александровна'
    },
    {
      href: '#09',
      title: 'Управление развития',
      tip: 'УР',
      id: '3',
      d: 'M 20.4206372,406.38569 168.16365,406.63322 V 519.24178 L 20.6673308,519.99424 Z',
      active: false,
      bossPhoto: '../img/officesBoss/Mokshanova.jpg',
      bossPosition: 'Начальник управления развития',
      bossLastName: 'Мокшанова',
      bossName: 'Оксана',
      bossSecondName: 'Васильевна'
    },
    {
      href: '#10',
      title: 'Пожарная лестница',
      tip: 'Запасной выход',
      id: '4',
      d: 'M 20.6952979,530.63816 H 148.35115 v 83.51727 H 20.4483114 Z',
      active: false,
      bossPhoto: '../img/officesBoss/emergensyExit.svg',
      bossPosition: 'Запасной выход'
    },
    {
      href: '#11',
      title: 'Женский туалет',
      tip: 'Женский туалет',
      id: '5',
      d: 'm 20.40625,624.78947 h 127.69737 l 0.24753,93.31908 H 20.40625 Z',
      active: false,
      bossPhoto: '../img/officesBoss/ladies.svg',
      bossPosition: 'Женский туалет'
    },
    {
      href: '#13',
      title: 'Управление судебным взысканием',
      tip: 'УПиВИД',
      id: '6',
      d: 'm 248.46382,18.717926 80.55756,0.247533 V 217.98191 h -80.55756 z',
      active: false,
      bossPhoto: '../img/officesBoss/Zin-min.jpg',
      bossPosition: 'Начальник управления судебным взысканием',
      bossLastName: 'Зин',
      bossName: 'Инна',
      bossSecondName: 'Вячеславовна'
    },
    {
      href: '#14',
      title: 'Департамент выездного взыскания и исполнительного производства',
      tip: 'ДВВиИП',
      id: '7',
      d: 'M 334.26515,18.512168 H 459.242 V 258.15697 l -57.61391,0.35006 0.70013,21.65766 -152.83142,0.35006 v -57.86487 l 86.46848,0.70012 z',
      active: false,
      bossPhoto: '../img/officesBoss/Smirnov-min.JPG',
      bossPosition: 'Начальник департамента выездного взыскания и исполнительного производства',
      bossLastName: 'Смирнов',
      bossName: 'Константин',
      bossSecondName: 'Валерьевич'
    },
    {
      href: '#15',
      title: 'Операционный директор',
      tip: 'Операционный директор',
      id: '8',
      d: 'M 407.52899,335.97809 H 459.242 V 264.40794 l -51.06307,0.35006 z',
      active: false,
      bossPhoto: '../img/officesBoss/Polosukhin.jpg',
      bossPosition: 'Операционный директор',
      bossLastName: 'Полосухин',
      bossName: 'Никита',
      bossSecondName: 'Витальевич'
    },
    {
      href: '#16',
      title: 'Малая переговорная',
      tip: 'Малая переговорная',
      id: '9',
      d: 'm 249.73713,285.57895 79.53251,0.24753 0.24681,50.07155 -80.02615,0.24753 z',
      active: false,
      bossPhoto: '../img/officesBoss/meetingRoom.svg',
      bossPosition: 'Малая переговорная'
    },
    {
      href: '#18',
      title: 'Управление судебным взысканием',
      tip: 'Управление судебным взысканием',
      id: '10',
      d: 'm 249.47598,417.09237 h 109.5454 v 300.78284 h -16.17137 v 0 l -86.22781,-0.24685 v 0 l -7.89935,0.24685 z',
      active: false,
      bossPhoto: '../img/officesBoss/Corshun.jpg',
      bossPosition: 'Начальник управления судебным взысканием',
      bossLastName: 'Коршун',
      bossName: 'Евгений',
      bossSecondName: 'Витальевич'
    },
    {
      href: '#19',
      title: 'УИПпоСПбиЛО',
      tip: 'Управление бухгалтерской отчетности/Финансовое управление',
      id: '11',
      d: 'm 364.44018,555.81722 107.57627,0.0635 0.24753,158.22779 0,0 0,4.70312 -137.46958,0.24754 -0.24753,0 29.66365,0.24753 z',
      active: false,
      bossPhoto: '../img/officesBoss/Sibileva.jpg',
      bossPosition: 'Начальник управления бухгалтерской отчетности',
      bossLastName: 'Сибилева',
      bossName: 'Валентина',
      bossSecondName: 'Викторовна'
    },
    {
      href: '#20',
      title: '',
      tip: 'Финансовое управление',
      id: '12',
      d: 'm 364.44018,417.81722 107.57627,0.0635 0.24753,134.22779 0,0 0,4.70312 -137.46958,0.24754 -0.24753,0 29.66365,0.24753 z',
      active: false,
      bossPhoto: '../img/officesBoss/ZHykova.jpg',
      bossPosition: 'Начальник финансового управления',
      bossLastName: 'Жукова',
      bossName: 'Лилия',
      bossSecondName: 'Александровна'
    },
    {
      href: '#21',
      title: 'Информационные технологии',
      tip: 'Управление информационных технологий / Сопровождение и обработка кредитных портфелей',
      id: '13',
      d: 'm 478.44277,416.99225 h 84.27028 l 0.35006,124.91636 h 93.00901 V 718.148 l -30.25225,-0.35006 v 0 l -139.32562,0.70013 v 0 l -7.70142,0.35006 z',
      active: false,
      bossPhoto: '../img/officesBoss/Rojencov.jpg',
      bossPosition: 'Начальник управления информационных технологий',
      bossLastName: 'Роженцов',
      bossName: 'Максим',
      bossSecondName: 'Николаевич'
    },
    {
      href: '#22',
      title: 'Служебное помещение',
      tip: 'Служебное помещение',
      id: '14',
      d: 'm 335.02263,286.23813 65.78444,0.1737 0.17359,49.5701 -65.78443,0.1737 z',
      active: false,
      bossPhoto: '../img/officesBoss/Staff-Only.svg',
      bossPosition: 'Служебное помещение'
    },
    {
      href: '#23',
      title: 'Департамент аналитики и организации процедур',
      tip: 'ДАиОП',
      id: '15',
      d: 'm 464.47204,280.13322 98.6472,0.24754 V 113.5477 l 92.05428,0.49506 V 18.470393 L 652.00165,18.717926 651.75411,18.014801 512.39309,18.7672681 v 0 h -47.92105 z',
      active: false,
      bossPhoto: '../img/officesBoss/Salnikova-min.jpg',
      bossPosition: 'Начальник департамента аналитики и организации процедур',
      bossLastName: 'Сальникова',
      bossName: 'Ольга',
      bossSecondName: 'Олеговна'
    },
    {
      href: '#24',
      title: 'Управление развития',
      tip: '',
      id: '16',
      d: 'm 562.47204,110.13322 0.6472,18.24754 V 201.5477 l 202.05428,0.49506 V 18.470393 L 652.00165,18.717926 651.75411,18.014801 653.39309,110.7672681 v 0 h -47.92105 z',
      active: false,
      bossPhoto: '../img/officesBoss/Mokshanovaa.jpg',
      bossPosition: 'Начальник Управления развития',
      bossLastName: 'Мокшанова',
      bossName: 'Оксана',
      bossSecondName: 'Васильевна'
    },
    {
      href: '#25',
      title: 'Малая переговорная 2',
      tip: 'Малая переговорная 2',
      id: '17',
      d: 'm 464.47204,286.82648 h 98.39967 l 0.49507,49.31908 H 464.47204 Z',
      active: false,
      bossPhoto: '../img/officesBoss/meetingRoom.svg',
      bossPosition: 'Малая переговорная 2'
    },
    {
      href: '#26',
      title: 'Лифт',
      tip: 'Лифт',
      id: '18',
      d: 'm 666.27961,257.83635 h 98.89391 l 0.24753,83.30921 h -97.89391 z',
      active: false,
      bossPhoto: '../img/officesBoss/elevator.svg',
      bossPosition: 'Лифт'
    },
    {
      href: '#27',
      title: 'Мужской туалет',
      tip: 'Мужской туалет',
      id: '19',
      d: 'm 776.4415,277.01541 h 123.51738 l -0.35007,139.27671 -123.86745,-0.35006 z',
      active: false,
      bossPhoto: '../img/officesBoss/toilet_men.svg',
      bossPosition: 'Мужской туалет'
    },
    {
      href: '#28',
      title: 'Пожарная лестница',
      tip: 'Запасной выход',
      id: '20',
      d: 'm 666.22399,581.46974 98.76577,0.35007 0.35007,136.32819 -6.65123,-0.35006 v 0 l -85.11326,0.35007 v 0 l -7.00128,0.35006 z',
      active: false
    },
    {
      href: '#29',
      title: 'Столовая',
      tip: 'Столовая',
      id: '21',
      d: 'm 775.33224,226.89474 195.5,0.49506 -0.49507,-258.919406 0,0.04177 V 19 L 790.54446,19.1363626 V 19 l -15.92793,0.175032 z',
      active: false,
      bossPhoto: '../img/officesBoss/kitchen.svg',
      bossPosition: 'Столовая'
    },
    {
      href: '#30',
      title: 'Комната отдыха',
      tip: 'Комната отдыха',
      id: '22',
      d: 'm 977.53536,40.717926 h 0 V 18.5098668 H 1059.787 v 0.2080592 l 61.0502,0.247533 0.495,81.685855 -145.79684,0.247533 z',
      active: false,
      bossPhoto: '../img/officesBoss/relax.svg',
      bossPosition: 'Комната отдыха'
    },
    {
      href: '#31',
      title: 'Большая переговорная',
      tip: 'Большая переговорная',
      id: '23',
      d: 'm 976.16996,132.678198 145.27674,0.350064 0.7001,201.949828 H 976.52002 Z',
      active: false,
      bossPhoto: '../img/officesBoss/meetingRoom.svg',
      bossPosition: 'Большая переговорная'
    },
    {
      href: '#32',
      title: 'Управление экономической безопасности',
      tip: 'Управление экономической безопасности',
      id: '24',
      d: 'm 1127.0477,18.512168 0.7001,189.886762 78.2098,0 0,-190.0875292 h 0 l 0,0 z',
      active: false,
      bossPhoto: '../img/officesBoss/Gaaze.jpg',
      bossPosition: 'Начальник управления экономической безопасности',
      bossLastName: 'Гаазе',
      bossName: 'Дмитрий',
      bossSecondName: 'Юрьевич'
    },
    {
      href: '#33',
      title: 'Типография',
      tip: 'Типография',
      id: '25',
      d: 'm 1126.5304,213.93256 h 79.4671 v 120.96547 h -78.4671 z',
      active: false,
      bossPhoto: '../img/officesBoss/typografy.svg',
      bossPosition: 'Типография'
    },
    {
      href: '#34',
      title: 'Управление call-центр',
      tip: 'Управление call-центр',
      id: '26',
      d: 'm 879.5,533.80307 0.35006,185.89577 0.96268,0 8.35007,0 316.19051,0.35006 -0.3501,-267.15575 H 976.5 v 83.16088 z',
      active: false,
      bossPhoto: '../img/officesBoss/Demidov.jpg',
      bossPosition: 'Начальник управления call-центр',
      bossLastName: 'Демидов',
      bossName: 'Юрий',
      bossSecondName: 'Геннадьевич'
    },
    {
      href: '#36',
      title: 'Управление делами',
      tip: 'Управление делами',
      id: '27',
      d: 'm 1283.0987,718.10855 h 202.0099 l 0,-90.12911 h 0 V 573.73766 h -104.9507 l 0.2476,49.89144 -97.5139,-0.1757 z',
      active: false,
      bossPhoto: '../img/officesBoss/Ivanova.jpg',
      bossPosition: 'Начальник управления делами',
      bossLastName: 'Иванова',
      bossName: 'Анна',
      bossSecondName: 'Леонидовна'
    },
    {
      href: '#37',
      title: 'Отдел судебного делопроизводства',
      tip: 'Отдел судебного делопроизводства',
      id: '28',
      d: 'm 1283.47204,618.13322 90.6472,0.24754 V 568.5477 l 112.05428,0.49506 V 306.470393 L 1294.00165,306.717926 1294.75411,439.014801 1360.39309,306.7672681 v 0 h -77.92105 z',
      active: false,
      bossPhoto: '../img/officesBoss/Kiseleva-min.jpg',
      bossPosition: 'Зам. начальника судебного делопроизводства',
      bossLastName: 'Киселева',
      bossName: 'Ольга',
      bossSecondName: 'Владимировна'
    },
    {
      href: '#38',
      title: 'Управление исполнительного производства по СПб и ЛО',
      tip: 'Управление исполнительного производства по СПб и ЛО',
      id: '29',
      d: 'm 1283.4197,170.78888 201.305,0.35007 0.175,0 0,0.35006 v 116.22137 l 0,0.17503 0.175,12.95238 -201.9036,0.19375 z',
      active: false,
      bossPhoto: '../img/officesBoss/Gavrilov.jpg',
      bossPosition: 'Начальник управления судебного взыскания долгов',
      bossLastName: 'Гаврилов',
      bossName: 'Евгений',
      bossSecondName: 'Игоревич'
    },
    {
      href: '#39',
      title: 'Управление судебного взыскания долгов',
      tip: 'Управление судебного взыскания долгов',
      id: '30',
      d: 'm 1283.4194,18.78888 201.305,0.35007 0.175,0 0,0.35006 v 116.22137 l 0,16.17503 0.175,12.95238 -201.9036,0.19375 z',
      active: false,
      bossPhoto: '../img/officesBoss/Beleckaya.jpg',
      bossPosition: 'Зам. начальника управления судебного взыскания долгов',
      bossLastName: 'Белецкая',
      bossName: 'Ольга',
      bossSecondName: 'Николаевна'
    },
    {
      href: '#40',
      title: 'Выход',
      tip: 'Выход',
      id: '31',
      d: 'm 1212.6908,693.78947 h 63.2097 l 0.2475,44.31908 h -14.208 l 0.2475,0 -44.5559,0.24754 v -0 h -5.9408 z',
      active: false,
      bossPhoto: '../img/officesBoss/exit.svg',
      bossPosition: 'Выход'
    },
  ],
  activeOffice: null, // Индекс офиса
  sixFloorBossData: [
    {
      id: 0,
      name: 'Иванов Андрей Борисович',
      position: 'Генеральный директор',
      image: 'http://192.168.10.185:8080/img/officesBoss/Ivanov.jpg',
      officeNumber: 401
    },
    {
      id: 1,
      name: 'Таланова Анна Александровна',
      position: 'Начальник юридического управления',
      image: 'http://192.168.10.185:8080/img/officesBoss/Talanova.jpg',
      officeNumber: 402
    },
    {
      id: 2,
      name: 'Егорова Надежда Александровна',
      position: 'Начальник управления по работе с персоналом',
      image: 'http://192.168.10.185:8080/img/officesBoss/Egorova.jpg',
      officeNumber: 403
    },

    {
      id: 3,
      name: 'Романова Екатерина Юрьевна',
      position: 'Начальник отдела сопровождения процедур банкротства физ. лиц',
      image: 'http://192.168.10.185:8080/img/officesBoss/Romanova.jpg',
      officeNumber: 404
    },
    {
      id: 4,
      name: '',
      position: 'Запасной выход',
      image: 'http://192.168.10.185:8080/img/officesBoss/emergensyExit.svg',
      officeNumber: null
    },
    {
      id: 5,
      name: '',
      position: 'Женский туалет',
      image: 'http://192.168.10.185:8080/img/officesBoss/ladies.svg',
      officeNumber: null
    },
    {
      id: 6,
      name: 'Зин Инна Вячеславовна',
      position: 'Начальник управления судебным взысканием',
      image: 'http://192.168.10.185:8080/img/officesBoss/Zin-min.jpg',
      officeNumber: 405
    },
    {
      id: 7,
      name: 'Смирнов Константин Валерьевич',
      position: 'Начальник департамента выездного взыскания и исполнительного производства',
      image: 'http://192.168.10.185:8080/img/officesBoss/Smirnov-min.jpg',
      officeNumber: 406
    },
    {
      id: 8,
      name: 'Полосухин Никита Витальевич',
      position: 'Операционный директор',
      image: 'http://192.168.10.185:8080/img/officesBoss/Polosukhin.jpg',
      officeNumber: 407
    },
    {
      id: 9,
      name: '',
      position: 'Малая переговорная',
      image: 'http://192.168.10.185:8080/img/officesBoss/meetingRoom.svg',
      officeNumber: 408
    },
    {
      id: 10,
      name: 'Коршун Евгений Витальевич',
      position: 'Начальник управления судебным взысканием',
      image: 'http://192.168.10.185:8080/img/officesBoss/Corshun.jpg',
      officeNumber: 409
    },
    {
      id: 11,
      name: 'Сибилева Валентина Викторовна',
      position: 'Начальник управления бухгалтерской отчетности',
      image: 'http://192.168.10.185:8080/img/officesBoss/Sibileva.jpg',
      officeNumber: 410
    },
    {
      id: 12,
      name: 'Жукова Лилия Александровна',
      position: 'Начальник финансового управления',
      image: 'http://192.168.10.185:8080/img/officesBoss/ZHykova.jpg',
      officeNumber: 424
    },
    {
      id: 13,
      name: 'Роженцов Максим Николаевич',
      position: 'Начальник управления информационных технологий',
      image: 'http://192.168.10.185:8080/img/officesBoss/Rojencov.jpg',
      officeNumber: 411
    },
    {
      id: 14,
      name: '',
      position: 'Служебное помещение',
      image: 'http://192.168.10.185:8080/img/officesBoss/Staff-Only.svg',
      officeNumber: 412
    },
    {
      id: 15,
      name: 'Сальникова Ольга Олеговна',
      position: 'Начальник департамента аналитики и организации процедур',
      image: 'http://192.168.10.185:8080/img/officesBoss/Salnikova-min.jpg',
      officeNumber: 413
    },
    {
      id: 16,
      name: 'Мокшанова Оксана Васильевна',
      position: 'Начальник Управления развития',
      image: 'http://192.168.10.185:8080/img/officesBoss/Mokshanovaa.jpg',
      officeNumber: 426
    },
    {
      id: 17,
      name: '',
      position: 'Малая переговорная 2',
      image: 'http://192.168.10.185:8080/img/officesBoss/meetingRoom.svg',
      officeNumber: 414
    },
    {
      id: 18,
      name: '',
      position: 'Лифт',
      image: 'http://192.168.10.185:8080/img/officesBoss/elevator.svg',
      officeNumber: null
    },
    {
      id: 19,
      name: '',
      position: 'Мужской туалет',
      image: 'http://192.168.10.185:8080/img/officesBoss/toilet_men.svg',
      officeNumber: null
    },
    {
      id: 20,
      name: '',
      position: 'Запасной выход',
      image: 'http://192.168.10.185:8080/img/officesBoss/emergensyExit.svg',
      officeNumber: null
    },
    {
      id: 21,
      name: '',
      position: 'Столовая',
      image: 'http://192.168.10.185:8080/img/officesBoss/kitchen.svg',
      officeNumber: null
    },
    {
      id: 22,
      name: '',
      position: 'Комната отдыха',
      image: 'http://192.168.10.185:8080/img/officesBoss/relax.svg',
      officeNumber: null
    },
    {
      id: 23,
      name: '',
      position: 'Большая переговорная',
      image: 'http://192.168.10.185:8080/img/officesBoss/meetingRoom.svg',
      officeNumber: 415
    },
    {
      id: 24,
      name: 'Гаазе Дмитрий Юрьевич',
      position: 'Начальник управления экономической безопасности',
      image: 'http://192.168.10.185:8080/img/officesBoss/Gaaze.jpg',
      officeNumber: 416
    },
    {
      id: 25,
      name: '',
      position: 'Типография',
      image: 'http://192.168.10.185:8080/img/officesBoss/typografy.svg',
      officeNumber: 417
    },
    {
      id: 26,
      name: 'Демидов Юрий Геннадьевич',
      position: 'Начальник управления call-центр',
      image: 'http://192.168.10.185:8080/img/officesBoss/Demidov.jpg',
      officeNumber: 418
    },
    {
      id: 27,
      name: 'Иванова Анна Леонидовна',
      position: 'Начальник управления делами',
      image: 'http://192.168.10.185:8080/img/officesBoss/Ivanova.jpg',
      officeNumber: 420
    },
    {
      id: 28,
      name: 'Киселева Ольга Владимировна',
      position: 'Зам. начальника судебного делопроизводства',
      image: 'http://192.168.10.185:8080/img/officesBoss/Kiseleva-min.jpg',
      officeNumber: 421
    },
    {
      id: 29,
      name: 'Гаврилов Евгений Игоревич',
      position: 'Начальник управления судебного взыскания долгов',
      image: 'http://192.168.10.185:8080/img/officesBoss/Gavrilov.jpg',
      officeNumber: 422
    },
    {
      id: 30,
      name: 'Белецкая Ольга Николаевна',
      position: 'Зам. начальника управления судебного взыскания долгов',
      image: 'http://192.168.10.185:8080/img/officesBoss/Beleckaya.jpg',
      officeNumber: 423
    },
    {
      id: 31,
      name: '',
      position: 'Выход',
      image: 'http://192.168.10.185:8080/img/officesBoss/exit.svg',
      officeNumber: null
    }
  ], // Boss info 6 floor
  fourFloorBossData: [
    {
      id: 0,
      name: '',
      position: 'Лифт',
      image: 'http://192.168.10.185:8080/img/officesBoss/elevator.svg',
      officeNumber: null
    },
    {
      id: 1,
      name: '',
      position: 'Женский туалет',
      image: 'http://192.168.10.185:8080/img/officesBoss/ladies.svg',
      officeNumber: null
    },
    {
      id: 2,
      name: '',
      position: 'Мужской туалет',
      image: 'http://192.168.10.185:8080/img/officesBoss/toilet_men.svg',
      officeNumber: null
    },
    {
      id: 3,
      name: '',
      position: 'Запасный выход',
      image: 'http://192.168.10.185:8080/img/officesBoss/emergensyExit.svg',
      officeNumber: null
    },
    {
      id: 4,
      name: 'Пермяков Сергей Вячеславович',
      position: 'Начальник отделв внедрения и сопровождения автоматизированных систем',
      image: 'http://192.168.10.185:8080/img/officesBoss/Permyakov-minS.jpg',
      officeNumber: 427
    },
    {
      id: 5,
      name: 'Пермякова Мария Александровна',
      position: 'Начальник отделв сопровождения и обработки кредитных портфелей',
      image: 'http://192.168.10.185:8080/img/officesBoss/Permyakova-minS.jpg',
      officeNumber: 428
    },
    {
      id: 6,
      name: 'Васюнина Мария Витальевна',
      position: 'Начальник управления дистанционного взыскания и исполнительного производства',
      image: 'http://192.168.10.185:8080/img/officesBoss/Vasunina-minS.jpg',
      officeNumber: 429
    },
    {
      id: 7,
      name: 'Васюнина Мария Витальевна',
      position: 'Начальник управления дистанционного взыскания и исполнительного производства',
      image: 'http://192.168.10.185:8080/img/officesBoss/Vasunina-minS.jpg',
      officeNumber: 430
    },
    {
      id: 8,
      name: 'Васюнина Мария Витальевна',
      position: 'Начальник управления дистанционного взыскания и исполнительного производства',
      image: 'http://192.168.10.185:8080/img/officesBoss/Vasunina-minS.jpg',
      officeNumber: 431
    },
    {
      id: 9,
      name: '',
      position: 'Женский туалет',
      image: 'http://192.168.10.185:8080/img/officesBoss/ladies.svg',
      officeNumber: null
    },
    {
      id: 10,
      name: '',
      position: 'Мужской туалет',
      image: 'http://192.168.10.185:8080/img/officesBoss/toilet_men.svg',
      officeNumber: null
    },
    {
      id: 11,
      name: '',
      position: 'Лифт',
      image: 'http://192.168.10.185:8080/img/officesBoss/elevator.svg',
      officeNumber: null
    },
    {
      id: 12,
      name: '',
      position: 'Запасный выход',
      image: 'http://192.168.10.185:8080/img/officesBoss/emergensyExit.svg',
      officeNumber: null
    }
  ] // Boss info 4 floor
}

const officeMap = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_OFFICE:
      return {
        ...state,
        activeOffice: action.payload
      }

    default:
      return state
  }
}

export default officeMap;
