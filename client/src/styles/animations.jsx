import { keyframes } from "styled-components";

export const glow = keyframes`
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  }
  
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
`;

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
