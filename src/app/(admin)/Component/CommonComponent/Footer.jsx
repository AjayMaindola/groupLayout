import React from 'react'

export default function Footer() {
  return (
    <>
       <footer className="bg-white border-t-2  relative bottom-0 ">
        <div className="w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-900 sm:text-center ">
            © 2024 <a className="hover:underline">Volga and Volga™</a>. All Rights
            Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Design By <span className="text-blue-600">Ajay Maindola</span>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}
