import styled from "styled-components";

export const MilitaryContainer = styled.div`
  color: white;
  border: 1px solid grey;
  background: #686868;
  overflow: scroll;
  height: 100%;
  padding: 10px;
  box-shadow: ${({ hiddenOrVisible }) =>
    hiddenOrVisible === "hidden"
      ? null
      : `0px 5px 5px 10px rgba(0, 0, 0, 0.6)`};
`;

export const JobContainer = styled.div`
  visibility: ${({ hiddenOrVisible }) => hiddenOrVisible};
`;

export const JobHeader = styled.div`
  text-align: center;
  font-size: 23px;
`;

export const BulletContainer = styled.li`
  text-align: left;
`;
