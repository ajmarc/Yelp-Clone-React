import styled from "styled-components/macro";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import { TiStarOutline } from "react-icons/ti";

const handleColorType = (color) => {
  switch (color) {
    case "claimedOrOpen":
      return "#00C520";
    case "closed":
      return "#F20909";
    case "checkMarkColor":
      return "#009DFF";
    case "textGreyColor":
      return "#2E2E2E";
    default:
      return "545454";
  }
};

export const Container = styled.div`
  display: flex;
  margin: 5rem 0;
  justify-content: center;

  @media (max-width: 968px) {
    display: none;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  position: relative;
  max-width: 100%;
  width: 90rem;
  height: 17rem;
  align-items: center;
  padding: 0 4rem;
  overflow-x: hidden;
  margin: 0 auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const AddyContainer = styled.div`
  display: flex;
  position: absolute;
  top: 1rem;
  bottom: 0;
  right: 0;
  /* background-color: lightgray; */
  overflow-x: hidden;

  padding: 11px 0;
  max-width: 10rem;
`;
export const AddyText = styled.div`
  align-self: flex-start;
  font-size: 16px;
  font-weight: 600;
  padding: 0 10px;
  color: #626262;
`;

export const ImageContainer = styled.div`
  display: flex;
  margin-left: 50px;
  transition: all 0.2s ease-in-out;

  border-radius: 3px;
  @media screen and (max-width: 792px) {
    height: 400px;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const ImageMain = styled.img`
  background-image: url(${({ background }) => background});
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  height: 170px;
  width: 170px;
  border-radius: 50%;
`;

export const ClaimedContainer = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center;
`;

export const ClaimedText = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  margin-right: 8px;
  font-weight: ${({ fontWeight }) => (fontWeight ? "700" : "600")};
  color: ${({ color }) => handleColorType(color)};
  margin: 0 3px;
`;

export const BusinessDetailsAsideContainer = styled.aside`
  display: block;
  margin-left: 30px;
  flex-direction: column;
  padding-right: 20px;
`;

export const DetailsTextHeading = styled.h1`
  font-size: 36px;
  font-weight: 700;
`;
export const RatingsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;

export const RatingDeatailText = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding-left: 3px;
  color: #707070;
`;

export const HoursContainer = styled.div`
  display: flex;
`;

export const CheckMark = styled(IoIosCheckmarkCircle)`
  color: #009dff;
  margin-right: 0.2rem;
`;

export const ClosedIcon = styled(IoIosCloseCircle)`
  color: #e90808;
  margin-right: 0.2rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-self: flex-end;
  position: absolute;
  right: 0;
  bottom: 15px;
  margin-right: 1rem;
`;

export const ButtonMain = styled.button`
  width: 10rem;
  transition: all 0.2s ease-in-out;
  padding: 9px;
  margin-right: 1rem;
  color: white;
  font-size: 15px;
  font-weight: 600;
  border-radius: 0.3rem;
  background-color: #f43939;
  text-align: center;
  background-color: ${({ color }) => (color ? "white" : "#F43939")};
  color: ${({ textColor }) => (textColor ? "#767676" : "white")};
  outline: ${({ outline }) => (outline ? "1px solid black" : "white")};
  box-shadow: ${({ box }) => (box ? "0 0 0 2px #707070" : "none")};
  border: ${({ border }) => (border ? "1.8px solid #707070" : "none")};
  @media (max-width: 1200px) {
    width: 8.5rem;
    font-size: 14px;
    margin-right: 0.5rem;
  }
`;
export const ButtonText = styled.div`
  font-size: 15px;
  font-weight: 600;
`;

export const StarIcon = styled(TiStarOutline)`
  color: white;
  position: absolute;
  top: 0.6em;
  right: 0;
  left: 0.9rem;
  bottom: 0;
`;

export const RatingIconContainer = styled.div`
  display: flex;
  position: relative;
`;

export const StartBox = styled.div`
  height: 20px;
  width: 20px;
  background-color: green;
  margin-left: 2px;
`;

export const DotSeparator = styled.div`
  width: 5px;
  height: 5px;
  background: #2e2e2e;
  border-radius: 50%;
  align-self: center;
  margin: 0 2px;
`;
