import Logo from "../assets/Logo";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";

export default function Header() {
  return (
    <div className="h-16 w-screen flex justify-between items-center my-2 px-4 sticky top-0 bg-white">
      <div className="flex w-1/5">
        <MenuOutlined className="mr-3" style={{ fontSize: "24px" }} />
        <SearchOutlined style={{ fontSize: "24px" }} />
      </div>
      <Logo />
      <div className="flex w-1/5">
        <span className="font-secondary font-bold text-xs ml-3">CART</span>
      </div>
    </div>
  );
}
