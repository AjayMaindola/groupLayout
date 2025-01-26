import React from 'react'
import { MdMenuOpen } from "react-icons/md";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiBagSimple } from "react-icons/pi";
export default function Header() {
  return (
    <>
  <div className="w-full shadow-lg py-5 px-[15px] md:px-[40px] grid grid-cols-[55%_45%] md:grid md:grid-cols-[60%_40%] lg:grid lg:grid-cols-[60%_40%] xl:grid xl:grid-cols-2 gap-2 md:gap-3 items-center justify-between">
        <div className=" md:grid md:grid-cols-[35%_65%] lg:grid-cols-[30%_70%] justify-between items-center">
          <div className=" flex items-center  gap-2">
          <MdMenuOpen className="md:hidden text-[20px]" />
         
            <h1 className="text-[16px] md:text-[18px] lg:text-[20px] font-bold">
              Frank And Oak
            </h1>
          </div>
          <nav className=" hidden md:block">
            <ul className="flex justify-evenly  text-[14px]">
              <li>Sale</li>
              <li>Women</li>
              <li>Men</li>
              <li>About Us</li>
            </ul>
          </nav>
        </div>
        <div className=" flex gap-2 md:gap-3 justify-end text-[22px] md:text-[25px]">
          <HiMagnifyingGlass />
          <HiOutlineUserCircle />
          <IoIosHeartEmpty />
          <PiBagSimple />
        </div>
      </div>
     
    </>
  )
}
