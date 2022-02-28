const initialState = {
  foodGalery: [
    'http://192.168.10.185:8080/img/foodCort/bar.jpg',
    'http://192.168.10.185:8080/img/foodCort/coffe.jpg',
    'http://192.168.10.185:8080/img/foodCort/pasta.jpg',
    'http://192.168.10.185:8080/img/foodCort/poky.jpg',
    'http://192.168.10.185:8080/img/foodCort/cookie.jpg',
  ],
  foodText: [
    {
      h3Header: 'Кофейня',
      caffeName: 'Bazar',
      h2Header: 'Вкусно и уютно',
      subText: 'Уютная кофейня с современной музыкой и креативным персоналом',
      mainText: 'Кофейня для любителей хорошего кофе и открытой кухни. Вы можете пообедать в непринужденной обстановке, обсудить с коллегами новости за чашечкой ароматного авторского капучино. Современную атмосферу приятно дополняет аромат свежеприготовленной пищи.'
    },
    {
      h3Header: 'Столовая',
      caffeName: 'Moroshka',
      h2Header: 'Вкусно по домашнему',
      subText: 'Уютная атмосфера. Просторный зал с двумя этажами',
      mainText: 'Столовая, расположенная на первом этаже БЦ «Терминал». Быстро и вкусно пообедать вы сможете, посетив столовую - бистро «Морошка». Уютная деловая атмосфера и вкусная кухня, едва ли смогут оставить кого-то равнодушными. Помимо еды вам предложат выпить горячий кофе, согреться кружечкой чая, или освежиться сладким напитком.'
    }
  ]
}

const foodCort = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default foodCort;
