import styled from "styled-components/macro";

export const FooterContainer = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
  position: relative;
  display: flex;
  min-height: 100%;
  flex-shrink: 0;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  grid-gap: 5px;
  flex-wrap: wrap;
  margin: 3rem 0;
  justify-content: ${({ position }) => position};
  @media (max-width: 768px) {
    width: 10rem;
    /* align-items: flex-start; */
  }
`;

export const Column = styled.div`
  /* background-color: lightgreen; */
  display: flex;
  flex-direction: column;
  margin: 0 3rem;
  padding: 0.3rem;
  flex-wrap: wrap;

  justify-content: flex-start;

  @media (max-width: 768px) {
    margin: 0 auto;
    width: 100%;
    padding: 0 1.5rem;
  }
`;

export const Link = styled.div`
  margin: 0.6rem;

  font-size: 20px;
  text-decoration: none;
`;

export const FooterTitle = styled.h1`
  font-size: 15px;
  color: #f43939;
  font-weight: 700;
`;

export const FooterList = styled.ul`
  margin: 6px 0;
  font-size: 13px;
  color: #5b5b5b;
  cursor: pointer;
`;

export const FooterLogo = styled.img`
  display: flex;
  flex-direction: column;
  height: 35px;
  transition: all 500ms ease 0s;
  margin-left: 15rem;
  @media (max-width: 992px) {
    display: none;
  }
`;
