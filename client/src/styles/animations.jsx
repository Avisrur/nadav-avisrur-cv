import { keyframes } from "styled-components";

export const bounceIn = keyframes`
  0%{
    opacity: 0;
    left: -1000px;
  }
  50%{
    opacity: 1;
    left: 30px;
  }
  80%{
    opacity: 1;
    left: -20px;
  }
  100%{
    opacity: 1;
    left: -10px;
  }
`;

export const fadeIn = keyframes`
0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`;

export const bounce = keyframes`
  0%{
    opacity: 0;
    transform: scale(0.3) translate3d(0,0,0);
  }
  50%{
    opacity: 0.9;
    transform: scale(1.1);
  }
  80%{
    opacity: 1;
    transform: scale(0.89);
  }
  100%{
    opacity: 1;
    transform: scale(1) translate3d(0,0,0);
  }`;
