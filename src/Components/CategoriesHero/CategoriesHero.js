import React, { useState } from "react";
import {
  BannerWrapper,
  HeaderText,
  HeaderContainer,
  TileMain,
  IconMain,
  TiteTitle,
  RestaurantItems,
  IconTileContainerGrid,
} from "./CategoriesHeroStyles";

import { useHistory } from "react-router-dom";

const HeroBanner = () => {
  const [mouseHover, setmouseHover] = useState(null);

  const stylesMain = {
    boxShadow: "1px 1px 12px rgba(156, 156, 156, 0.4)",
  };

  const cardClassname = (index) => {
    if (index === mouseHover) {
      return stylesMain;
    } else {
      return null;
    }
  };

  const history = useHistory();

  const getReviewbyIndex = (item_index) => {
    let correspondingReview;
    let mainName;
    RestaurantItems.forEach((res, index) => {
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
    <BannerWrapper>
      <HeaderContainer>
        <HeaderText>Browse Businesses by Category</HeaderText>
      </HeaderContainer>
      <IconTileContainerGrid>
        {RestaurantItems.map((items, i) => {
          return (
            <TileMain
              onClick={() => getReviewbyIndex(items.id)}
              key={items.id}
              style={cardClassname(i)}
              onMouseEnter={() => setmouseHover(i)}
              onMouseLeave={() => setmouseHover(null)}
            >
              <IconMain src={items.img} />
              <TiteTitle>{items.title}</TiteTitle>
            </TileMain>
          );
        })}
      </IconTileContainerGrid>
    </BannerWrapper>
  );
};

export default HeroBanner;
