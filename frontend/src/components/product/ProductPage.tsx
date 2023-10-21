import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ProductByIdDocument } from "./operators/__generated__/ProductById.query";
import { useState } from "react";
import SizeRadioButton from "./SizeRadioButton";
import QuantitySelector from "./QuantitySelector";
import { Size } from "../../utils/types/types";

export default function ProductPage() {
  const { productId = "" } = useParams();

  const [selectedSize, setSelectedSize] = useState<Size>("XS");
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (size: Size) => {
    setSelectedSize(size);
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
    <div>
      {data.product.images && (
        <>
          <img
            src={`http://192.168.1.188:8000/${data.product.images[0].image}`}
            alt={`${data.product.title} image 1`}
          />
        </>
      )}
      <div className="px-5 py-7">
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
      </div>
    </div>
  );
}
