import { keyframes } from "styled-components";

export const glow = keyframes`
  0% {
    text-shadow: 0 0 10px #fff;
  }
  20%{
     text-shadow: 0 0 30px #e60073;
  }
  40%{
    text-shadow: 0 0 50px #ff4da6;
  }
  60%{
    text-shadow: 0 0 70px #e60073;
  }

  80%{
    text-shadow: 0 0 50px #ff4da6;
  }
  
  100% {
    text-shadow: 0 0 20px #fff;
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

export const lightOnEffect = keyframes`
  0%{
    opacity: 0.05;
  }
  10%{
    opacity: 0.1;
  }
  40%{
    opacity: 0.3
  }
  75%{
    opacity: 0.6;
  }
  100%{
    opacity: 0.9;
    
  }`;

export const lightOffEffect = keyframes`
  0%{
    opacity: 0.9;
  }
  25%{
    opacity: 0.6;
  }
  75%{
    opacity: 0.3;
  }
  100%{
    opacity: 0;
    
  }`;
