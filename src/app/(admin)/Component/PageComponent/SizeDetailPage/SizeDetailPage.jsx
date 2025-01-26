import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
export default function SizeDetailPage() {
  return (
    <>
       <div className=" py-[20px] px-[40px] mb-[180px]">
       <div className=" middle  rounded-t-xl border pb-[30px] ">
       <h1 className="text-[18px] font-Semibold  py-[10px] px-[20px] bg-[#f1f5f9]  rounded-t-xl ">
            Add Size
          </h1>
            <form className=" py-[10px] px-[20px]">
                      <h1 className="pb-[20px] font-semibold ">Size Name </h1>
                      <Input
                        className="w-full rounded-md text-[14px]"
                        type="text"
                        placeholder="Size Name"
                      />
                
          
                      <div className="flex items-center gap-10 mt-4">
                        <h1 className="py-[15px]">Status :</h1>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-2">
                            <input type='radio' id="germany" name="countries" value="Germany" />
                            <Label htmlFor="germany">Active</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <input type='radio' id="germany" name="countries" value="Germany" />
                            <Label htmlFor="germany">Deactive</Label>
                          </div>
                        </div>
                      </div>
                      <Button className="bg-violet-700 mt-4">Add Size</Button>
                    </form>
       </div>
       </div>
    </>
  )
}
