import React from "react";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const Container = styled.div`
  display: flex;
  padding: 3rem 0;
  align-items: center;
  justify-content: center;
`;

export const LeftArrow = styled(FiChevronLeft)`
  color: #717171;
`;

export const RightArrow = styled(FiChevronRight)`
  color: #717171;
`;

export const PageNumber = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin: 0.5rem;
  color: #717171;
  cursor: pointer;
`;

// not functional yet..

const Pagination = () => {
  return (
    <Container>
      <LeftArrow size={20} />
      <PageNumber>1</PageNumber>
      <PageNumber>2</PageNumber>
      <PageNumber>3</PageNumber>
      <PageNumber>4</PageNumber>
      <PageNumber>5</PageNumber>
      <PageNumber>6</PageNumber>
      <PageNumber>7</PageNumber>
      <PageNumber>8</PageNumber>
      <PageNumber>9</PageNumber>
      <PageNumber>10</PageNumber>
      <RightArrow size={20} />
    </Container>
  );
};

export default Pagination;
