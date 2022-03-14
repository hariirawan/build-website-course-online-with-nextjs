import React from "react";

export default function ListCourses(props: any) {
  const data = [1, 2, 3, 4, 5, 5, 6, 7, 7];

  return (
    <div className="container mx-auto max-w-5xl grid grid-cols-3 gap-4 ">
      {data.map((val) => {
        return <CardCourse />;
      })}
    </div>
  );
}

function CardCourse(props: any) {
  return (
    <div className="border border-#BDBDBD overflow-hidden rounded-md bg-white">
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          className="w-full"
        />
        <div className="absolute -bottom-4 left-4 h-16 w-16 text-white bg-#F0F4F9 p-1">
          <img
            src="https://images.pexels.com/photos/4769464/pexels-photo-4769464.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            className="object-cover w-full h-full "
          />
        </div>
      </div>
      <div className=" pt-9 pb-6 px-4">
        <h2 className="font-Inter font-bold text-base text-#002147">
          User Research for User Experience Design
        </h2>
        <p className="text-xs text-#BDBDBD">Duke University</p>
      </div>
    </div>
  );
}
