import styled from "styled-components";
import { bounceIn, fadeIn } from "../../styles/animations";

export const ProfileHeader = styled.div`
  color: white;
  width: 20%;
  height: 280px;
  /* margin-top: 0px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 15px 15px 0px 0px;
  border: 1px solid grey;
  border-bottom: 0px;
  background: #686868;
  padding-bottom: 10px;
  box-shadow: ${({ hiddenOrVisible }) =>
    hiddenOrVisible === "hidden"
      ? null
      : `0px -5px 5px 20px rgba(0, 0, 0, 0.5)`};
  /* z-index: -1; */
  z-index: 0;
  position: relative;
  @media (max-width: 768px) {
    width: 200px;
    margin-top: 10px;
  }
`;

export const ProfileSpan = styled.span`
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

export const DetailsContainer = styled.div`
  animation-name: ${fadeIn};
  animation-duration: 5s;
  animation-timing-function: ease;
  text-align: center;
  img {
    border-radius: 50%;
    max-width: 70%;
  }
`;
export const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NameContainer = styled.span`
  font-size: 25px;
  font-weight: 800;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  padding-top: 10px;
`;

export const LinkContainer = styled.a`
  color: white;
  cursor: pointer;
  display: block;
  z-index: 100;
`;
