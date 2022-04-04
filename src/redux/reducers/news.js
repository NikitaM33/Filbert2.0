import {
  SET_IS_MODAL,
  SET_INNER_NEWS_BY_ID,
  SET_WORLD_NEWS_BY_ID,
  SET_COLLECTION_NEWS_BY_ID
} from '../constants';

const initialState = {
  innerNewsItems: [
    {
      id: 1,
      source: {
        newsImage: 'http://192.168.10.185:8080/img/Test/itGirl.jpg',
        newsHeader: '1 Nice to meet you: how we came up with our welcome kit for new employees',
        newsTitle: 'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did. Virtually every company will face unexpected challenges from COVID-19. Even by the ...'
      },
      newsImage: 'http://192.168.10.185:8080/img/Test/itGirl.jpg',
      newsHeader: '1 Nice to meet you: how we came up with our welcome kit for new employees',
      newsArticle: [
        '11The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did.Virtually every company will face unexpected challenges from COVID-19. Even by the most optimistic estimates, a successful vaccine for the virus is not expected to appear until next ...'
      ]
    },
    {
      id: 2,
      source: {
        newsImage: 'http://192.168.10.185:8080/img/Test/itGirl.jpg',
        newsHeader: '2 Nice to meet you: how we came up with our welcome kit for new employees',
        newsTitle: 'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did. Virtually every company will face unexpected challenges from COVID-19. Even by the ...'
      },
      newsImage: 'http://192.168.10.185:8080/img/Test/itGirl.jpg',
      newsHeader: '2 Nice to meet you: how we came up with our welcome kit for new employees',
      newsArticle: [
        '22The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did.Virtually every company will face unexpected challenges from COVID-19. Even by the most optimistic estimates, a successful vaccine for the virus is not expected to appear until next ...'
      ]
    },
    {
      id: 3,
      source: {
        newsImage: 'http://192.168.10.185:8080/img/Test/testNews.jpg',
        newsHeader: '3 Nice to meet you: how we came up with our welcome kit for new employees',
        newsTitle: 'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did. Virtually every company will face unexpected challenges from COVID-19. Even by the ...'
      },
      newsImage: 'http://192.168.10.185:8080/img/Test/testNews.jpg',
      newsHeader: '3 Nice to meet you: how we came up with our welcome kit for new employees',
      newsArticle: [
        '33The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. \n While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did.Virtually every company will face unexpected challenges from COVID-19. Even by the most optimistic estimates, a successful vaccine for the virus is not expected to appear until next The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did.Virtually every company will face unexpected challenges from COVID-19. Even by the most optimistic estimates, a successful vaccine for the virus is not expected to appear until next The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did.Virtually every company will face unexpected challenges from COVID-19. Even by the most optimistic estimates, a successful vaccine for the virus is not expected to appear until next'
      ]
    }
  ],
  worldNewsItems: [
    {
      id: 4,
      source: {
        newsImage: 'http://192.168.10.185:8080/img/Test/newspaper.jpg',
        newsHeader: '1 Nice to meet you: how we came up with our welcome kit for new employees',
        newsTitle: 'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did. Virtually every company will face unexpected challenges from COVID-19. Even by the ...'
      },
      newsImage: 'http://192.168.10.185:8080/img/Test/newspaper.jpg',
      newsHeader: 'Nice to meet you: how we came up with our welcome kit for new employees',
      newsArticle: [
        'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did.Virtually every company will face unexpected challenges from COVID-19. Even by the most optimistic estimates, a successful vaccine for the virus is not expected to appear until next ...'
      ]
    },
    {
      id: 5,
      source: {
        newsImage: 'http://192.168.10.185:8080/img/Test/4.jpg',
        newsHeader: '1 Nice to meet you: how we came up with our welcome kit for new employees',
        newsTitle: 'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did. Virtually every company will face unexpected challenges from COVID-19. Even by the ...'
      },
      newsImage: 'http://192.168.10.185:8080/img/Test/4.jpg',
      newsHeader: 'Nice to meet you: how we came up with our welcome kit for new employees',
      newsArticle: [
        'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did.Virtually every company will face unexpected challenges from COVID-19. Even by the most optimistic estimates, a successful vaccine for the virus is not expected to appear until next ...'
      ]
    },
    {
      id: 6,
      source: {
        newsImage: 'http://192.168.10.185:8080/img/Test/paypal.jpg',
        newsHeader: '1 Nice to meet you: how we came up with our welcome kit for new employees',
        newsTitle: 'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did. Virtually every company will face unexpected challenges from COVID-19. Even by the ...'
      },
      newsImage: 'http://192.168.10.185:8080/img/Test/paypal.jpg',
      newsHeader: 'Nice to meet you: how we came up with our welcome kit for new employees',
      newsArticle: [
        'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did.Virtually every company will face unexpected challenges from COVID-19. Even by the most optimistic estimates, a successful vaccine for the virus is not expected to appear until next ...'
      ]
    },
    {
      id: 7,
      source: {
        newsImage: 'http://192.168.10.185:8080/img/Test/conference.jpg',
        newsHeader: '1 Nice to meet you: how we came up with our welcome kit for new employees',
        newsTitle: 'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did. Virtually every company will face unexpected challenges from COVID-19. Even by the ...'
      },
      newsImage: 'http://192.168.10.185:8080/img/Test/conference.jpg',
      newsHeader: 'Nice to meet you: how we came up with our welcome kit for new employees',
      newsArticle: [
        'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did.Virtually every company will face unexpected challenges from COVID-19. Even by the most optimistic estimates, a successful vaccine for the virus is not expected to appear until next ...'
      ]
    },
    {
      id: 8,
      source: {
        newsImage: 'http://192.168.10.185:8080/img/Test/itGirl.jpg',
        newsHeader: '1 Nice to meet you: how we came up with our welcome kit for new employees',
        newsTitle: 'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did. Virtually every company will face unexpected challenges from COVID-19. Even by the ...'
      },
      newsImage: 'http://192.168.10.185:8080/img/Test/itGirl.jpg',
      newsHeader: 'Nice to meet you: how we came up with our welcome kit for new employees',
      newsArticle: [
        'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did.Virtually every company will face unexpected challenges from COVID-19. Even by the most optimistic estimates, a successful vaccine for the virus is not expected to appear until next ...'
      ]
    },
    {
      id: 9,
      source: {
        newsImage: 'http://192.168.10.185:8080/img/Test/laptop.jpg',
        newsHeader: '1 Nice to meet you: how we came up with our welcome kit for new employees',
        newsTitle: 'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did. Virtually every company will face unexpected challenges from COVID-19. Even by the ...'
      },
      newsImage: 'http://192.168.10.185:8080/img/Test/laptop.jpg',
      newsHeader: 'Nice to meet you: how we came up with our welcome kit for new employees',
      newsArticle: [
        'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did.Virtually every company will face unexpected challenges from COVID-19. Even by the most optimistic estimates, a successful vaccine for the virus is not expected to appear until next ...'
      ]
    },
    {
      id: 10,
      source: {
        newsImage: 'http://192.168.10.185:8080/img/Test/8.jpg',
        newsHeader: '1 Nice to meet you: how we came up with our welcome kit for new employees',
        newsTitle: 'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did. Virtually every company will face unexpected challenges from COVID-19. Even by the ...'
      },
      newsImage: 'http://192.168.10.185:8080/img/Test/8.jpg',
      newsHeader: 'Nice to meet you: how we came up with our welcome kit for new employees',
      newsArticle: [
        'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did.Virtually every company will face unexpected challenges from COVID-19. Even by the most optimistic estimates, a successful vaccine for the virus is not expected to appear until next ...'
      ]
    },
    {
      id: 11,
      source: {
        newsImage: 'http://192.168.10.185:8080/img/Test/7.jpg',
        newsHeader: '1 Nice to meet you: how we came up with our welcome kit for new employees',
        newsTitle: 'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did. Virtually every company will face unexpected challenges from COVID-19. Even by the ...'
      },
      newsImage: 'http://192.168.10.185:8080/img/Test/7.jpg',
      newsHeader: 'Nice to meet you: how we came up with our welcome kit for new employees',
      newsArticle: [
        'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did.Virtually every company will face unexpected challenges from COVID-19. Even by the most optimistic estimates, a successful vaccine for the virus is not expected to appear until next ...'
      ]
    },
    {
      id: 12,
      source: {
        newsImage: 'http://192.168.10.185:8080/img/Test/paypal.jpg',
        newsHeader: '1 Nice to meet you: how we came up with our welcome kit for new employees',
        newsTitle: 'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did. Virtually every company will face unexpected challenges from COVID-19. Even by the ...'
      },
      newsImage: 'http://192.168.10.185:8080/img/Test/paypal.jpg',
      newsHeader: 'Nice to meet you: how we came up with our welcome kit for new employees',
      newsArticle: [
        'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did.Virtually every company will face unexpected challenges from COVID-19. Even by the most optimistic estimates, a successful vaccine for the virus is not expected to appear until next ...'
      ]
    },
  ],
  collectionNewsItems: [
    {
      id: 10,
      source: {
        newsImage: 'http://192.168.10.185:8080/img/Test/newspaper.jpg',
        newsHeader: '1 Nice to meet you: how we came up with our welcome kit for new employees',
        newsTitle: 'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done.'
      },
      newsImage: 'http://192.168.10.185:8080/img/Test/conference.jpg',
      newsHeader: 'Nice to meet you: how we came up with our welcome kit for new employees',
      newsArticle: [
        'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did.Virtually every company will face unexpected challenges from COVID-19. Even by the most optimistic estimates, a successful vaccine for the virus is not expected to appear until next ...'
      ]
    },
    {
      id: 11,
      source: {
        newsImage: 'http://192.168.10.185:8080/img/Test/newspaper.jpg',
        newsHeader: '1 Nice to meet you: how we came up with our welcome kit for new employees',
        newsTitle: 'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done.'
      },
      newsImage: 'http://192.168.10.185:8080/img/Test/laptop.jpg',
      newsHeader: 'Nice to meet you: how we came up with our welcome kit for new employees',
      newsArticle: [
        'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did.Virtually every company will face unexpected challenges from COVID-19. Even by the most optimistic estimates, a successful vaccine for the virus is not expected to appear until next ...'
      ]
    },
    {
      id: 12,
      source: {
        newsImage: 'http://192.168.10.185:8080/img/Test/newspaper.jpg',
        newsHeader: '1 Nice to meet you: how we came up with our welcome kit for new employees',
        newsTitle: 'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done.'
      },
      newsImage: 'http://192.168.10.185:8080/img/Test/newspaper.jpg',
      newsHeader: 'Nice to meet you: how we came up with our welcome kit for new employees',
      newsArticle: [
        'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did.Virtually every company will face unexpected challenges from COVID-19. Even by the most optimistic estimates, a successful vaccine for the virus is not expected to appear until next ...'
      ]
    },
    {
      id: 13,
      source: {
        newsImage: 'http://192.168.10.185:8080/img/Test/newspaper.jpg',
        newsHeader: '1 Nice to meet you: how we came up with our welcome kit for new employees',
        newsTitle: 'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done.'
      },
      newsImage: 'http://192.168.10.185:8080/img/Test/newspaper.jpg',
      newsHeader: 'Nice to meet you: how we came up with our welcome kit for new employees',
      newsArticle: [
        'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did.Virtually every company will face unexpected challenges from COVID-19. Even by the most optimistic estimates, a successful vaccine for the virus is not expected to appear until next ...'
      ]
    },
    {
      id: 14,
      source: {
        newsImage: 'http://192.168.10.185:8080/img/Test/newspaper.jpg',
        newsHeader: '1 Nice to meet you: how we came up with our welcome kit for new employees',
        newsTitle: 'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done.'
      },
      newsImage: 'http://192.168.10.185:8080/img/Test/newspaper.jpg',
      newsHeader: 'Nice to meet you: how we came up with our welcome kit for new employees',
      newsArticle: [
        'The number of companies who are encouraging their employees to work from home grows with the number of the infected: a recent survey supported that 46% of organizations started implementing remote work in March in response to the COVID-19 epidemic. This includes large tech companies such as Amazon, Apple, Google, Twitter and Airbnb, who employ hundreds of thousands of employees globally. While having employees work from home may sound like an obvious choice for businesses, for many this is easier said than done. According to the US Bureau of Labor Statistics, as recently as two years ago, only 29% of Americans held positions where they could work from home, and even less (24%) actually did.Virtually every company will face unexpected challenges from COVID-19. Even by the most optimistic estimates, a successful vaccine for the virus is not expected to appear until next ...'
      ]
    },
  ],
  currentPage: 1,
  isModalOpen: false,
  newsById: null
};

const news = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_MODAL:
      return {
        ...state,
        isModalOpen: action.payload
      }

    case SET_INNER_NEWS_BY_ID:
      return {
        ...state,
        newsById: state.innerNewsItems.filter(item => item.id === action.payload)
      }
    case SET_WORLD_NEWS_BY_ID:
      return {
        ...state,
        newsById: state.worldNewsItems.filter(item => item.id === action.payload)
      }
    case SET_COLLECTION_NEWS_BY_ID:
      return {
        ...state,
        newsById: state.collectionNewsItems.filter(item => item.id === action.payload)
      }

    default:
      return state
  }
}

export default news;
