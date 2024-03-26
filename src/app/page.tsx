import CalculatorContainer from "@/components/CalculatorContainer";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex felx-col justify-center items-center  ">
      <div className="w-full px-2">
        <CalculatorContainer/>
      </div>
    </main>
  );
}
