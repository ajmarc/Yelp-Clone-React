import styled from "styled-components/macro";
import { FiCheck, FiX } from "react-icons/fi";
export const CardContainer = styled.div`
  display: flex;
  background-color: white;
  max-width: 930px;
  max-height: 365px;
  min-height: 270px;
  padding: 1.2rem;
  margin: 0.5rem 0;
  width: 100%;
  border: 1.5px solid #eeeeef;
  border-radius: 4px;
  align-items: center;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  @media screen and (max-width: 668px) {
    flex-direction: column;
    padding: 1.2rem;
    align-items: flex-start;
  }
`;

export const ImageContainer = styled.div`
  display: inherit;
  height: 200px;
  min-width: 205px;
  border-radius: 5px;
  object-fit: contain;

  @media (max-width: 668px) {
    display: flex;
    min-width: 130px;
    height: 140px;
  }
`;
export const CardImage = styled.img`
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const CardDetailsContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: column;
  padding: 0 1.5rem;
  width: 100%;

  @media screen and (max-width: 668px) {
    flex-direction: column;
    padding: 0;
    margin-top: 0.5rem;
  }
`;

export const ConatinerText = styled.div`
  font-size: 21px;
  font-weight: 700;
  @media (max-width: 668px) {
    font-size: 18px;
  }
`;

export const ConatinerTextSmall = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-right: 10px;
`;

export const LocationInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 0;
  color: #666666;
  align-items: center;
  margin-top: 0.2rem;
`;

export const ItemsDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
`;
export const TextBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  opacity: 2;
  transition: background-color 0.2s ease;
  height: 20px;
  background-color: #f4f4f4;
  padding: 5px 4px;
  margin: 0 2px;

  &:hover {
    background-color: #dedede;
  }
`;
export const LotationTransactions = styled.div`
  color: #757280;
  font-size: 13px;
  font-weight: 600;
  padding: 0 3px;
  text-transform: capitalize;
  flex-wrap: nowrap;

  @media (max-width: 968px) {
    font-size: 12px;
  }
`;
export const LocationPrice = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #757280;
  margin-left: 3px;
`;

export const LineDivider = styled.div`
  margin: 0.7rem 0;
  background-color: #f7f6f9;
  width: 100%;
  height: 2.5px;
`;

export const ServicesOfferdContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ServiceText = styled.div`
  margin: 0 4px;
  color: black;
  font-size: 14px;
  font-weight: 600;
  text-transform: capitalize;
`;

export const CheckMark = styled(FiCheck)`
  color: #00c03a;
`;
export const NoCheckMark = styled(FiX)`
  color: #ee2f2f;
`;

export const RatingContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 0.5rem;
`;

export const ReviewsText = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #757280;
`;
