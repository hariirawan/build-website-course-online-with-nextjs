import Image from "next/image";
import React from "react";
import Recruiting from "../assets/Recruiting.png";
import { FaRegEnvelope } from "react-icons/fa";

export default function Subscribe() {
  return (
    <section
      id="contact"
      className="container mx-auto max-w-4xl flex space-x-12 items-center py-20"
    >
      <div>
        <Image src={Recruiting} width={300} height={450} />
      </div>
      <div className="flex-auto ">
        <div className="text-#FDC800 font-Inter">Subscribe Now</div>
        <div className="text-5xl font-CormorantGaramond mb-6">
          Get every single <br /> update you will get
        </div>
        <div className="flex items-center border py-1 px-1 pl-2 rounded-md space-x-2 ">
          <FaRegEnvelope />
          <input
            type={"email"}
            className="flex-auto outline-none"
            placeholder="Enter email address"
          />
          <button className="bg-#FDC800 rounded-md py-3 px-6">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
}
