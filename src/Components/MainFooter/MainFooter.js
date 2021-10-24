import React from "react";
import {
  FooterContainer,
  Column,
  Row,
  FooterTitle,
  FooterList,
} from "../MainFooter/MainFooterStyles";
const MainFooter = ({ Footerplace }) => {
  return (
    <FooterContainer>
      <Row position={Footerplace}>
        <Column>
          <FooterTitle>About </FooterTitle>
          <FooterList>About Yelp</FooterList>
          <FooterList>Press</FooterList>
          <FooterList>Terms of Service</FooterList>
        </Column>
        <Column>
          <FooterTitle>More</FooterTitle>
          <FooterList>Yelp Mobile</FooterList>
          <FooterList>Developers</FooterList>
          <FooterList>Events</FooterList>
        </Column>
        <Column>
          <FooterTitle>Discover</FooterTitle>
          <FooterList>New Collections</FooterList>
          <FooterList>Talk</FooterList>
          <FooterList>Support</FooterList>
        </Column>
        <Column>
          <FooterTitle>Yelp for Business</FooterTitle>
          <FooterList>Advertise on Yelp</FooterList>
          <FooterList>Yelp Blog for Business</FooterList>
        </Column>
      </Row>
    </FooterContainer>
  );
};

export default MainFooter;
