import styled from "styled-components/macro";

export const MainWrapper = styled.div`
  border-radius: 20%;
  display: flex;
  margin: 0 auto;
  padding: 10px;
  align-items: center;
  display: flex;

  @media screen and (max-width: 968px) {
    display: none;
  }
`;
export const MainCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 310px;
  min-height: 255px;
  position: absolute;
  top: 75px;
  right: 0;
  max-width: 250px;
  background-color: white;
  min-width: 220px;
  max-width: 220px;
  padding: 1rem;
  outline: 0.4px solid #d6d6da;
  border-radius: 0.5rem;
  z-index: 99999;
  align-items: center;

  /* margin: 5px 0; */
`;

export const ImgageMainContainer = styled.div`
  display: flex;
  max-width: 260px;
  max-height: 150px;
`;

export const ImageContainer = styled.img`
  min-width: 100%;
  max-width: 100%;
  outline: none;
  object-fit: cover;
  margin-bottom: 0.5rem;
`;

export const TextMain = styled.p`
  font-size: ${(props) => (props.fontSize ? "18px" : "13px")};
  font-weight: ${(props) => (props.isBold ? "700" : "500")};
  color: ${(props) => (props.color ? "#7B7B7B" : "black")};
`;

export const RatingsContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0.3rem 0;
`;
