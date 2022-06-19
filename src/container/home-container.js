import React from "react";
import { NavContent, NavHeader } from "../components";
import styled from "styled-components/macro";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import carousel from "../assets/images/carousel.jpg";
import carousel1 from "../assets/images/carousel.png";
import carousel2 from "../assets/images/carousel1.png";
function HomeContainer() {
  return (
    <>
      <NavHeader />
      <Container>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={carousel} alt="..." />
          </SwiperSlide>
          <SwiperSlide>
            <img src={carousel1} alt="..." />
          </SwiperSlide>
          <SwiperSlide>
            <img src={carousel2} alt="..." />
          </SwiperSlide>
        </Swiper>
        <NavContent />
        {/* <Footer />  Ông làm phần footer hộ t với*/}
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 0 5%;
  padding-top: 75px;

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  background-color: #fafafa;
`;

export default HomeContainer;
