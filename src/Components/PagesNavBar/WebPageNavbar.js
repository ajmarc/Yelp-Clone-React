import React from "react";
import NavLogoColor from "../../Assets/final_asset.svg";
import SearchBar from "../Search/SearchBar/SearchBar";
import {
  LocationHeaderWrapper,
  LogoMain,
  BellIcon,
  MessageIcon,
  IconsContainer,
  IconsText,
  LogoContainer,
  SearchIcons,
  BackArrow,
} from "./WebPageNavbarStyles";
import { Link, withRouter } from "react-router-dom";

const PagesNavBar = () => {
  return (
    <LocationHeaderWrapper>
      <Link to={"/"}>
        <BackArrow size={25} />
      </Link>

      <LogoContainer>
        <Link to={"/"}>
          <LogoMain src={NavLogoColor} />
        </Link>
      </LogoContainer>
      <SearchBar buttonColor={"#FFFFFF"} iconColor={"#EE2F2F"} />
      <IconsContainer>
        <IconsText>For Businesses</IconsText>
        <IconsText>Write a Review</IconsText>
        <BellIcon size={20} />
        <MessageIcon size={20} />
      </IconsContainer>
      <SearchIcons size={25} />
    </LocationHeaderWrapper>
  );
};

export default withRouter(PagesNavBar);
