import React from "react";
import Image from "next/image";
import Analytic from "../assets/Analytic.png";

export default function Jumbotron() {
  return (
    <section id="about" className="bg-#F0F4F9 py-14">
      <div className="container mx-auto flex max-w-5xl ">
        <div className="py-24 flex-1">
          <h6 className="text-lg mb-4 font-Inter font-bold">Become Master</h6>
          <h1 className="text-5xl mb-5 font-CormorantGaramond font-normal ">
            Learn New Skills Online Find Best Courses
          </h1>
          <div className="flex space-x-4">
            <button className="bg-#FDC800 rounded py-3 px-7">
              Get A Quote
            </button>
            <button className="bg-white rounded-md py-3 px-7 border border-slate-200">
              Read More
            </button>
          </div>
        </div>
        <div className="flex justify-end ">
          <Image src={Analytic} alt="analityc" width={400} height={400} />
        </div>
      </div>
    </section>
  );
}
