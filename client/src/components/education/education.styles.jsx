import styled from "styled-components";

export const EducationContainer = styled.div`
  color: white;
  border: 1px solid grey;
  /* width: 50%; */
  overflow: scroll;
  height: 100%;
  background: #686868;
  padding: 10px;
  box-shadow: ${({ hiddenOrVisible }) =>
    hiddenOrVisible === "hidden"
      ? null
      : `0px 5px 5px 10px rgba(0, 0, 0, 0.6)`};
`;

export const TitleContainer = styled.div`
  visibility: ${({ hiddenOrVisible }) => hiddenOrVisible};
`;

export const TitleHeader = styled.div`
  text-align: center;
  font-size: 23px;
`;

export const BulletContainer = styled.li`
  text-align: left;
`;
