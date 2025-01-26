import Image from "next/image";
import React from "react";
import { CgTrash } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import imgmen from "@/app/assets/images/mensimg.png"
export default function SubCatView() {
  return (
    <>
        <div className=" py-[20px] px-[40px] ]">
              <div className=" middle  rounded-t-xl border ">
                <h1 className="text-[18px] font-bold  py-[10px] px-[20px] bg-[#f1f5f9]  rounded-t-xl border ">
                  View Sub Category
                </h1>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Select
                      </th>
                      <th scope="col" className="px-6 py-3">
                        S.NO
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Image
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Discription
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <input
                          id="link-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
                        />
                      </th>
                      <td className="px-6 py-4">1</td>
                      <td className="px-6 py-4">Men's</td>
                      <td className="px-6 py-4">
                          <div className="w-[60px]">
                          <Image
                          src={imgmen}
                          width={100}
                          height={50}
                          alt="image men"
                          />
                          </div>
                       
                      </td>
                      <td className="px-6 py-4 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit...
                        <br/>Read More
                     
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1">
                          <CgTrash className="text-[20px] text-red-600" />|
                          <FaEdit className="text-[20px] text-yellow-300" />
                        </div>
                      </td>
                      <td className="px-6 py-4">Active</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <input
                          id="link-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
                        />
                      </th>
                      <td className="px-6 py-4">2</td>
                      <td className="px-6 py-4">Women's</td>
                      <td className="px-6 py-4">
                          <div className="w-[60px]">
                          <Image
                          src={imgmen}
                          width={100}
                          height={50}
                          alt="image men"
                          />
                          </div>
                       
                      </td>
                      <td className="px-6 py-4 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit...
                        <br/>Read More
                     
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1">
                          <CgTrash className="text-[20px] text-red-600" />|
                          <FaEdit className="text-[20px] text-yellow-300" />
                        </div>
                      </td>
                      <td className="px-6 py-4">Active</td>
                    </tr>
                
                  </tbody>
                </table>
              </div>
            </div>
    </>
  )
}
