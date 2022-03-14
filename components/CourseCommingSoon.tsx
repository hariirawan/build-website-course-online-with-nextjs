import Image from "next/image";
import React from "react";
import Successpng from "../assets/Success.png";

export default function CourseCommingSoon() {
  return (
    <section className="releative">
      <div className="bg-#F0F4F9 absolute left-0 right-0 h-16  py-6" />
      <div className="container mx-auto max-w-5xl relative flex justify-between items-center bg-#002147 rounded-md py-6 px-7">
        <div className="flex items-center space-x-4">
          <Image src={Successpng} width={100} height={80} />
          <h5 className="text-2xl text-white font-CormorantGaramond">
            Upcoming Our <b className="text-#FDC800">Basic in</b> <br />
            <b className="text-#FDC800">Python</b> Course!
          </h5>
        </div>
        <div className="flex space-x-2 text-white items-center">
          <CountDown title={11} desc="days" />
          <div>:</div>
          <CountDown title={2} desc="Hours" />
          <div>:</div>
          <CountDown title={45} desc="Minutes" />
          <div>:</div>
          <CountDown title={21} desc="Seconds" />
        </div>
      </div>
    </section>
  );
}

function CountDown(props: { title: Number; desc: String }) {
  return (
    <div className="text-white">
      <div className="text-4xl text-center">{props.title}</div>
      <div className="text-sm">{props.desc}</div>
    </div>
  );
}
