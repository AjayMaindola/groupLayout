import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RiPieChart2Fill } from "react-icons/ri";
import { LuSettings } from "react-icons/lu";
import { FaDroplet } from "react-icons/fa6";
import { BiRadioCircleMarked } from "react-icons/bi";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { FaCartArrowDown } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { RiFileEditFill } from "react-icons/ri";
import { FaSliders } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import Link from "next/link";
export default function LeftNav() {
  return (
    <>
      <Link href={"/dashboard"}>
        <div className="mt-2 px-5 flex items-center gap-3 text-[18px] cursor-pointer">
          <RiPieChart2Fill />
          <h2>Dashboard</h2>
        </div>
      </Link>
      <Link href={"/dashboard/profile"}>
        <div className="mt-1 px-5 flex items-center gap-3 text-[18px] cursor-pointer">
          <LuSettings />
          <h2>Profile</h2>
        </div>
      </Link>
     <Link href="/dashboard/profile">
     <div className="mt-3 px-5 text-[18px]">
        <h2 className="text-gray-400 uppercase text-[12px] font-bold">
          ecommerce components
        </h2>
      </div>
     </Link>
      <div className="px-[20px]">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="text-[16px] flex items-center gap-3">
                <FaDroplet />
                <h2 className=" ">Color</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Link href="/dashboard/addcolor">
              <div className=" flex items-center gap-3">
                <BiRadioCircleMarked className="text-[20px]" />
                <h2 className=" text-[14px] cursor-pointer">Add Color</h2>
              </div>
              </Link>
            <Link href="/dashboard/viewcolor">
            <div className=" flex items-center gap-3 mt-3">
                <BiRadioCircleMarked className="text-[20px]" />
                <h2 className="text-[14px] cursor-pointer ">View Color</h2>
              </div>
            </Link>
             
            </AccordionContent>
          </AccordionItem>

          {/* second acordion Item */}
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="text-[16px] flex items-center gap-3">
                <FaExpandArrowsAlt />
                <h2 className=" ">Size</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className=" flex items-center gap-3">
                <BiRadioCircleMarked className="text-[20px]" />
                <h2 className=" text-[14px] cursor-pointer">Size Details</h2>
              </div>
              <div className=" flex items-center gap-3 mt-3">
                <BiRadioCircleMarked className="text-[20px]" />
                <h2 className="text-[14px] cursor-pointer ">View Size</h2>
              </div>
            </AccordionContent>
          </AccordionItem>
          {/* Third acordion Item */}

          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className="text-[16px] flex items-center gap-3">
                <RiMenu3Fill />
                <h2 className=" ">Parent Category</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className=" flex items-center gap-3">
                <BiRadioCircleMarked className="text-[20px]" />
                <h2 className=" text-[14px] cursor-pointer">Add Category</h2>
              </div>
              <div className=" flex items-center gap-3 mt-3">
                <BiRadioCircleMarked className="text-[20px]" />
                <h2 className="text-[14px] cursor-pointer ">View Category</h2>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Fourth Accordion */}
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <div className="text-[16px] flex items-center gap-3">
                <FaCartArrowDown className="text-[22px]" />
                <h2 className=" ">Sub Category</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className=" flex items-center gap-3">
                <BiRadioCircleMarked className="text-[20px]" />
                <h2 className=" text-[14px] cursor-pointer">
                  Add Sub Category
                </h2>
              </div>
              <div className=" flex items-center gap-3 mt-3">
                <BiRadioCircleMarked className="text-[20px]" />
                <h2 className="text-[14px] cursor-pointer ">
                  View Sub Category
                </h2>
              </div>
            </AccordionContent>
          </AccordionItem>
          {/* Fifth Accordion */}
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <div className="text-[16px] flex items-center gap-3">
                <FaShoppingBag className="text-[22px]" />
                <h2 className=" ">Product</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className=" flex items-center gap-3">
                <BiRadioCircleMarked className="text-[20px]" />
                <h2 className=" text-[14px] cursor-pointer">Product Details</h2>
              </div>
              <div className=" flex items-center gap-3 mt-3">
                <BiRadioCircleMarked className="text-[20px]" />
                <h2 className="text-[14px] cursor-pointer ">Product Items</h2>
              </div>
            </AccordionContent>
          </AccordionItem>
          {/* Sixth Accordion */}
          <AccordionItem value="item-6">
            <AccordionTrigger>
              <div className="text-[16px] flex items-center gap-3">
                <FaHistory className="text-[22px]" />
                <h2 className=" ">Story</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className=" flex items-center gap-3">
                <BiRadioCircleMarked className="text-[20px]" />
                <h2 className=" text-[14px] cursor-pointer">Story Details</h2>
              </div>
              <div className=" flex items-center gap-3 mt-3">
                <BiRadioCircleMarked className="text-[20px]" />
                <h2 className="text-[14px] cursor-pointer ">Story View</h2>
              </div>
            </AccordionContent>
          </AccordionItem>
          {/* 7th Accordion */}
          <AccordionItem value="item-7">
            <AccordionTrigger>
              <div className="text-[16px] flex items-center gap-3">
                <RiFileEditFill className="text-[22px]" />
                <h2 className=" ">Orders</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className=" flex items-center gap-3 mt-1">
                <BiRadioCircleMarked className="text-[20px]" />
                <h2 className="text-[14px] cursor-pointer ">Orders</h2>
              </div>
            </AccordionContent>
          </AccordionItem>
          {/* 8th Accordion */}
          <AccordionItem value="item-8">
            <AccordionTrigger>
              <div className="text-[16px] flex items-center gap-3">
                <FaSliders className="text-[22px]" />
                <h2 className=" ">Slider</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className=" flex items-center gap-3">
                <BiRadioCircleMarked className="text-[20px]" />
                <h2 className=" text-[14px] cursor-pointer">Slider Details</h2>
              </div>
              <div className=" flex items-center gap-3 mt-3">
                <BiRadioCircleMarked className="text-[20px]" />
                <h2 className="text-[14px] cursor-pointer ">Slider View</h2>
              </div>
            </AccordionContent>
          </AccordionItem>
          {/* 9th Accordion */}
          <AccordionItem value="item-9">
            <AccordionTrigger>
              <div className="text-[16px] flex items-center gap-3">
                <FaFileAlt className="text-[22px]" />
                <h2 className=" ">Terms & Conditions</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
