import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "./css/thumbswiper.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import price from "../assets/images/price.svg";
import expert from "../assets/images/expert.svg";
import facility from "../assets/images/facility.svg";
import order from "../assets/images/order.svg";
import photos from "../assets/images/photos.svg";
import shield from "../assets/images/shield.svg";

function ThumbsSwiper() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const data = [
    {
      title: "Harga terjangkau",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      icon: price,
    },
    {
      title: "Profesional",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      icon: expert,
    },
    {
      title: "Fasilitas terbaik",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      icon: facility,
    },
    {
      title: "Booking cepat",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      icon: order,
    },
    {
      title: "Dokumentasi",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      icon: photos,
    },
    {
      title: "Asuransi",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      icon: shield,
    },
  ];

  const settings1 = {
    arrows: false,
  };

  const settings2 = {
    slidesToShow: 6,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
  };

  return (
    <div className="thumbs text-white">
      <Slider
        {...settings2}
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        className="cursor-pointer mb-3 pl-4"
      >
        {data.map((item, index) => (
          <div key={index}>
            <img src={item.icon} alt={item.title} className="w-10" />
          </div>
        ))}
      </Slider>
      <Slider
        {...settings1}
        asNavFor={nav2}
        ref={(slider) => (sliderRef1 = slider)}
      >
        {data.map((item, index) => (
          <div key={index} className="px-2">
            <div className="bg-[#FFAA00] bg-opacity-50 rounded-md p-6 border-l-4 border-[#FFAA00] ">
              <div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ThumbsSwiper;
