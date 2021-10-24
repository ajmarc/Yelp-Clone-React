import styled from "styled-components/macro";

import RestaurantPicture from "../../Assets/restaurantpicture.jpg";
import logo from "../../Assets/final_asset.svg";

export const Wrapper = styled.div`
  display: flex;
  height: 570px;
  justify-content: center;
  background-color: #333;
  background-size: cover;
  background-position: 50%;
  background-image: url(${RestaurantPicture});
  box-shadow: inset 3px 3px 10px 0 #000000;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 968px) {
    display: none;
  }
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroLogoImage = styled.img`
  background-repeat: no-repeat;
  width: 140px;
  height: 80px;
  margin-bottom: 40px;
  position: relative;
  right: 20px;
`;

export const HeroLogoContianer = styled.div`
  display: flex;
`;
