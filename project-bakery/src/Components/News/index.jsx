import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "antd";
import _ from "lodash";
import { NavLink } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState({
    data: null,
    isLoading: false,
  });

  useEffect(() => {
    (async () => {
      setNews((prev) => ({ ...prev, isLoading: true }));
      const { data: _data } = await axios.get("http://localhost:3000/news");
      setNews({ data: _data, isLoading: false });
    })();
  }, []);

  //Ham tim vi tri index
  function findIndexInList(list, conditionFn) {
    for (let i = 0; i < list.length; i++) {
      if (conditionFn(list[i])) {
        return i; // Trả về chỉ số của đối tượng thỏa mãn điều kiện
      }
    }
    return -1; // Trả về -1 nếu không tìm thấy đối tượng thỏa mãn điều kiện
  }

  //Event Phân trang
  let itemsPerPage = 3;

  const [currentPage, setCurrentPage] = useState(1);
  const [pageDisplay, setPageDisplay] = useState(false);

  const pages = _.chunk(news.data, itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if(page === 1){
      setPageDisplay(true);
    }
  };

  const paginatedNews = pages[currentPage - 1];

  let render = () => {
    if (paginatedNews != null) {
      return paginatedNews.map((item) => {
        //if (item.product_new) {
        return (
          <div className="news-box" key={item.id}>
            <div className="item-blog">
              <div className="block-thumb">
                <NavLink to={`/news/${item.id}`} title={item.title}>
                  <img src={item.images_news} />
                </NavLink>
              </div>

              <div className="block-content">
                
                  <NavLink to={`/news/${item.id}`} title={item.title} className="line-clamp line-clamp-1">
                  <h3>
                  {item.title}
                </h3>
                  </NavLink>
              </div>
              <div className="line-box"></div>
              <div className="des-news">
                <p>{item.describe}</p>
              </div>
            </div>
          </div>
        );
        //}
      });
    }
  };
  return (
    <>
      <div className="news-list">{render()}</div>

      <div className={`pagination-news ${pageDisplay ? "" : "d-none"}`}>
        {pages.map((_, index) => (
          <Button
            className="index-pagination"
            key={index}
            onClick={() => handlePageChange(index + 1)}
           
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </>
  );
};

export default News;
