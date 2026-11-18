import { CiShop } from "react-icons/ci";
import { IoCafeOutline } from "react-icons/io5";

import { TbHorseToy } from "react-icons/tb";
import { SiOverleaf } from "react-icons/si";
import { MdOutlineHeadphones } from "react-icons/md";
import { CiMobile4 } from "react-icons/ci";
import { GiPencilBrush } from "react-icons/gi";
import { GiLargeDress } from "react-icons/gi";
import { CiTablets1 } from "react-icons/ci";

const tabs = [
  { name: "All", icon: <CiShop size={24} /> },
  { name: "Cafe", icon: <IoCafeOutline size={24} /> },
  { name: "Home", icon: <CiShop size={24} /> },
  { name: "Toys", icon: <TbHorseToy size={24} /> },
  { name: "Fresh", icon: <SiOverleaf size={24} /> },
  { name: "Electronics", icon: <MdOutlineHeadphones size={24} /> },
  { name: "Mobile", icon: <CiMobile4 size={24} /> },
  { name: "Beuty", icon: <GiPencilBrush size={24} /> },
  { name: "Fashion", icon: <GiLargeDress size={24} /> },
  { name: "Pharmacy", icon: <CiTablets1 size={24} /> },
];

const HeadTabs = () => {
  return (
    <div className=" grid grid-cols-4 md:flex justify-center flex-wrap gap-5 py-3 border-y border-gray-300 bg-white px-5 lg:px-0">
      {tabs.map((tab) => (
        <div
          key={tab}
          className="flex gap-1 text-gray-600 font-medium items-center cursor-pointer"
        >
          {tab.icon}
          <span className="text-shadow-gray-800 text-lg  font-semibold">
            {tab.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default HeadTabs;
