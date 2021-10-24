import styled from "styled-components";

export const WrapperMain = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  max-height: 30rem;
  /* background-color: red; */
  margin-bottom: 1.5rem;
  @media screen and (max-width: 967px) {
    display: none;
  }
`;

export const OptionsContainerTop = styled.div`
  display: flex;
  min-width: 100%;
`;

export const OptionsContainerBottom = styled.div`
  display: flex;
  min-width: 100%;
  margin: 2rem 0;
`;

export const OptionsButtonContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 0.2rem 0;
  min-width: 7.5em;
  border: 1px solid #e1e1e1;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.2rem;
  margin-right: 1rem;
  flex-shrink: 1;
  cursor: pointer;

  background-color: white;
  &&:hover {
    background-color: #d6d6da;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
  }
`;

export const ContainersText = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-left: 1rem;
  letter-spacing: 0.2px;
`;

export const IconMain = styled.img`
  height: 100%;
  width: 4rem;
`;
