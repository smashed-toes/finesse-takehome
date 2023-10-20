import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ProductByIdDocument } from "./operators/__generated__/ProductById.query";

export default function ProductPage() {
  const { productId = "" } = useParams();

  useEffect(() => {
    console.log(productId);
  });

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
  }

  return (
    <div className="text-3xl font-bold underline">
      Hello World!, I have productId {data.product?.title}
    </div>
  );
}
