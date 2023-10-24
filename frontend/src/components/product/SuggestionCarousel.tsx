import { GetProductsQuery } from "./operators/__generated__/Products.query";
import { SERVER_ADDRESS } from "../../utils/constants";
import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface SuggestionCarouselProps {
  productData: GetProductsQuery;
  currentId: string;
}

export default function SuggestionCarousel({
  productData,
  currentId,
}: SuggestionCarouselProps) {
  const validSuggestions = useMemo(() => {
    return productData?.products?.edges.filter(
      (product) => product?.node?.id !== currentId
    );
  }, [currentId, productData]);

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

  return (
    <>
      <p className="flex w-full my-6 font-bold text-xl">YOU MAY LIKE...</p>
      <StyledSwiper
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation]}
        slidesPerView={2}
      >
        <>
          {validSuggestions?.map((product, index) => (
            <>
              {product && product.node && product.node.images && (
                <SwiperSlide className="px-3">
                  <Link to={`/products/${product.node.id}`}>
                    <img
                      src={`http://${SERVER_ADDRESS}:8000/${product?.node?.images[0]?.image}`}
                      alt={`Image you may also like`}
                      className="rounded-lg overflow-hidden"
                    />
                    <p className="font-secondary font-semibold">
                      {product?.node?.title}
                    </p>
                    <p className="font-secondary text-blue-gray">{`$${product?.node?.price.toFixed(
                      2
                    )}`}</p>
                  </Link>
                </SwiperSlide>
              )}
            </>
          ))}
        </>
      </StyledSwiper>
    </>
  );
}
