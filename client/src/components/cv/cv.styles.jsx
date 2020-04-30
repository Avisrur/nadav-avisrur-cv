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
  animation: ${glow} 1s ease-in-out infinite alternate;
`;
