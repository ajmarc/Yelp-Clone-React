import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import {
  CardContainer,
  ImageContainer,
  CardImage,
  CardDetailsContainer,
  ConatinerText,
  LocationInfoContainer,
  ItemsDetailsContainer,
  TextBackground,
  LotationTransactions,
  LocationPrice,
  LineDivider,
  ServicesOfferdContainer,
  ServiceText,
  CheckMark,
  RatingContainer,
  ReviewsText,
} from "./MediaLocationCardStyles";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Icon from "@material-ui/core/Icon";
import Rating from "@material-ui/lab/Rating";
import StarIconF from "../../Assets/redratingstar.svg";
import StarIconE from "../../Assets/stariconempty3.svg";
import { useHistory } from "react-router-dom";

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

const MediaLocationCard = ({ items }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const history = useHistory();

  const ratingProps = {
    size: matches ? "small" : "none",
  };
  const StyledRating = withStyles({
    iconEmpty: {
      marginLeft: "-1px",
    },
    iconFilled: {
      marginLeft: "-1px",
      color: "#F43939",
    },
  })(Rating);

  const handleBusinessClick = (id) => {
    history.push({
      pathname: `/businesses/${id}`,
    });
  };

  return (
    <>
      {items &&
        items.businesses.slice(0, 10).map((item, index) => (
          <CardContainer
            onClick={() => handleBusinessClick(item.id)}
            key={index}
          >
            <ImageContainer>
              <CardImage src={item.image_url} />
            </ImageContainer>
            <CardDetailsContainer>
              <ConatinerText>{`${index + 1}. ${item.name}`}</ConatinerText>
              <RatingContainer>
                <StyledRating
                  defaultValue={item.rating}
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
                  {...ratingProps}
                />
                <ReviewsText>{item.review_count}</ReviewsText>
              </RatingContainer>

              <LocationInfoContainer>
                <ItemsDetailsContainer>
                  {item.categories &&
                    item.categories.map((category, index) => (
                      <TextBackground key={index}>
                        <LotationTransactions>
                          {category.title}
                        </LotationTransactions>
                      </TextBackground>
                    ))}
                </ItemsDetailsContainer>

                <LocationPrice>{item.price}</LocationPrice>
              </LocationInfoContainer>
              <LineDivider />
              <ServicesOfferdContainer>
                {item &&
                  item.transactions.map((i, index) => {
                    if (
                      i === "delivery" ||
                      "pickup" ||
                      "restaurant_reservation"
                    ) {
                      return (
                        <>
                          <CheckMark size={18} />
                          <ServiceText key={index}>{i}</ServiceText>
                        </>
                      );
                    }
                  })}
              </ServicesOfferdContainer>
            </CardDetailsContainer>
          </CardContainer>
        ))}
    </>
  );
};

export default MediaLocationCard;
