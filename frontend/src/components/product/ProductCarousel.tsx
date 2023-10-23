import React, { useState } from "react";
import { ImageType } from "../../utils/__generated__/graphqlTypes";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface ProductCarouselProps {
  images: Omit<ImageType, "product">[];
}

export default function ProductCarousel({ images }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  //   const handlers = useSwipeable({
  //     onSwipedLeft: () => handleSwipeRight(),
  //     onSwipedRight: () => handleSwipeLeft(),
  //   });

  //   const handleSwipeLeft = () => {
  //     if (currentIndex > 0) {
  //       setCurrentIndex(currentIndex - 1);
  //     }
  //   };

  //   const handleSwipeRight = () => {
  //     if (currentIndex < images.length - 1) {
  //       setCurrentIndex(currentIndex + 1);
  //     }
  //   };

  return (
    <div className="image-carousel">
      <div className="carousel-container">
        <Swiper navigation modules={[Navigation]} slidesPerView={1}>
          {images.map((image, index) => (
            <SwiperSlide key={`key-${image.id}-${index}`}>
              <img
                key={index}
                src={`http://localhost:8000/${image.image}`}
                alt={`Image ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="dot-indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      {/* <button
        className="carousel-control left"
        onClick={handleSwipeLeft}
        disabled={currentIndex === 0}
      >
        &lt;
      </button>
      <button
        className="carousel-control right"
        onClick={handleSwipeRight}
        disabled={currentIndex === images.length - 1}
      >
        &gt;
      </button> */}
    </div>
  );
}
