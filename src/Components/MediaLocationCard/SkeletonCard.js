import React from "react";

import {
  CardContainer,
  ImageContainer,
  CardDetailsContainer,
  ConatinerText,
  LocationInfoContainer,
  ItemsDetailsContainer,
  LocationPrice,
  LineDivider,
  ServicesOfferdContainer,
  RatingContainer,
  ReviewsText,
} from "./MediaLocationCardStyles";
import Skeleton from "@material-ui/lab/Skeleton";
const SkeletonCard = () => {
  return (
    <CardContainer>
      <ImageContainer>
        <Skeleton
          animation="wave"
          variant="rect"
          width={"100%"}
          height={"100%"}
        />
      </ImageContainer>
      <CardDetailsContainer>
        <ConatinerText>
          {" "}
          <Skeleton
            animation="wave"
            variant="rect"
            width={"180px"}
            height={"1rem"}
          />
        </ConatinerText>
        <RatingContainer>
          <ReviewsText>
            <Skeleton
              animation="wave"
              variant="rect"
              height={"1rem"}
              width={"100px"}
            />
          </ReviewsText>
        </RatingContainer>

        <LocationInfoContainer>
          <ItemsDetailsContainer>
            <Skeleton
              animation="wave"
              variant="rect"
              height={"1rem"}
              width={"130px"}
            />
          </ItemsDetailsContainer>

          <LocationPrice>
            <Skeleton
              animation="wave"
              variant="rect"
              height={"1rem"}
              width={"70px"}
            />
          </LocationPrice>
        </LocationInfoContainer>
        <LineDivider />
        <ServicesOfferdContainer>
          <Skeleton
            animation="wave"
            variant="rect"
            height={"1rem"}
            width={"80%"}
          />
        </ServicesOfferdContainer>
      </CardDetailsContainer>
    </CardContainer>
  );
};

export default SkeletonCard;
