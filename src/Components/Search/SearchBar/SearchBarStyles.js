import styled from "styled-components/macro";

import { IoSearchSharp } from "react-icons/io5";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0 30px;
  margin: 0 auto;
  @media screen and (max-width: 968px) {
    display: none;
  }
`;

export const SearchUnitOne = styled.form`
  display: flex;
  overflow: hidden;
`;

export const SearchUnit2 = styled.form`
  display: flex;
  overflow: hidden;
  position: relative;
`;
export const SearchSuggestionMainInput = styled.input`
  transition: all 0.2s ease-in-out;
  display: flex;
  height: 45px;
  outline: none;
  color: #7a7a7a;
  color: black;
  font-weight: 400;
  border: 0px;
  min-width: 25rem;
  padding: 10px;
  flex-grow: 1;
  padding-left: 20px;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
  background-color: white;
  ::placeholder {
    color: #a0a0a0;
    font-weight: 400;
  }
  @media screen and (max-width: 989px) {
    font-size: 14px;
    width: 85%;
  }

  @media screen and (min-width: 150px) and (max-width: 780px) {
    width: 85%;
    margin: 0 auto;
  }
`;

export const SearchLocationInput = styled.input`
  transition: all 0.2s ease-in-out;
  display: flex;
  outline: none;
  color: black;
  font-weight: 400;
  height: 45px;
  padding-left: 20px;
  right: 45px;
  background-color: white;
  border: 0px;
  min-width: 25rem;

  ::placeholder {
    color: #a0a0a0;
    font-weight: 400;
  }

  @media screen and (max-width: 989px) {
    font-size: 14px;
    min-width: 21rem;
  }
  @media screen and (min-width: 150px) and (max-width: 780px) {
    width: 95%;
    margin: 0 auto;
  }
`;

export const Line = styled.div`
  content: "";
  top: 0px;
  right: 0;
  left: 0;
  bottom: 0;
  width: 0.1rem;
  position: absolute;
  background-color: #eaeaea;
`;

export const Line3 = styled.div`
  content: "";
  top: 0px;
  right: 0;
  left: 24.8rem;
  bottom: 0;
  width: 0.1rem;
  position: absolute;
  background-color: #eaeaea;
`;

export const SearchSuggestionAside = styled.button`
  background-color: red;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
  position: relative;
  left: 20px;
  background-color: white;
  height: 45px;
  padding: 0 20px;
  font-weight: 700;
  color: grey;
`;

export const LocationInputAside = styled.button`
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  height: 45px;
  padding: 0 10px;
  background-color: ${({ color }) => color};
  min-width: 3rem;
  overflow: hidden;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const SearchIcon = styled(IoSearchSharp)`
  position: relative;
  left: 0;
  top: 1px;
  color: ${({ iconColor }) => iconColor};
`;
export const SearchForm = styled.form`
  display: flex;
  padding: 10px;
  overflow: hidden;
`;

export const Line2 = styled.div`
  content: "";
  width: 3px;
  position: relative;
  right: 2rem;
  background-color: black;
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
