import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ProductByIdDocument } from "./operators/__generated__/ProductById.query";
import { useState } from "react";
import SizeRadioButton from "./SizeRadioButton";
import QuantitySelector from "./QuantitySelector";
import { Size, DropdownValue } from "../../utils/types/types";
import InfoDropdown from "./InfoDropdown";
import ShippingInfo from "./ShippingInfo";
import SizeInfo from "./SizeInfo";
import {
  PlusCircleOutlined,
  BackwardOutlined,
  MessageOutlined,
  CreditCardOutlined,
  UpOutlined,
} from "@ant-design/icons";

export default function ProductPage() {
  const { productId = "" } = useParams();

  const [selectedSize, setSelectedSize] = useState<Size>("XS");
  const [quantity, setQuantity] = useState(1);
  const [dropdown, setDropdown] = useState<DropdownValue>(undefined);

  const topOfPageRef = useRef<HTMLHeadingElement | null>(null);

  const handleSizeChange = (size: Size) => {
    setSelectedSize(size);
  };

  const handleDropdownChange = (value: DropdownValue) => {
    if (value == dropdown) {
      setDropdown(undefined);
    } else {
      setDropdown(value);
    }
  };

  const scrollToTop = () => {
    if (topOfPageRef.current) {
      topOfPageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { loading, data, error } = useQuery(ProductByIdDocument, {
    variables: { productId },
  });

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    console.error("GraphQL error:", error);
    return <div>Error occurred while fetching data.</div>;
  } else if (!data) {
    return <div>No data found.</div>;
  } else if (!data.product) {
    return <div>No product associated with that id</div>;
  }

  return (
    <div ref={topOfPageRef}>
      {data.product.images && (
        <>
          <img
            src={`http://localhost:8000/${data.product.images[0].image}`}
            alt={`${data.product.title} image 1`}
          />
        </>
      )}
      <div className="px-5 pt-7 pb-3">
        <div className="flex items-center justify-between py-2">
          <h2 className="font-bold text-xl">{data.product.title}</h2>
          <span className="font-secondary text-blue-gray">{`$${data.product.price.toFixed(
            2
          )}`}</span>
        </div>
        <div className="mb-4">
          <span className="font-roboto text-sm">Size</span>
          <div className="flex items-center justify-between">
            <SizeRadioButton
              size="XS"
              selected={selectedSize}
              onClick={handleSizeChange}
            />
            <SizeRadioButton
              size="S"
              selected={selectedSize}
              onClick={handleSizeChange}
            />
            <SizeRadioButton
              size="M"
              selected={selectedSize}
              onClick={handleSizeChange}
            />
            <SizeRadioButton
              size="L"
              selected={selectedSize}
              onClick={handleSizeChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <SizeRadioButton
              size="XL"
              selected={selectedSize}
              onClick={handleSizeChange}
            />
            <SizeRadioButton
              size="1X"
              selected={selectedSize}
              onClick={handleSizeChange}
            />
            <SizeRadioButton
              size="2X"
              selected={selectedSize}
              onClick={handleSizeChange}
            />
            <SizeRadioButton
              size="3X"
              selected={selectedSize}
              onClick={handleSizeChange}
            />
          </div>
        </div>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <div className="flex w-full h-8 my-4 border border-black rounded-lg items-center justify-center font-bold bg-black text-white hover:bg-white hover:text-black">
          ADD TO CART
        </div>
        <h3 className="font-bold text-xl my-2">Product Details</h3>
        <p className="font-roboto">{data.product.productDetails}</p>
        {data.product.modelInfo && (
          <InfoDropdown
            value="MODEL"
            selectedDropdown={dropdown}
            onClick={handleDropdownChange}
            info={<p>{data.product.modelInfo}</p>}
          />
        )}
        <InfoDropdown
          value="MATERIAL"
          selectedDropdown={dropdown}
          onClick={handleDropdownChange}
          info={<p>{data.product.materialInfo}</p>}
        />
        <InfoDropdown
          value="SHIPPING & RETURNS"
          selectedDropdown={dropdown}
          onClick={handleDropdownChange}
          info={<ShippingInfo />}
        />
        <InfoDropdown
          value="SIZE GUIDE"
          selectedDropdown={dropdown}
          onClick={handleDropdownChange}
          info={<SizeInfo />}
        />
      </div>
      <div className="flex w-full bg-gray-300 py-5 px-4 mb-4 font-secondary">
        <div className="flex flex-col w-full items-center justify-around">
          <div className="flex items-center justify-around">
            <div className="flex m-2">
              <PlusCircleOutlined className="mr-2 text-3xl" />
              <p className="text-start">SIZE INCLUSIVE UP TO 3X</p>
            </div>
            <div className="flex m-2">
              <BackwardOutlined className="mr-2 text-3xl" />
              <p className="text-start">EASY RETURNS & EXCHANGES</p>
            </div>
          </div>
          <div className="flex items-center justify-around">
            <div className="flex m-2">
              <MessageOutlined className="mr-2 text-3xl" />
              <p className="text-start">24/7 CUSTOMER SERVICE</p>
            </div>
            <div className="flex m-2">
              <CreditCardOutlined className="mr-2 text-3xl" />
              <p className="text-start">FLEXIBLE PAYMENT OPTIONS</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex w-full border-t border-gray-200 justify-center items-center font-secondary py-5"
        onClick={scrollToTop}
      >
        <div className="text-sm">
          <span>BACK TO THE TOP</span>
          <UpOutlined />
        </div>
      </div>
    </div>
  );
}
