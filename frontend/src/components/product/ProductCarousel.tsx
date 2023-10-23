import React, { useState } from "react";
import { ImageType } from "../../utils/__generated__/graphqlTypes";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import { isClickableInput } from "@testing-library/user-event/dist/utils";

interface ProductCarouselProps {
  images: Omit<ImageType, "product">[];
}

const StyledSwiper = styled(Swiper)`
  & .swiper-button-next,
  .swiper-button-prev {
    color: black;
    position: absolute;
    bottom: 10px;
  }

  .swiper-button-prev {
    left: 10px;
  }

  .swiper-button-next {
    right: 10px; /* Adjust the distance from the right as needed */
  }

  .swiper-pagination-bullet-active {
    background: black;
  }

  z-index: 0;
`;

export default function ProductCarousel({ images }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <StyledSwiper
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      slidesPerView={1}
    >
      {images.map((image, index) => (
        <SwiperSlide key={`key-${image.id}-${index}`}>
          <img
            key={index}
            src={`http://10.0.1.238:8000/${image.image}`}
            alt={`Image ${index + 1}`}
          />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
}
