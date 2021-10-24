import React from "react";
import {
  Wrapper,
  HeroLogoContianer,
  HeroLogoImage,
  CenterContainer,
} from "./HomePageHeaderStyles";

import logo from "../../Assets/final_asset.svg";
import SearchBar from "../Search/SearchBar/SearchBar";

import MobileHeader from "./MobileHeader";

const HomePageHeader = () => {
  return (
    <>
      <Wrapper>
        <CenterContainer>
          <HeroLogoContianer>
            <HeroLogoImage src={logo} />
          </HeroLogoContianer>
          <SearchBar buttonColor={"#EE2F2F"} iconColor={"#FFFFFF"} />
        </CenterContainer>
      </Wrapper>
      <MobileHeader />
    </>
  );
};

export default HomePageHeader;
