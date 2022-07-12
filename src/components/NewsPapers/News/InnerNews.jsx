import React, { useEffect } from "react";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";

import { NewsCell } from "@common";
// import Pagination from "../Pagination/Pagination";

const InnerNews = ({ innerNewsItems }) => {
  Swiper.use([Navigation, Pagination]);

  useEffect(() => {
    new Swiper(".pagin__newsBox", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagintaion",
        clickable: true,
        dynamicBullets: true,
      },
      simulateTouch: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      centerdSlides: true,
      watchOverflow: true,
      speed: 800,
      spaceBetween: 50,
      rebuildOnUpdate: true,
    });
  }, []);

  return (
    <div className="pagin">
      <div className="swiper-container pagin__newsBox">
        <div className="swiper-wrapper">
          {innerNewsItems &&
            innerNewsItems.map((item) => {
              return (
                <div key={item._id} className="swiper-slide">
                  <NewsCell
                    newsId={item._id}
                    newsImage={item.newsImg}
                    newsHeader={item.newsHeader}
                    newsTitle={item.newsContent}
                    innerNews
                  />
                </div>
              );
            })}
        </div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        <div className="swiper-pagintaion"></div>
      </div>

      {/* <div className="pagin__pagination">
        <Pagination
          key={pages.index}
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          onPaginate={paginate}
        />
      </div> */}
    </div>
  );
  // const [currentPage, setCurrentPage] = useState(1); // Test
  // const [innerNewsPageSize] = useState(1);
  // const [innerNewsPerPage] = useState(1);

  // // Pgination
  // const pagesCount = Math.ceil(innerNewsItems.length / innerNewsPageSize); // Buttons count
  // const lastInnerNews = currentPage * innerNewsPerPage;
  // const firstOnnerNews = lastInnerNews - innerNewsPerPage;
  // const currentInnerNews = innerNewsItems.slice(firstOnnerNews, lastInnerNews);
  // const pages = []; // Pages

  // if (innerNewsItems == 0) {
  //   return (
  //     <div className="loading">
  //       Loading...
  //     </div>
  //   )
  // }

  // for (let i = 1; i <= pagesCount; i++) {
  //   pages.push(i);
  // }

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // return (
  //   <div className="pagin">
  //     <div className="pagin__newsBox">
  //       {
  //         currentInnerNews && currentInnerNews.map((item) => {
  //           return (
  //             <NewsCell
  //               key={item.id}
  //               newsId={item.id}
  //               newsImage={item.newsImg}
  //               newsHeader={item.newsHeader}
  //               newsTitle={item.newsContent}
  //               innerNews
  //             />
  //           )
  //         })
  //       }
  //     </div>

  //     <div className="pagin__pagination">
  //       <Pagination
  //         key={pages.index}
  //         pages={pages}
  //         currentPage={currentPage}
  //         setCurrentPage={setCurrentPage}
  //         onPaginate={paginate}
  //       />
  //     </div>
  //   </div>
  // )
};

export default InnerNews;
