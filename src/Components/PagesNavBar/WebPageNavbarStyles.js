import styled from "styled-components/macro";
import { FaRegBell } from "react-icons/fa";
import { BiMessageDetail, BiSearch } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";

export const NavContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 6rem;
  background-color: #ee2f2f;
  justify-content: space-between;
  padding: 0 5rem;
  align-items: center;
  overflow: hidden;
  z-index: 99999;
  position: sticky;
  top: 0;
  margin: 0 auto;

  @media screen and (max-width: 968px) {
    display: none;
  }
`;

export const NavLogoMain = styled.img`
  width: 70px;
  height: auto;
`;

export const LocationHeaderWrapper = styled.div`
  display: flex;
  background-color: #ee2f2f;
  height: 5rem;
  align-items: center;
  top: 0;
  z-index: 99999;
  position: sticky;
  justify-content: space-evenly;
  margin: 0 auto;
  @media screen and (max-width: 968px) {
    justify-content: space-between;
    padding: 0 1rem;
  }
`;

export const BackArrow = styled(IoIosArrowBack)`
  display: none;
  @media screen and (max-width: 968px) {
    display: flex;
    color: white;
  }
`;

export const LogoContainer = styled.div`
  flex-shrink: 0;
  padding: 0 20px;
  height: auto;
  display: flex;
  margin-left: 100px;
  @media screen and (max-width: 968px) {
    margin: 0;
  }
`;
export const LogoMain = styled.img`
  width: 70px;
  height: auto;
  margin-left: 0;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 300px;
  flex-shrink: 0;
  flex-wrap: nowrap;
  align-items: center;
  padding: 0 20px;
  margin-right: 100px;
  @media screen and (max-width: 968px) {
    display: none;
  }
`;

export const IconsText = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin-left: 20px;
  cursor: pointer;
  color: white;
`;
export const BellIcon = styled(FaRegBell)`
  margin-left: 20px;
  cursor: pointer;
  color: white;
`;

export const MessageIcon = styled(BiMessageDetail)`
  margin-left: 20px;
  cursor: pointer;
  color: white;
`;

export const SearchBarContainerMiddle = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: auto;
`;

export const SearchForm = styled.form`
  display: flex;
  padding: 10px;
  overflow: hidden;
`;

export const InputField = styled.input`
  border: 0px;
  min-width: 50rem;
  padding: 10px;

  @media screen and (min-width: 150px) and (max-width: 780px) {
    width: 95%;
    margin: 0 auto;
  }
`;

export const BurgerMenu = styled(HiMenu)`
  display: none;
  @media screen and (max-width: 968px) {
    display: flex;
    color: white;
    align-self: center;
    right: 2rem;
    bottom: 20px;
  }
`;

export const SearchIcons = styled(BiSearch)`
  display: none;
  @media screen and (max-width: 968px) {
    display: flex;
    color: white;
    align-self: center;
    left: 2rem;
    bottom: 20px;
  }
`;
