import React from 'react'
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
import Header from '../../Component/CommonComponent/Header';
import ProductAddsDetails from '../../Component/PageComponent/ProductAddDetails/ProductAddsDetails';
import Footer from '../../Component/CommonComponent/Footer';
export default function ProductDetails() {
  return (
    <>
         <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className=" sticky top-0 bg-white flex border-b-2 py-9 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          <Header/>
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
                <BreadcrumbPage>Product</BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Product Details</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        {/* page commponent add heare */}
     <ProductAddsDetails/>
     <Footer/>
      </SidebarInset>
    </SidebarProvider>
    </>
  )
}
