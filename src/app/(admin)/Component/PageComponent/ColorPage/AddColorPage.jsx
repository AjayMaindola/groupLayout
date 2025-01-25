import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Radio } from 'lucide-react'
import React from 'react'

export default function AddColorPage() {
  return (
    <>
      <div className=" py-[20px] px-[40px] ">
      <div className=" middle  rounded-t-xl border ">
      <h1 className="text-[18px] font-semibold  py-[10px] px-[20px] bg-[#f1f5f9]  rounded-t-xl ">
            Add Color
          </h1>
          <form className=" py-[10px] px-[20px]">
            <h1 className="pb-[20px] font-semibold ">Color Name </h1>
            <Input
              className="w-full rounded-md text-[14px]"
              type="text"
              placeholder="Color Name"
            />
            <div className="mt-5 p-[100px]">
              <input type="color" />
            </div>

            <div className="flex items-center gap-10 mt-2">
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
            <Button className="bg-violet-700">Add Color</Button>
          </form>
      </div>
     
      </div>
    </>
  )
}
