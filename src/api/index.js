import axios from 'axios';

import {
  INSTANCE_URL,
  GET_LEADERS,
  GET_WORLD_NEWS
} from '@redux/constants';

const instance = axios.create({
  timeout: 3000,
  baseURL: INSTANCE_URL
});

// Счетчик
export const counterAPI = {
  sendCounterNumber(pageName) {
    console.log(pageName)
    // return instance.post(`http://192.168.10.185/Server2.0/metrics.php`, pageName)
    //   .catch(error => error)
  }
}

// Лидеры по сборам
export const topCollectorsAPI = {
  getLeadersInfo() {
    return instance.get('leaders').catch(err => `Fetch GET request to LEADERINFO is faild! ${err}`);
  }
}

// Новости
export const newsAPI = {
  getWorldNews() {
    return 'In progress...'

    // var url = 'https://newsapi.org/v2/top-headlines?' +
    //   'country=ru&' +
    //   'apiKey=313b6f89411d4807b019cfdaba9b219b';

    // var req = new Request(url);

    // fetch(req)
    //   .then(function (response) {
    //     return response.json();
    //   })
  },
  getInnerNews() {
    return instance.get('news').catch(err => `Fetch GET request to INNERNEWS is faild! ${err}`)
  },
  getNewsById(newsId) {
    return instance.get(`news/${newsId}`).catch(err =>  `Fetch GET request to NEWSBYID is faild! ${err}`);
  }
}

export const announcementsApi = {
  fetchAnnouncements() {
    console.log('Fetch announcements');
    return 'In progress...'
  },
  getAnnouncementById(id) {
    console.log('Fetch announcement by id', id);
    return id
  },
  setAuth(userData) {
    console.log('Fetching user auth', userData);

    return true;
  }
}

export const newUsersApi = {
  getNewWorkers() {
    return instance.get('newWorker').catch(err => `Fetch new workers is failed ${err}`);
  }
}

export const birthdaysAPI = {
  getBirthdays() {
    return instance.get('greetingPhoto').catch(err => `Fetch birthdays is failed. ${err}`)
  }
}

export const galeryAPI = {
  getVideoAlbums() {
    const videos = [
      {
        id: 'vid123def',
        ulbumCover: 'http://192.168.10.185:8080/img/Test/videos/8march/cover.jpg',
        albumName: '8 марта 20218 марта',
        albumYear: '2021'
      },
      {
        id: 'vid234def',
        ulbumCover: 'http://192.168.10.185:8080/img/Test/filbertFort.jpg',
        albumName: 'Форт Филберт',
        albumYear: '2019'
      },
      {
        id: 'vid345def',
        ulbumCover: 'http://192.168.10.185:8080/img/Test/NY2020.jpg',
        albumName: 'Новогодний корпоратив',
        albumYear: '2020'
      },
      {
        id: 'vid456def',
        ulbumCover: 'http://192.168.10.185:8080/img/Test/FamilyDay2019.jpg',
        albumName: 'День семьи',
        albumYear: '2019'
      },
    ];

    return videos;
  },
  getAlbumById(id) {
    const albums = [
      {
        id: '123def',
        photos: [
          'http://192.168.10.185:8080/img/Test/8marchAlbum/5J4A1407.jpg',
          'http://192.168.10.185:8080/img/Test/8marchAlbum/5J4A1512.jpg',
          'http://192.168.10.185:8080/img/Test/8marchAlbum/5J4A2277.jpg',
          'http://192.168.10.185:8080/img/Test/8marchAlbum/5J4A2300.jpg',
          'http://192.168.10.185:8080/img/Test/8marchAlbum/5J4A2435.jpg',
        ],
        albumName: '8 марта',
        albumYear: '2021'
      },
      {
        id: '234def',
        photos: [
          'http://192.168.10.185:8080/img/Test/fortFilbertAlbum/SLAV3602.jpg',
          'http://192.168.10.185:8080/img/Test/fortFilbertAlbum/SLAV3705.jpg',
          'http://192.168.10.185:8080/img/Test/fortFilbertAlbum/SLAV3820.jpg',
          'http://192.168.10.185:8080/img/Test/fortFilbertAlbum/SLAV3849.jpg',
          'http://192.168.10.185:8080/img/Test/fortFilbertAlbum/SLAV3991.jpg',
        ],
        albumName: 'Форт Филберт',
        albumYear: '2019'
      },
      {
        id: '345def',
        photos: [
          'http://192.168.10.185:8080/img/Test/NY/5J4A2773.jpg',
          'http://192.168.10.185:8080/img/Test/NY/5J4A3037.jpg',
          'http://192.168.10.185:8080/img/Test/NY/5J4A3453.jpg',
          'http://192.168.10.185:8080/img/Test/NY/5J4A4021.jpg',
          'http://192.168.10.185:8080/img/Test/NY/5J4A4221.jpg',
        ],
        albumName: 'Новогодний корпоратив',
        albumYear: '2020'
      },
      {
        id: '456def',
        photos: [
          'http://192.168.10.185:8080/img/Test/family/5J4A5178.jpg',
          'http://192.168.10.185:8080/img/Test/family/5J4A5335.jpg',
          'http://192.168.10.185:8080/img/Test/family/5J4A5707.jpg',
          'http://192.168.10.185:8080/img/Test/family/5J4A5749.jpg',
          'http://192.168.10.185:8080/img/Test/family/5J4A6262.jpg',
          'http://192.168.10.185:8080/img/Test/family/5J4A5382.jpg',
        ],
        albumName: 'День семьи',
        albumYear: '2019'
      },
    ];

    const findAlbum = (id) => {
      return albums.find(item => item.id == id);
    }

    return findAlbum(id);
  },
  getVideoAlbumById(id) {
    const videoAlbum = [
      {
        id: 'vid123def',
        videos: [
          {
            id: 'vid123vef',
            cover: 'http://192.168.10.185:8080/img/Test/videos/8march/cover.jpg',
            movie: 'http://192.168.10.185:8080/img/Test/videos/8march/Филберт 5 марта 2022_full.mp4'
          },
          {
            id: 'vid234vef',
            cover: 'http://192.168.10.185:8080/img/Test/8marchAlbum/5J4A1512.jpg',
            movie: 'http://192.168.10.185:8080/img/Test/videos/8march/DSC_0101.MOV'
          },
          {
            id: 'vid345vef',
            cover: 'http://192.168.10.185:8080/img/Test/8marchAlbum/5J4A2277.jpg',
            movie: 'http://192.168.10.185:8080/img/Test/videos/8march/DSC_0102.MOV'
          },
          {
            id: 'vid456vef',
            cover: 'http://192.168.10.185:8080/img/Test/8marchAlbum/5J4A2300.jpg',
            movie: 'http://192.168.10.185:8080/img/Test/videos/8march/Филберт 5 марта 2022_full.mp4'
          },
          {
            id: 'vid567vef',
            cover: 'http://192.168.10.185:8080/img/Test/8marchAlbum/5J4A2435.jpg',
            movie: 'http://192.168.10.185:8080/img/Test/videos/8march/Филберт 5 марта 2022_full.mp4'
          }
        ],
        albumName: '8 марта',
        albumYear: '2021'
      },
      {
        id: 'vid234def',
        videos: [
          'http://192.168.10.185:8080/img/Test/8marchAlbum/5J4A1407.jpg',
          'http://192.168.10.185:8080/img/Test/8marchAlbum/5J4A1512.jpg',
          'http://192.168.10.185:8080/img/Test/8marchAlbum/5J4A2277.jpg',
          'http://192.168.10.185:8080/img/Test/8marchAlbum/5J4A2300.jpg',
          'http://192.168.10.185:8080/img/Test/8marchAlbum/5J4A2435.jpg',
        ],
        albumName: 'Форт Филберт',
        albumYear: '2019'
      },
      {
        id: 'vid345def',
        videos: [
          'http://192.168.10.185:8080/img/Test/8marchAlbum/5J4A1407.jpg',
          'http://192.168.10.185:8080/img/Test/8marchAlbum/5J4A1512.jpg',
          'http://192.168.10.185:8080/img/Test/8marchAlbum/5J4A2277.jpg',
          'http://192.168.10.185:8080/img/Test/8marchAlbum/5J4A2300.jpg',
          'http://192.168.10.185:8080/img/Test/8marchAlbum/5J4A2435.jpg',
        ],
        albumName: 'Новогодний корпоратив',
        albumYear: '2020'
      },
      {
        id: 'vid456def',
        videos: [
          'http://192.168.10.185:8080/img/Test/8marchAlbum/5J4A1407.jpg',
          'http://192.168.10.185:8080/img/Test/8marchAlbum/5J4A1512.jpg',
          'http://192.168.10.185:8080/img/Test/8marchAlbum/5J4A2277.jpg',
          'http://192.168.10.185:8080/img/Test/8marchAlbum/5J4A2300.jpg',
          'http://192.168.10.185:8080/img/Test/8marchAlbum/5J4A2435.jpg',
        ],
        albumName: 'День семьи',
        albumYear: '2019'
      },
    ];
    return videoAlbum.find((item) => item.id === id);
  }
}
