import React from "react";
import {
  WrapperMain,
  OptionsContainerBottom,
  OptionsButtonContainer,
  ContainersText,
  IconMain,
} from "./LocationOptionsStyles";

const LocationOptions = () => {
  return (
    <WrapperMain>
      <OptionsContainerBottom>
        <OptionsButtonContainer>
          <ContainersText>Delivery</ContainersText>
          <IconMain
            src={
              "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_web/74612a9036a6/assets/img/svg_illustrations/delivery_70x56_v2.svg"
            }
          />
        </OptionsButtonContainer>
        <OptionsButtonContainer>
          <ContainersText>Takeout</ContainersText>
          <IconMain
            src={
              "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_web/c0e9ce1a8aa7/assets/img/svg_illustrations/takeout_70x56_v2.svg"
            }
          />
        </OptionsButtonContainer>
      </OptionsContainerBottom>
    </WrapperMain>
  );
};

export default LocationOptions;
