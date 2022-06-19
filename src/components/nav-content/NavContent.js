import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../assets/scss/index.scss";
import { Pagination, Navigation } from "swiper";

function NavContent() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="NavContent__wrapper">
        <h1>Khóa học nổi bật</h1>
        <p>
          Khám phá các kỹ năng được tìm kiếm nhiều nhất/hàng đầu trong tuần này
          và bắt đầu việc học của bạn ngay hôm nay
        </p>
        <div className="group__colection">
          <button
            name="all"
            onClick={({ target }) => {
              if (target.name) {
                target.classList.toggle("active");
              }
            }}
            className="colection__button"
          >
            Tất Cả
          </button>
          <button
            name="language"
            onClick={({ target }) => {
              if (target.name) {
                target.classList.toggle("active");
              }
            }}
            className="colection__button"
          >
            Ngoại Ngữ
          </button>
          <button
            name="mindset"
            onClick={({ target }) => {
              if (target.name) {
                target.classList.toggle("active");
              }
            }}
            className="colection__button"
          >
            Tư Duy
          </button>
          <button
            name="reactjs"
            onClick={({ target }) => {
              if (target.name) {
                target.classList.toggle("active");
              }
            }}
            className="colection__button"
          >
            ReactJS
          </button>
          <button
            name="javascript"
            onClick={({ target }) => {
              if (target.name) {
                target.classList.toggle("active");
              }
            }}
            className="colection__button"
          >
            JavaScript
          </button>
        </div>
      </div>
      <GroupGrid />
    </>
  );
}

const GroupGrid = () => {
  const [slidesPerView, setSlidesPerView] = useState(6);
  useEffect(() => {
    const resize = (event) => {
      let newWidth = window.innerWidth;
      if (newWidth < 1001) {
        setSlidesPerView(4);
      }
      if (newWidth > 1000) {
        setSlidesPerView(6);
      }
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={false}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="course__grid"
      >
        <SwiperSlide>
          <div className="slideWrapper">
            <div className="slideImage">
              <img src="https://picsum.photos/seed/1233/200/300" />
            </div>
            <div className="slideContent">
              <div className="wrapper__inner">
                <div className="course__type">Lập trình</div>
                <div className="course__name">Học Javascript cơ bản</div>
                <div className="course__description">lorem(30)</div>
                <div className="course__author"></div>
                <div className="course__price"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideWrapper">
            <div className="slideImage">
              <img src="https://picsum.photos/seed/12331/200/300" />
            </div>
            <div className="slideContent">
              <h1>Content</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideWrapper">
            <div className="slideImage">
              <img src="https://picsum.photos/seed/12332/200/300" />
            </div>
            <div className="slideContent">
              <h1>Content</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideWrapper">
            <div className="slideImage">
              <img src="https://picsum.photos/seed/12333/200/300" />
            </div>
            <div className="slideContent">
              <h1>Content</h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slideWrapper">
            <div className="slideImage">
              <img src="https://picsum.photos/seed/12s334/200/300" />
            </div>
            <div className="slideContent">
              <h1>Content</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideWrapper">
            <div className="slideImage">
              <img src="https://picsum.photos/seed/12c334/200/300" />
            </div>
            <div className="slideContent">
              <h1>Content</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideWrapper">
            <div className="slideImage">
              <img src="https://picsum.photos/seed/1a2334/200/300" />
            </div>
            <div className="slideContent">
              <h1>Content</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default NavContent;
