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
    console.log('TOP Collectors');

    // return axios.get('https://rssexport.rbc.ru/rbcnews/news/30/full.rss').catch((error) => error);
  }
}

// Новости
export const newsAPI = {
  fetchWorldNews() {
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
  getNewsById(newsId) {
    console.log('Fetch news');
    return newsId;
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
