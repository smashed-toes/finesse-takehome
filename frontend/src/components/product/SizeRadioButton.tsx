import React, { useState } from "react";
import { Size } from "../../utils/types/types";

interface SizeRadioButtonProps {
  size: Size;
  selected: Size;
  onClick: (size: Size) => void;
}

export default function SizeRadioButton({
  size,
  selected,
  onClick,
}: SizeRadioButtonProps) {
  const buttonClasses = `flex w-1/4 h-8 text-sm m-0.5 border border-black rounded items-center justify-center font-secondary font-semibold ${
    selected === size ? "bg-black text-white" : "text-black"
  }`;

  return (
    <div className={buttonClasses} onClick={() => onClick(size)}>
      <p>{size}</p>
    </div>
  );
}
