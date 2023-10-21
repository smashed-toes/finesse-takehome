import { InputNumber } from "antd";

export default function QuantitySelector({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: (newQuantity: number) => void;
}) {
  const handleInputChange = (value: number | null) => {
    if (value) {
      setQuantity(value);
    }
  };

  return (
    <div className="flex flex-row rounded-lg border border-black justify-around align-center font-medium h-8">
      <button
        className={`flex basis-1/3 justify-around text-lg ${
          quantity <= 1 ? "text-black/20" : "text-black"
        }`}
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity <= 1}
      >
        <div>-</div>
      </button>
      <div className="flex basis-1/3 justify-center border-x border-black font-bold">
        <InputNumber
          style={{ display: "inline-block", textAlign: "center" }}
          type="number"
          inputMode="numeric"
          value={quantity}
          onChange={handleInputChange}
          bordered={false}
          controls={false}
          min={0}
        />
      </div>
      <button
        className="flex basis-1/3 justify-around text-lg"
        onClick={() => setQuantity(quantity + 1)}
      >
        <div>+</div>
      </button>
    </div>
  );
}
