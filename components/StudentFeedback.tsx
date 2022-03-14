import { url } from "inspector";
import Image from "next/image";
import React from "react";
import PrinciplesPng from "../assets/Principles.png";
import StudentPng from "../assets/Student.png";
import InstagramPost from "../assets/instagram-post.png";

export default function StudentFeedback() {
  return (
    <section className="container mx-auto max-w-5xl grid grid-cols-2 gap-6  py-20">
      <div className="relative">
        <div className="w-28 h-28 bg-#FDC800 absolute z-50 rounded-md pl-2 pt-2">
          <Image src={InstagramPost} />
        </div>

        <div className=" p-7">
          <Image src={StudentPng} />
        </div>
        <div className="absolute bottom-0 right-0 left-0 mx-24 bg-white rounded-md shadow-sm p-4 flex flex-col justify-center items-center">
          <div>
            <h5>Kimmie Vo</h5>
            <p>Junior Designer</p>
          </div>
        </div>
      </div>
      <div>
        <div className="text-4xl pt-7 font-CormorantGaramond font-medium">
          Successful Student <br />
          <p className="text-#FDC800">Feedback</p>
        </div>
        <div className="text-sm font-Inter">
          Take courses from the world’s best instructors and universities.
          Courses include recorded auto-graded and peer-reviewed assignments,
          video lectures, and community discussion forums. When you complete a
          course, you’ll be eligible to receive a shareable electronic Course
          Certificate for a small fee.
        </div>
        <div className="pt-12">The courses that Kimmie has taken</div>
        <div className="flex mt-5 ">
          <div className="flex items-center relative">
            <Image
              src={PrinciplesPng}
              width={80}
              height={80}
              className="z-50"
            />
            <div className="w-4 top-0 right-0 bottom-0 bg-#F0F4F9 absolute rounded-l-md"></div>
          </div>
          <div className=" bg-#F0F4F9 flex-auto py-6 pl-5 rounded-r-md">
            <div>Modern and Contemporary Art and Design</div>
            <div>The Museum of Modern Art</div>
          </div>
        </div>
      </div>
    </section>
  );
}
