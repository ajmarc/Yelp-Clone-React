import React from "react";
import HomePageHeader from "../Components/Headers/HomePageHeader";
import CategoriesHero from "../Components/CategoriesHero/CategoriesHero";
import AppBanner from "../Components/AppHeroBanner/AppBanner";
import MainFooter from "../Components/MainFooter/MainFooter";

const Home = () => {
  return (
    <>
      <HomePageHeader />
      <CategoriesHero />
      <AppBanner />
      <MainFooter Footerplace={"center"} />
    </>
  );
};

export default Home;
