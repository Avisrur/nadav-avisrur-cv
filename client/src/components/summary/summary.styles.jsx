import styled from "styled-components";
import { bounceIn, fadeIn } from "../../styles/animations";

export const SummeryContainer = styled.div`
  color: white;
  border-radius: 15px;
  border: 1px solid grey;
  border-bottom: 0px;
  width: 80%;
  text-align: center;
  background: #686868;
  padding: 10px;
  z-index: -1;
  box-shadow: ${({ hiddenOrVisible }) =>
    hiddenOrVisible === "hidden"
      ? null
      : `0px 5px 5px 10px rgba(0, 0, 0, 0.6)`};
  z-index: 1;
  position: relative;
  height: 52px;
  @media (max-width: 768px) {
    overflow-y: scroll;
  }
`;

export const SummarySpan = styled.div`
  position: absolute;
  top: -15px;
  left: -10px;
  background: #383838;
  border-radius: 15px;
  padding: 2px;
  animation-name: ${bounceIn};
  animation-duration: 2s;
  @media (max-width: 768px) {
    visibility: hidden;
  }
`;

export const SummaryContent = styled.span`
  animation-name: ${fadeIn};
  animation-duration: 5s;
  animation-timing-function: ease;
`;
