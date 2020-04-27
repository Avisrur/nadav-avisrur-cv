import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const TabContainer = styled.div`
  border-radius: 15px;
  width: 82%;
  overflow: hidden;
  border: 1px solid grey;
  background: blueviolet;
  box-shadow: ${({ hiddenOrVisible }) =>
    hiddenOrVisible === "hidden"
      ? null
      : `0px 5px 5px 10px rgba(0, 0, 0, 0.6)`};
`;

export const TabsList = styled.div`
  display: flex;
  justify-content: space-evenly;
  visibility: ${({ hiddenOrVisible }) => hiddenOrVisible};
`;
