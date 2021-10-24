import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2rem;
`;

export const Container = styled.div`
  width: 100%;
  height: 350px;

  display: flex;
  @media (max-width: 970px) {
    flex-direction: column;
    width: 100%;
    min-width: 100%;
    height: 100%;
  }
`;

export const BannerTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const BannerTitle = styled.div`
  font-weight: 700;
  font-size: 21px;
  color: #f43939;
  text-align: center;
  margin-top: 40px;

  @media (max-width: 970px) {
    font-size: 18px;
  }
`;
export const TextAlert = styled.div`
  align-self: center;
  font-weight: 700;
  font-size: 14px;

  @media (max-width: 970px) {
    font-size: 12px;
  }
`;

export const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 990px;
  height: auto;
  @media (max-width: 970px) {
    flex-direction: column;
    width: 100%;
    min-width: 100%;

    min-height: 100%;
    height: auto;
  }
`;

export const BannerContainer = styled.a`
  display: flex;
  justify-content: center;
  outline: 1px solid #e5e5e5;
  padding: 30px 0px;
  cursor: pointer;
  max-width: 990px;
  margin: 5px 15px;
  flex-direction: column;
`;

export const AdPicture = styled.img`
  height: 100%;
  width: 60%;
  align-self: center;

  @media (max-width: 970px) {
    width: 45%;
  }
`;
