import React from "react";
import {
  Container,
  MainContainer,
  BusinessDetailsAsideContainer,
  RatingsContainer,
  DetailsTextHeading,
  ClaimedContainer,
  HoursContainer,
  AddyContainer,
  AddyText,
  ButtonsContainer,
  RatingIconContainer,
} from "./BusinessDetailsCardStyles";

import Skeleton from "@material-ui/lab/Skeleton";

const BusinessDetailsCardSkeleton = () => {
  return (
    <Container>
      <MainContainer>
        <Skeleton
          animation="wave"
          variant="circle"
          width={"170px"}
          height={"170px"}
        />

        <BusinessDetailsAsideContainer>
          <DetailsTextHeading>
            <Skeleton
              animation="wave"
              variant="rect"
              width={"200px"}
              height={"15px"}
            />
          </DetailsTextHeading>

          <RatingsContainer>
            <>
              <RatingIconContainer>
                <Skeleton
                  animation="wave"
                  variant="rect"
                  width={"100px"}
                  height={"15px"}
                  style={{ marginTop: "0.5rem" }}
                />
              </RatingIconContainer>
            </>
          </RatingsContainer>
          <ClaimedContainer>
            <Skeleton
              animation="wave"
              variant="rect"
              width={"150px"}
              height={"15px"}
            />
          </ClaimedContainer>
          <HoursContainer>
            <Skeleton
              animation="wave"
              variant="rect"
              width={"65px"}
              height={"15px"}
              style={{ marginTop: "10px" }}
            />
          </HoursContainer>
        </BusinessDetailsAsideContainer>
        <>
          <AddyContainer>
            <AddyText></AddyText>
          </AddyContainer>
        </>

        <ButtonsContainer>
          <Skeleton
            animation="wave"
            variant="rect"
            width={"120px"}
            height={"40px"}
            style={{ marginRight: "2rem" }}
          />
          <Skeleton
            animation="wave"
            variant="rect"
            width={"120px"}
            height={"40px"}
            style={{ marginRight: "2rem" }}
          />

          <Skeleton
            animation="wave"
            variant="rect"
            width={"120px"}
            height={"40px"}
            style={{ marginRight: "2rem" }}
          />
        </ButtonsContainer>
      </MainContainer>
    </Container>
  );
};

export default BusinessDetailsCardSkeleton;
