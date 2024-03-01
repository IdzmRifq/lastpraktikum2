import React from "react";
import "./homepage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="content">
      <h1 className="text">Tentang Kami</h1>
      <p>Humaira adalah tempat yang nyaman untuk menikmati kopi berkualitas tinggi dan makanan ringan lezat. Kami menyajikan berbagai jenis kopi dari biji kopi terbaik di seluruh dunia. Nikmati suasana santai sambil bekerja atau bersantai dengan teman di Humaira.</p>
      <Slider {...settings}>
        <div>
          <img src="/Humaira1.jpeg" alt="" className="slider-image" />
        </div>
        <div>
          <img src="/Humaira2.jpeg" alt="" className="slider-image" />
        </div>
        <div>
          <img src="/Humaira3.jpeg" alt="" className="slider-image" />
        </div>
      </Slider>
      <p>Tertarik dengan kami? Ayo, jadi member kami!</p>
      <a href="./Mitra">
        <button className="button">Daftar Member</button>
      </a>
    </div>
  );
};

export default HomePage;
