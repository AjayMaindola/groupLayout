import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" text-center">
        <p className="text-3xl"> Testing 1</p> <br/>
        <p className=" font-montserrat text-3xl">  Testing 2</p>
        <p className="text-3xl font-Smooch"> Testing 1</p> <br/>
        <p className="text-3xl font-Garamond"> Testing 1</p> <br/>
        <Button size="sm" variant="destructive">hello i am</Button>
      </div>



    </>
  );
}
