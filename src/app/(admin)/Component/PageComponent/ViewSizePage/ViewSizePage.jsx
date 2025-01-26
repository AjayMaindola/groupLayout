import React from 'react'
import { CgTrash } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
export default function ViewSizePage() {
  return (
    <>
      <div className=" py-[20px] px-[40px] ]">
              <div className=" middle  rounded-t-xl border ">
                <h1 className="text-[18px] font-bold  py-[10px] px-[20px] bg-[#f1f5f9]  rounded-t-xl border ">
                  View Size
                </h1>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Select
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Size Name
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
                      <td className="px-6 py-4">S</td>
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
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
                        />
                      </th>
                      <td className="px-6 py-4">M</td>
                   
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
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
                        />
                      </th>
                      <td className="px-6 py-4">L</td>
                     
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
