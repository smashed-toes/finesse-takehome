import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { DropdownValue } from "../../utils/types/types";
import React, { ReactElement, useMemo } from "react";

interface InfoDropdownProps {
  value: DropdownValue;
  selectedDropdown: DropdownValue;
  onClick: (size: DropdownValue) => void;
  info: ReactElement;
}

export default function InfoDropdown({
  value,
  selectedDropdown,
  onClick,
  info,
}: InfoDropdownProps) {
  const isSelected = useMemo(() => {
    if (selectedDropdown == value) {
      return true;
    }
    return false;
  }, [value, selectedDropdown]);

  return (
    <button
      className="flex flex-col w-full my-4 border border-black rounded-lg items-center"
      onClick={() => onClick(value)}
    >
      <div className="flex w-full items-center justify-between p-4">
        <span className="font-secondary font-bold">{value}</span>
        {isSelected ? <UpOutlined /> : <DownOutlined />}
      </div>
      <div
        className={`flex w-full border-t border-black p-5 ${
          !isSelected && "hidden"
        }`}
      >
        {info}
      </div>
    </button>
  );
}
