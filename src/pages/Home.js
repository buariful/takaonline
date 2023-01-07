import React from "react";
import AboutCourse from "../components/homeComponents/AboutCourse";
import CourseSummary from "../components/homeComponents/CourseSummary";
import Header from "../components/homeComponents/Header";
import VideoCard from "../components/homeComponents/VideoCard";
import Navbar from "../components/shared/Navbar";

const Home = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Header />
      <section className=" my-10 w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </section>

      <section className="w-10/12 mx-auto mb-10">
        <AboutCourse />
      </section>

      <section className="bg-[#1E0F12] text-white mb-10">
        <CourseSummary />
      </section>
    </main>
  );
};

export default Home;
