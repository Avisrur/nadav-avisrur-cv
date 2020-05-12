import styled from "styled-components";
import { fadeIn } from "../../styles/animations";

export const TabContainer = styled.div`
  padding: 0px;
  border-radius: 15px;
  width: 82%;
  height: 36vh;
  border: 1px solid grey;
  background: #686868;
  box-shadow: ${({ hiddenOrVisible }) =>
    hiddenOrVisible === "hidden" || hiddenOrVisible === "start"
      ? null
      : `0px 5px 5px 10px rgba(0, 0, 0, 0.6)`};
  z-index: 3;
  @media (max-width: 768px) {
    width: 87%;
  }
`;

export const TabsList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  /* visibility: ${({ hiddenOrVisible }) => hiddenOrVisible}; */
  height: 50px;

`;

export const ButtonContainer = styled.button`
  animation-name: ${fadeIn};
  animation-duration: ${({ duration }) => duration};
  animation-timing-function: linear;
`;

export const TabContent = styled.div`
  height: 75%;
  text-align: center;
`;
