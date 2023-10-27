import React from "react";
import { cartimg, logoDark } from "../assets";

const Header = () => {
  return (
    <div className="w-full fixed bg-gray-200 font-tittlefont">
      <div className="max-w-screen-xl mx-auto px-[5rem] h-20 flex items-center justify-between">
        <div>
          <img className="w-32" src={logoDark} alt="logo" />
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:bg-white hover:px-2 hover:py-1 hover:rounded-lg hover:underline underline-offset-[2.1rem] decoration-1 cursor-pointer">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:bg-white hover:px-2 hover:py-1 hover:rounded-lg hover:underline underline-offset-[2.1rem] decoration-1 cursor-pointer">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:bg-white hover:px-2 hover:py-1 hover:rounded-lg hover:underline underline-offset-[2.1rem] decoration-1 cursor-pointer">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:bg-white hover:px-2 hover:py-1 hover:rounded-lg hover:underline underline-offset-[2.1rem] decoration-1 cursor-pointer">
              Elements
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:bg-white hover:px-2 hover:py-1 hover:rounded-lg hover:underline underline-offset-[2.1rem] decoration-1 cursor-pointer">
              Blog
            </li>
          </ul>
          <div className="relative cursor-pointer">
            <img className="w-10" src={cartimg} alt="cart" />
            <span className="absolute w-6 top-4 left-2 text-sm flex items-center justify-center font-semibold">
              0
            </span>
          </div>
          <img
            className="w-10 h-10 rounded-full cursor-pointer"
            src="https://media.licdn.com/dms/image/D5603AQEbFRrL5vCDJA/profile-displayphoto-shrink_800_800/0/1687174414967?e=1703721600&v=beta&t=qpFdY37Ou9vnrELlIafYRaIgoaF5j8PiUfCQGNJ5Bu0"
            alt="User Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
