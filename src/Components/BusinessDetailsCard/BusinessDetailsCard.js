import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Icon from "@material-ui/core/Icon";
import StarIconF from "../../Assets/redratingstar.svg";
import StarIconE from "../../Assets/stariconempty3.svg";
import styled from "styled-components";
import {
  Container,
  MainContainer,
  ImageMain,
  BusinessDetailsAsideContainer,
  RatingsContainer,
  RatingDeatailText,
  DetailsTextHeading,
  ClaimedContainer,
  ClaimedText,
  HoursContainer,
  CheckMark,
  AddyContainer,
  AddyText,
  ButtonsContainer,
  ButtonMain,
  ButtonText,
  RatingIconContainer,
  DotSeparator,
  ClosedIcon,
} from "./BusinessDetailsCardStyles";

export const StarIconFilled = styled.img`
  width: 100%;
  height: 20px;
  @media screen and (max-width: 968px) {
    height: 17px;
  }
`;

export const StarIconEmpty = styled.img`
  width: 100%;
  height: 20px;
  @media screen and (max-width: 968px) {
    height: 17px;
  }
`;

const BusinessDetailsCard = ({ items }) => {
  const StyledRating = withStyles({
    iconEmpty: {
      marginLeft: "-1px",
    },
    iconFilled: {
      marginLeft: "-1px",
      color: "#FF523D",
    },
  })(Rating);
  console.log(items && items.location.formatted_address);
  return (
    <>
      <Container>
        <MainContainer key={items && items.id}>
          <ImageMain background={items && items.photos[0]} />

          <BusinessDetailsAsideContainer>
            <DetailsTextHeading>{items && items.name}</DetailsTextHeading>

            <RatingsContainer>
              <>
                <RatingIconContainer>
                  <StyledRating
                    defaultValue={items.rating}
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
                </RatingIconContainer>

                <RatingDeatailText>
                  {items && items.review_count}
                </RatingDeatailText>
              </>
            </RatingsContainer>
            <ClaimedContainer>
              <>
                {items && items.is_claimed === true ? (
                  <>
                    <CheckMark size={19} />
                    <ClaimedText fontWeight={"700"} color="checkMarkColor">
                      Claimed
                    </ClaimedText>
                  </>
                ) : (
                  <>
                    <ClosedIcon size={19} />
                    <ClaimedText fontWeight={"700"} color="closed">
                      Unclaimed
                    </ClaimedText>
                  </>
                )}
                <DotSeparator />
              </>
              <>
                <ClaimedText color={"textGreyColor"}>
                  {items && items.price}
                </ClaimedText>
                <DotSeparator />
              </>

              <>
                {items &&
                  items.categories.map((category) => (
                    <ClaimedText color={"textGreyColor"}>
                      {category.title}
                    </ClaimedText>
                  ))}
              </>
            </ClaimedContainer>
            <HoursContainer>
              <>
                {items && items.hours[0].is_open_now ? (
                  <ClaimedText fontWeight={"700"} color="claimedOrOpen">
                    Open Now{" "}
                  </ClaimedText>
                ) : (
                  <ClaimedText fontWeight={"700"} color="closed">
                    Closed Now
                  </ClaimedText>
                )}
              </>
            </HoursContainer>
          </BusinessDetailsAsideContainer>
          <>
            <AddyContainer>
              <AddyText>{items && items.location.formatted_address}</AddyText>
            </AddyContainer>
          </>

          <ButtonsContainer>
            <ButtonMain>
              <ButtonText>Write a Review</ButtonText>
            </ButtonMain>
            <ButtonMain
              textColor={"#767676"}
              color={"#08A05C"}
              border={"border"}
            >
              <ButtonText>Add Photo</ButtonText>
            </ButtonMain>
            <ButtonMain
              border={"border"}
              textColor={"#767676"}
              color={"#08A05C"}
            >
              <ButtonText>Share</ButtonText>
            </ButtonMain>
          </ButtonsContainer>

          <ButtonsContainer>
            <ButtonMain>
              <ButtonText>Write a Review</ButtonText>
            </ButtonMain>
            <ButtonMain
              textColor={"#767676"}
              color={"#08A05C"}
              border={"border"}
            >
              <ButtonText>Add Photo</ButtonText>
            </ButtonMain>

            <ButtonMain
              border={"border"}
              textColor={"#767676"}
              color={"#08A05C"}
            >
              <ButtonText>Share</ButtonText>
            </ButtonMain>
          </ButtonsContainer>
        </MainContainer>
      </Container>
    </>
  );
};

export default BusinessDetailsCard;
