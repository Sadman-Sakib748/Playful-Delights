import React from "react";
import Banner from "./Banner";
import Gallery from "./Gallery";
import SubTabs from "./SubTabs";
import FirstSection from "../firstsection/FirstSection";
import SecondSection from "../secondsection/SecondSection";
import useTitle from "../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Banner />
      <Gallery />
      <SubTabs />
      <FirstSection />
      <SecondSection />
    </>
  );
};

export default Home;
