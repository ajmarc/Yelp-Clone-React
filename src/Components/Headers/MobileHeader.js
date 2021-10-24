import React, { useState, useRef } from "react";
import styled from "styled-components";
import mobileLogo from "../../Assets/final_asset.svg";
import useOutsideClick from "../../Hooks/useOutsideClick";
import { useHistory, withRouter } from "react-router-dom";
import {
  MainMobileLogo,
  SearchBarContainerItem,
  SearchBarContainerLocation,
  SearchWrapper,
  MobileHeroBanner,
  IconItemsContainer,
  IconImage,
  IconTitle,
  RestaurantCategoryItems,
} from "./MobileHeaderStyles";

export const MobileBannerContaier = styled.div`
  display: ${(props) => (props.visibility ? "none" : "flex")};
  background-color: #ee2f2f;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.6rem;
  height: height;
  @media screen and (min-width: 967px) {
    display: none;
  }
`;

const MobileHeader = () => {
  let history = useHistory();

  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("San Francisco,CA");
  const [isFocus, setIsFocus] = useState(false);

  const boxRef = useRef(null);
  const boxOutsideClick = useOutsideClick(boxRef);

  const onSubmit = (e) => {
    try {
      e.preventDefault();
      const searchObj = { searchTerm: term, locations: location };
      window.localStorage.setItem("searchObj", JSON.stringify(searchObj));
      history.push(`/search/${term}`);
      setTerm("");
    } catch (error) {
      console.log(error);
    }
  };

  const getReviewbyIndex = (item_index) => {
    let correspondingReview;
    let mainName;
    RestaurantCategoryItems.forEach((res, index) => {
      if (index === item_index) {
        correspondingReview = res.category;
        mainName = res.title;

        const categoriesSearchObj = {
          category: correspondingReview,
          categoryName: mainName,
        };
        window.localStorage.setItem(
          "itemNames",
          JSON.stringify(categoriesSearchObj)
        );
        localStorage.removeItem("searchObj");
        history.push({
          pathname: `/categories/${correspondingReview}`,
        });
      }
    });
    return correspondingReview;
  };

  return (
    <>
      <MobileBannerContaier ref={boxRef}>
        <MainMobileLogo src={mobileLogo} />
        <SearchWrapper onSubmit={onSubmit}>
          <SearchBarContainerItem
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            onFocus={() => setIsFocus(true)}
            placeholder={"Search for bars,restaurants,nightlife..."}
          />
          {isFocus ? (
            <SearchBarContainerLocation
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              visibility={boxOutsideClick}
              placeholder={"Location,city,state"}
            />
          ) : (
            ""
          )}

          <button type="submit"></button>
        </SearchWrapper>
      </MobileBannerContaier>
      <MobileHeroBanner>
        {RestaurantCategoryItems.map((item, index) => (
          <IconItemsContainer onClick={() => getReviewbyIndex(item.id)}>
            <IconImage src={item.img} />
            <IconTitle>{item.title}</IconTitle>
          </IconItemsContainer>
        ))}
      </MobileHeroBanner>
    </>
  );
};

export default withRouter(MobileHeader);
