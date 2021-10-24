import React from "react";
import useGeoLocation from "../Hooks/useGeoLocation";
import MediaLocationCard from "../Components/MediaLocationCard/MediaLocationCard";
import styled from "styled-components/macro";
import Maps from "../Components/GoogleMaps/Maps";
import SkeletonCard from "../Components/MediaLocationCard/SkeletonCard";
import LocationOptions from "../Components/Location/LocationOptions";
import Skeleton from "@material-ui/lab/Skeleton";
import MainFooter from "../Components/MainFooter/MainFooter";

import { useGetResultByLatitudeLongitudeQuery } from "../Services/rtkApi";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
`;

export const WrapperTest = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 967px) {
    flex-direction: column;
    flex-direction: column-reverse;
  }
`;

export const LeftCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
  font-size: 24px;
  color: black;
  height: 100%;
  padding: 0 3rem;
  top: 50px;
  flex: 2;
  z-index: 1;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  @media screen and (max-width: 967px) {
    margin: 0 auto;
    padding: 1rem;
    align-self: center;
    min-width: auto;
  }
`;

const MainLeftContainer = styled.div`
  margin-top: 5.5rem;
  display: flex;
  justify-content: center;
  align-items: top;
  font-size: 24px;
  color: black;
  height: 100%;
  top: 50px;
  flex: 2;
  z-index: 1;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: rgba(149, 157, 165, 0.2) 10px 10px 30px;
`;

const MainRightContainer = styled.div`
  display: flex;
  flex: 1.5;
  width: 50%;
  height: 45%;
  align-items: stretch;
  position: sticky;
  top: 0;
  height: 100%;
  min-width: 50%;
  overflow: hidden;
  @media screen and (max-width: 967px) {
    min-width: 100%;
    display: flex;
    position: static;
    padding: 0.5rem;
    justify-content: flex-start;
    align-self: top;
    height: auto;
    align-items: bottom;
    margin: auto;
  }
`;

export const HeaderMainTextContainer = styled.div`
  display: inline-flex;
  text-align: right;
  align-self: flex-start;
  padding-bottom: 0.5;
`;

export const HeaderMainText = styled.h1`
  font-weight: 700;
  font-size: 23px;
  text-transform: capitalize;
`;

const CategoriesPage = () => {
  const { location } = useGeoLocation();
  const { latitude, longitude } = location || {};

  let { category, categoryName } = JSON.parse(
    window.localStorage.getItem("itemNames")
  );
  console.log(latitude, longitude);

  const { data, isLoading, isFetching } = useGetResultByLatitudeLongitudeQuery({
    term: category,
    lat: latitude,
    lng: longitude,
  });

  console.log(category);
  const skeletonArray = Array(10).fill("");

  return (
    <>
      <MainWrapper>
        <WrapperTest>
          <MainLeftContainer>
            <LeftCardContainer>
              <HeaderMainTextContainer>
                <>
                  {isLoading ? (
                    <Skeleton
                      animation="wave"
                      variant="rect"
                      width={"350px"}
                      height={"30px"}
                      style={{ marginBottom: "1rem" }}
                    />
                  ) : (
                    data &&
                    data.businesses.slice(0, 1).map((i) => (
                      <>
                        <HeaderMainText key={i}>
                          {` The Best ${categoryName} in ${i.location.city},${i.location.state}`}
                        </HeaderMainText>
                      </>
                    ))
                  )}
                </>
              </HeaderMainTextContainer>

              {isLoading ? (
                <Skeleton
                  animation="wave"
                  variant="rect"
                  width={"450px"}
                  height={"45px"}
                  style={{ marginBottom: "1rem" }}
                />
              ) : (
                <LocationOptions />
              )}
              {isLoading || isFetching ? (
                skeletonArray.map(() => (
                  <>
                    <SkeletonCard />
                  </>
                ))
              ) : (
                <MediaLocationCard items={data} />
              )}
            </LeftCardContainer>

            <MainFooter />
          </MainLeftContainer>
          <MainRightContainer>
            <Maps items={data} />
          </MainRightContainer>
        </WrapperTest>
      </MainWrapper>
    </>
  );
};

export default CategoriesPage;
