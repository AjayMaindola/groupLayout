"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import imgload from "@/app/assets/images/download.png";
import Image from "next/image";
export default function ProductAddsDetails() {
  const [file, setFile] = useState();
  function getFile(event) {
    setFile(URL.createObjectURL(event.target.files[0]));
  }
  return (
    <>
      <div className=" py-[5px] px-[40px] mb-[10px]">
        <div className=" middle  rounded-t-xl border pb-[30px] ">
          <h1 className="text-[18px] font-Semibold  py-[10px] px-[20px] bg-[#f1f5f9]  rounded-t-xl ">
            Product Details
          </h1>
          <form className=" py-[10px] px-[20px]">
            <h1 className="pb-[20px] font-semibold ">Product Name </h1>
            <Input
              className="w-full rounded-md text-[14px]"
              type="text"
              placeholder="Product Name"
            />
            <h1 className="pb-[20px] mt-4 font-semibold">
              Product Description
            </h1>
            <textarea
              id="message"
              rows="2"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add Product Discriptio..."
            ></textarea>
            <h1 className="pb-[20px] mt-4 font-semibold">Short Description</h1>
            <textarea
              id="message"
              rows="2"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add Product Discriptio..."
            ></textarea>
            <h1 className="pb-[20px] mt-4 font-semibold">Product Image</h1>
            <div className="grid grid-cols-[70%_auto] items-center">
              <Input
                onChange={getFile}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
              />
              <div className="w-[75px] h-[75px]  mx-auto border text-center relative">
                <img className=" absolute top-0 left-0" src={file} />
                <Image className=" " src={imgload} alt="uploadimg" />
              </div>
            </div>
            {/* <h1 className="pb-[20px] mt-4 font-semibold">
              Parent Category Name
            </h1>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>--Sellect Category--</option>
              <option value="CA">Men's</option>
              <option value="FR">Women's</option>
              <option value="DE">Sale</option>
            </select> */}
            <h1 className="pb-[10px] font-semibold mt-4">Image Animation </h1>
            <div className="grid grid-cols-[70%_auto] items-center">
              <Input
                onChange={getFile}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
              />
              <div className="w-[75px] h-[75px]  mx-auto border text-center relative">
                <img className=" absolute top-0 left-0" src={file} />
                <Image className=" " src={imgload} alt="uploadimg" />
              </div>
            </div>
            <h1 className="pb-[20px] mt-4 font-semibold"> Product Gallery </h1>
            <div className="grid grid-cols-[70%_auto] items-center">
              <Input
                onChange={getFile}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
              />
              <div className="w-[75px] h-[75px]  mx-auto border text-center relative">
                <img className=" absolute top-0 left-0" src={file} />
                <Image className=" " src={imgload} alt="uploadimg" />
              </div>
            </div>
            <div className="grid grid-cols-2 items-center justify-between gap-6 py-5">
              <div>
                <h1 className="pb-[20px] font-semibold ">Price</h1>
                <Input
                  className="w-full rounded-md text-[14px]"
                  type="text"
                  placeholder="Product Price"
                />
              </div>
              <div>
                <h1 className="pb-[20px] font-semibold ">MRP</h1>
                <Input
                  className="w-full rounded-md text-[14px]"
                  type="text"
                  placeholder="Product MRP"
                />
              </div>
            </div>
            <h1 className="pb-[20px] font-semibold ">Select Parent Category</h1>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>--Select Parent Category--</option>
              <option value="US">Men'S</option>
              <option value="CA">Women's</option>
              <option value="CA">Sale</option>
            </select>
            <h1 className="pb-[20px] font-semibold mt-4 ">Select Sub Category</h1>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>--Select Sub Category--</option>
              <option value="US">T-Shirt</option>
              <option value="CA">Shirt</option>
            </select>
            <div className="grid grid-cols-2 items-center justify-between gap-6 py-5">
              <div>
                <h1 className="pb-[20px] font-semibold ">Size</h1>
                <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>--Select Size--</option>
              <option value="US">S</option>
              <option value="CA">M</option>
              <option value="CA">L</option>
              <option value="CA">XL</option>
              <option value="CA">XXL</option>
            </select>
              </div>
              <div>
                <h1 className="pb-[20px] font-semibold ">Color</h1>
                <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>--Select Color--</option>
              <option value="US">Black</option>
              <option value="CA">Red</option>
              <option value="CA">Green</option>
            </select>
              </div>
            </div>
            <div className="flex items-center gap-10 mt-4">
              <h1 className="py-[15px]">Status :</h1>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="germany"
                    name="countries"
                    value="Germany"
                  />
                  <Label htmlFor="germany">Active</Label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="germany"
                    name="countries"
                    value="Germany"
                  />
                  <Label htmlFor="germany">Deactive</Label>
                </div>
              </div>
            </div>
            <Button className="bg-violet-700 mt-4">Add Product</Button>
          </form>
        </div>
      </div>
    </>
  );
}
