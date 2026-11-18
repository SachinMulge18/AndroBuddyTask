import { useSelector } from "react-redux";

import { AiFillThunderbolt } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const logoImage =
  "https://cdn.zeptonow.com/web-static-assets-prod/artifacts/18.2.2/images/header/primary-logo.svg";

const Navbar = ({ openCart, setOpenCart }) => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <nav className="container max-w-7xl mx-auto flex items-center justify-between gap-5 py-5">
      {/* logo */}
      <div className="flex flex-col lg:flex-row items-center  gap-2">
        <img src={logoImage} alt="Logo" className="" />
        <div>
          <span className="flex items-center gap-1 text-sm lg:text-lg font-semibold">
            <AiFillThunderbolt className="text-purple-900" size={20} />
            Delivery in minutes*
          </span>
          <p className="text-gray-400 font-medium text-sm lg:text-lg">
            Select Location
          </p>
        </div>
      </div>
      <div className=" w-[65%]">
        <input
          placeholder="Search for products..."
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* login/cart */}
      <div className="flex gap-5">
        <div className="flex flex-col gap-1 items-center">
          <FaRegUserCircle size={24} />
          <p className="text-sm font-light">Login</p>
        </div>
        <div className="relative flex flex-col gap-1 items-center">
          <IoCartOutline size={26} className="cursor-pointer hover:scale-110 transition-transform" onClick={() => setOpenCart(!openCart)} />
          <p className="text-sm font-light">Cart</p>

          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-800 text-white    text-[12px] font-samibold rounded-lg h-5 w-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
