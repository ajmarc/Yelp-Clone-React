import React, { useState } from "react";
import styled from "styled-components/macro";
import { useLayer } from "react-laag";
import Rating from "@material-ui/lab/Rating";
import { withStyles } from "@material-ui/core/styles";
// import { useHistory } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import StarIconF from "../../Assets/redratingstar.svg";
import StarIconE from "../../Assets/stariconempty3.svg";

import {
  MainCardWrapper,
  ImageContainer,
  TextMain,
  RatingsContainer,
  MainWrapper,
  ImgageMainContainer,
} from "./MarkerStyles";
const Circle = styled.div`
  border-radius: 50%;
  color: #fff;
  height: 2.6em;
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50% 50% 50% 0;
  background: #ee2f2f;
  position: absolute;
  transform: rotate(-45deg);
  left: 50%;
  top: 50%;
  margin: -20px 0 0 -20px;
  cursor: pointer;
`;

const CircleText = styled.span`
  text-align: center;
  height: 14px;
  margin: 8px 0 0 8px;
  position: absolute;
  transform: rotate(45deg);
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  font-size: 13px;
  font-weight: 700;
`;

const InfoBox = styled.div`
  display: flex;
  position: relative;
`;

const StyledRating = withStyles({
  iconEmpty: {
    alignItems: "center",
    marginRight: "-2px",
  },
  iconFilled: {
    alignItems: "center",
    color: "#FF523D",
    marginRight: "-2px",
  },
})(Rating);

export const StarIconFilled = styled.img`
  width: 100%;
  height: 19px;
  /* margin-top: 5px; */
  @media screen and (max-width: 968px) {
    height: 18px;
  }
`;

export const StarIconEmpty = styled.img`
  width: 100%;
  height: 19px;
  /* margin-top: 5px; */
  @media screen and (max-width: 968px) {
    height: 18px;
  }
`;

export const TextOptionContainer = styled.div`
  display: flex;
  padding: 0.2rem 0;
  margin-right: 0.4rem;
  max-width: auto;
  word-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  max-height: 20px;
  white-space: nowrap;
  flex-wrap: wrap;
  word-wrap: break-word;
`;

const MyMarker = ({
  number,
  carditems: { name, image_url, review_count, rating, categories },
}) => {
  const [isOpen, setOpen] = useState(false);

  const InfoWindow = () => {
    return (
      <MainWrapper>
        <MainCardWrapper>
          <ImgageMainContainer>
            <ImageContainer src={image_url} />
          </ImgageMainContainer>

          <TextMain fontSize={"18"} isBold={"700"}>
            {name}
          </TextMain>
          <RatingsContainer>
            <StyledRating
              defaultValue={rating}
              precision={0.5}
              readOnly
              icon={
                <Icon>
                  <StarIconFilled src={StarIconF} />
                </Icon>
              }
              emptyIcon={
                <Icon>
                  <StarIconEmpty src={StarIconE} />
                </Icon>
              }
            />

            <TextMain color={"#D6D6DA"}>{review_count}</TextMain>
          </RatingsContainer>
          {categories &&
            categories.slice(0, 1).map((items) => (
              <TextOptionContainer>
                <TextMain color={"#D6D6DA"}>{items.title}</TextMain>
              </TextOptionContainer>
            ))}
        </MainCardWrapper>
      </MainWrapper>
    );
  };

  const { triggerProps, layerProps, renderLayer } = useLayer({
    isOpen,
    triggerOffset: 15,
    overflowContainer: false,

    onDisappear: (type) => {
      if (type === "full") setOpen(false);
    },
  });

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <>
        <Circle>
          <CircleText
            onMouseOver={() => setOpen((prev) => !prev)}
            onMouseLeave={() => setOpen((prev) => !prev)}
            {...triggerProps}
          >
            {number}
          </CircleText>
        </Circle>
        {isOpen &&
          renderLayer(
            <InfoBox {...layerProps}>
              <InfoWindow onClose={onClose} />
            </InfoBox>
          )}
      </>
    </>
  );
};

export default MyMarker;
