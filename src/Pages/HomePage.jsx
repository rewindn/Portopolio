/* eslint-disable react/jsx-no-duplicate-props */
import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import { galleryTerbaru, dataSwiper } from "../data/index.js";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const HomePage = () => {
  let Navigate = useNavigate();
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center pt-lg-5">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6" className="animate__animated animate__fadeInUp">
              <h1 className="mb-2">
                Welcome To My <br /> Blog And Gallery
              </h1>
              <p className="mb-3">
                Tempat Menyimpan Blog dan Hasil karya yang menarik.
              </p>
              <button
                className="purple btn btn-success btn-lg rounded-1 me-2 mb-xs-0 mb-2"
                onClick={() => {
                  Navigate("/blog");
                }}
              >
                Lihat Blog
              </button>
              <button
                className="purple btn btn-success btn-lg rounded-1 mb-xs-0 mb-2"
                onClick={() => {
                  Navigate("/galeri");
                }}
              >
                Lihat Gallery
              </button>
            </Col>
            <Col>
              <img
                src={HeroImage}
                alt="hero-img"
                className="pt-lg-0 pt-5 animate__animated animate__fadeInUp animate__delay-1s"
              />
            </Col>
          </Row>
        </Container>
      </header>
      <div className=" gallery w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">My Gallery</h1>
              <p className="text-center">
                Temukan hal menarik di dalam galeri ku.
              </p>
            </Col>
          </Row>
          <Row>
            {galleryTerbaru.map(galeri => {
              return (
                <Col
                  key={galeri.ld}
                  className="shadow rounded-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img src={galeri.image} alt="" className="mb-4 rounded" />
                  
                  <div className="star mb-4 rounded px-3">
                    <i className={galeri.star1}></i>
                    <i className={galeri.star2}></i>
                    <i className={galeri.star3}></i>
                    <i className={galeri.star4}></i>
                    <i className={galeri.star5}></i>
                  </div>
                  <div
                    className="ket d-flex align-items-center px-3 pb-3"
                    
                  >
                    
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="text-center">
              <button
                className="btn btn-success rounded-5 btn-lg "
                onClick={() => {
                  Navigate("/galeri");
                }}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Lihat Lebih Lanjut
                <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="blog py-5" data-aos="fade-up" data-aos-duration="1000">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center ">My Blog</h1>
              <p className="text-center mb-5 ">
                Temukan topik menarik di dalam blog ku
              </p>
            </Col>
          </Row>
          <Row
            onClick={() => {
              Navigate("/blog");
            }}
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map(data => {
                return (
                  <SwiperSlide key={data.id} className="shadow rounded-4">
                    <div className="desc">
                      <h4 className="fw-bold my-3">{data.judul}</h4>
                      <p> {data.desc} </p>
                    </div>
                    <div className="people">
                      <img src={data.image} alt="" />
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0 fw-bold">
                          {new Date().getFullYear()}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
