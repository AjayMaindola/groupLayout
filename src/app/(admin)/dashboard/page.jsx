import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Header from "../Component/CommonComponent/Header";
import Footer from "../Component/CommonComponent/Footer";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex border-b-2 py-9 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Header />
          </div>
        </header>
        <div className=" pl-5 mt-[20px] mb-5 border-b-2 pb-5">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <Link href="/dashboard">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="grid grid-cols-4 py-8  px-4 gap-2 items-center justify-between pb-[310px] ">
          <div className="bg-[#5856d3] px-[15px] pt-[20px] pb-[70px]  rounded-[5px]">
            <span className="flex items-center justify-between">
              <h1 className="text-white text-[22px] font-bold">
                26K(-12.4% ↓)
              </h1>
              <svg
                fill="white"
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 512"
              >
                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
              </svg>
            </span>
            <h3 className="text-[20px] text-white">User</h3>
          </div>
          <div className="bg-[#2998fe] px-[15px] pt-[20px] pb-[70px] rounded-[5px]">
            <span className="flex items-center justify-between">
              <h1 className="text-white text-[22px] font-bold">
                $6,200 (40.9% ↑)
              </h1>
              <svg
                fill="white"
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 512"
              >
                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
              </svg>
            </span>
            <h3 className="text-[20px] text-white">Product</h3>
          </div>
          {/* 3rd */}
          <div className="bg-[#fcb01e] px-[15px] pt-[20px] pb-[70px] rounded-[5px]">
            <span className="flex items-center justify-between">
              <h1 className="text-white text-[22px] font-bold">
                2.49% (84.7% ↑)
              </h1>
              <svg
                fill="white"
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 512"
              >
                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
              </svg>
            </span>
            <h3 className="text-[20px] text-white">Category</h3>
          </div>
          {/* 4th */}
          <div className="bg-[#e95253] px-[15px] pt-[20px] pb-[70px]  rounded-[5px]">
            <span className="flex items-center justify-between">
              <h1 className="text-white text-[22px] font-bold">
                44K (-23.6% ↓)
              </h1>
              <svg
                fill="white"
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 512"
              >
                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
              </svg>
            </span>
            <h3 className="text-[20px] text-white">Orders</h3>
          </div>
        </div>
        <Footer/>
      </SidebarInset>
    </SidebarProvider>
  );
}
