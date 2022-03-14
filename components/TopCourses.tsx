import React from "react";
import ListCourses from "./ListCourses";

export default function TopCourses(props: any) {
  return (
    <section className="container mx-auto max-w-5xl py-20">
      <h2 className="text-center text-5xl mb-6 font-CormorantGaramond font-bold">
        Top Featured Courses
      </h2>
      <ListCourses />
    </section>
  );
}
