import { Input } from "@/components/ui/input";
import React from "react";
import { FaYoutube } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import Image from 'next/image'
import imgbird from"@/app/assets/images/bird-colorful-1avif.avif"
export default function ProfilePage() {
  return (
    <>
      {/* Second section div start */}
      <div className=" py-[20px] px-[40px] ">
        <div className=" middle  rounded-t-xl border ">
          <h1 className="text-[18px] font-bold  py-[10px] px-[20px] bg-[#f1f5f9]  rounded-t-xl ">
            Profile
          </h1>
          <div className="grid grid-cols-2">
            <div className=" py-[15px] px-[20px]">
              <h1 className="mb-[20px]">Name</h1>
              <Input
                className="w-full rounded-md text-[14px] border"
                type="text"
                placeholder="Enter Your Name"
              />
              <h2 className="mt-[35px]">Social Links</h2>
              <div className="flex gap-2 mt-[20px] items-center">
                <GrFacebookOption className="text-[22px]" />
                <Input
                  className="w-full rounded-md text-[14px]"
                  type="text"
                  placeholder="Enter FaceBook Account Link"
                />
              </div>
              <div className="flex gap-2 mt-[20px] items-center">
                <IoLogoInstagram className="text-[22px]" />
                <Input
                  className="w-full rounded-md text-[14px]"
                  type="text"
                  placeholder="Enter Instagram Account Link"
                />
              </div>
              <div className="flex gap-2 mt-[20px] items-center">
                <FaYoutube className="text-[252x]" />
                <Input
                  className="w-full rounded-md text-[14px]"
                  type="text"
                  placeholder="Enter youtube Account Link"
                />
              </div>
              <div className="flex gap-2 mt-[20px] items-center">
                <RiTwitterXLine className="text-[22px]" />
                <Input
                  className="w-full rounded-md text-[14px]"
                  type="text"
                  placeholder="Enter your X Account Link"
                />
              </div>

              <div>
                <h2 className="mt-[35px]">Logo</h2>
                <Image
               
                  className="w-[90px] border rounded-xl mt-5"
                  src={imgbird.src}
                  width={80}
                  height={50}
                  alt=""
                />
              </div>
              <div>
                <h2 className="mt-[35px]">Logo</h2>
                <Image
               
                  className="w-[90px] border rounded-xl mt-5"
                  src={imgbird.src}
                  width={80}
                  height={50}
                  alt=""
                />
              </div>
              <div>
                <h2 className="mt-[35px]">Sub Logo</h2>
                <div className="flex items-center gap-2 mt-[22px] pb-[20px]">
                  <Input className="w-full rounded-md" type="text" />
                  <button className="py-[7px] px-[30px] bg-[#7e22ce] text-[white] rounded-md text-[15px]">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
