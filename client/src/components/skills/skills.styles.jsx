import styled from "styled-components";
import { bounceIn, bounce } from "../../styles/animations";

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: white;
  border-radius: 15px;
  border: 1px solid grey;
  border-bottom: 0px;
  width: 80%;
  text-align: center;
  background: #686868;
  padding: 10px;
  box-shadow: ${({ hiddenOrVisible }) =>
    hiddenOrVisible === "hidden" || hiddenOrVisible === "start"
      ? null
      : `0px 5px 5px 10px rgba(0, 0, 0, 0.6)`};
  z-index: 2;
  position: relative;
  height: 48px;
  @media (max-width: 768px) {
    overflow-x: scroll;
  }
`;

export const SkillsContentContainer = styled.div`
  visibility: ${({ hiddenOrVisible }) => hiddenOrVisible};
  display: contents;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
  }
`;

export const SkillsSpan = styled.div`
  position: absolute;
  top: -5px;
  left: -10px;
  background: #383838;
  border-radius: 15px;
  padding: 2px;
  animation: ${bounceIn} 2s linear;
  @media (max-width: 768px) {
    visibility: hidden;
  }
`;

export const IconContainer = styled.div`
  visibility: ${({ hiddenOrVisible }) => hiddenOrVisible};
  display: flex;
  flex-direction: column;
  align-items: center;
  /* animation: ${bounce} 2s linear; */
  animation-name: ${bounce};
  animation-duration: ${({ duration }) => duration};
  animation-timing-function: linear;
  @media (max-width: 768px) {
    padding: 3px;
  }
  
`;
