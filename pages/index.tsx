import type { ReactElement } from "react";
import Head from "next/head";
import ActivitySummary from "../components/ActivitySummary";
import CourseCommingSoon from "../components/CourseCommingSoon";
import Jumbotron from "../components/Jumbotron";
import Layout from "../components/Layout";
import StudentFeedback from "../components/StudentFeedback";
import Subscribe from "../components/Subscribe";
import TopCourses from "../components/TopCourses";

const Home = () => {
  return (
    <div className={"font-Inter text-sm"}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Jumbotron />
      <CourseCommingSoon />
      <TopCourses />
      <StudentFeedback />
      <ActivitySummary />
      <Subscribe />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
