import styled from "styled-components";

import { fadeIn } from "./animations";

export const TabContentContainer = styled.div`
  color: white;
  border: 1px solid grey;
  overflow: scroll !important;
  height: 95%;
  background: #686868;
  padding: 10px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  animation: ${fadeIn} 3s ease;
  /* box-shadow: ${({ hiddenOrVisible }) =>
    hiddenOrVisible === "hidden"
      ? null
      : `0px 5px 5px 10px rgba(0, 0, 0, 0.6)`}; */
`;

export const TitleContainer = styled.div`
  visibility: ${({ hiddenOrVisible }) => hiddenOrVisible};
`;

export const TitleHeader = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 23px;
`;

export const BulletContainer = styled.li`
  text-align: left;
`;
