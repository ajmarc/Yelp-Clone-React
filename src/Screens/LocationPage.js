import React from "react";
import { useGetResultsByTermLocationQuery } from "../Services/rtkApi";
import { useLocation } from "react-router-dom";
import MediaLocationCard from "../Components/MediaLocationCard/MediaLocationCard";
import styled from "styled-components/macro";
import Maps from "../Components/GoogleMaps/Maps";
import SkeletonCard from "../Components/MediaLocationCard/SkeletonCard";
import LocationOptions from "../Components/Location/LocationOptions";
import Skeleton from "@material-ui/lab/Skeleton";
import Pagination from "../Components/Pagination/Pagination";
import MainFooter from "../Components/MainFooter/MainFooter";

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

export const LeftCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
  font-size: 24px;
  color: black;
  height: 100%;
  padding: 2rem;
  top: 50px;
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

const MainRightContainer = styled.div`
  display: flex;
  height: 45%;
  align-items: stretch;
  position: sticky;
  top: 0;
  height: 100%;
  overflow: hidden;
  justify-content: center;
  width: 100%;
  flex: 2.5;
  max-width: 53%;
  @media screen and (max-width: 967px) {
    min-width: 100%;
    display: flex;
    position: static;
    padding: 0.5rem;
    justify-content: center;
    align-self: top;
    height: auto;
    align-items: bottom;
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
  @media screen and (max-width: 968px) {
    font-size: 18px;
    padding: 1rem 0;
  }
`;

export const Spinner = styled.svg`
  display: inline-block;
  width: 100px;
  height: 100px;
  border: 7px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #ee2f2f;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @media screen and (max-width: 968px) {
    width: 65px;
    height: 65px;
  }
`;

const SpinnnerContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  min-width: auto;

  @media screen and (max-width: 968px) {
    height: auto;
    padding: 3rem;
  }
`;

const LocationPage = () => {
  // fix issuse where user goes to the search route and the undefiend error comes up
  //because it's trying to access the search term before putting them in. make a default result

  const { searchTerm, locations } = JSON.parse(
    window.localStorage.getItem("searchObj")
  );

  let location = useLocation();

  const params = new URLSearchParams(location.search);
  console.log(params);
  const term = params.get("find_desc");
  const locationParam = params.get("find_loc");

  console.log("locationPageParms", term, locationParam);

  const { data, isLoading, isFetching } = useGetResultsByTermLocationQuery(
    {
      name: searchTerm && searchTerm,
      loc: locations && locations,
    }
    // { refetchOnMountOrArgChange: true } // may need to turn on.. problem for later...
  );

  console.log(data && data);

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
                    data.businesses.slice(0, 1).map((i, index) => (
                      <>
                        <HeaderMainText key={index}>
                          {` Best ${searchTerm} near ${i.location.city},${i.location.state} ${i.location.zip_code}`}
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
              <Pagination />
            </LeftCardContainer>

            <MainFooter />
          </MainLeftContainer>
          <MainRightContainer>
            {isLoading ? (
              <SpinnnerContainer>
                <Spinner />
              </SpinnnerContainer>
            ) : (
              <Maps items={data} />
            )}
          </MainRightContainer>
        </WrapperTest>
      </MainWrapper>
    </>
  );
};

export default LocationPage;
// update the number of reviews on the cards they are hard coded as 1893...
