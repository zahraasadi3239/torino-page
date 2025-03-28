"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./ImageSlider.module.css";
import { useState } from "react";
import { sp } from "@/core/utils/convert";
function ImageSlider() {
  const images = [
    "/images/R.png",
    "/images/OIP.png",
    "/images/car.png",
    "/images/airPlan.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className={styles.container}>
      <Image 
      
        src={images[currentIndex]}
        alt="image"
        className={styles.side_image}
        width={389}
        height={479}
      />
      <div className={styles.slider}>
        <button onClick={prevSlide} className={styles.arrow}>
          <Image
            src="/images/Line arrow-right.png"
            width={36}
            height={36}
            alt="rigth"
          />
        </button>
        {/* <div className={styles.pagination}> */}
        <span>
          {sp(currentIndex + 1)}/ {sp(images.length)}
        </span>
        {/* </div> */}
        <button onClick={nextSlide} className={styles.arrow}>
          <Image
            src="/images/Line arrow-left.png"
            width={36}
            height={36}
            alt="left"
          />
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;
