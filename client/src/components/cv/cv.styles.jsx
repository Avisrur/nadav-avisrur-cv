import styled from "styled-components";

import { glow } from "../../styles/animations";

export const CvContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 30px;
`;

export const TextContainer = styled.span`
  visibility: ${({ hiddenOrVisible }) =>
    hiddenOrVisible === "visible" ? "hidden" : "visible"};
  font-family: "Indie Flower";
  position: fixed;
  top: 64px;
  left: 200px;
  font-size: 30px;
  font-weight: 900;
  animation: ${glow} 2s linear infinite alternate;
  @media (max-width: 768px) {
    /* visibility: hidden; */
    width: 80px;
    left: 10px;
    top: 60px;
    font-size: 3vh;
  }
  @media (max-width: 400px) {
    /* visibility: hidden; */
    width: 70px;
    left: 10px;
    top: 80px;
    font-size: 3vh;
  }
`;
