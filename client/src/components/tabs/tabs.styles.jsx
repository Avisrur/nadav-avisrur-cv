import styled from "styled-components";

export const TabContainer = styled.div`
  padding: 0px;
  border-radius: 15px;
  width: 82%;
  height: 38vh;
  border: 1px solid grey;
  background: #686868;
  box-shadow: ${({ hiddenOrVisible }) =>
    hiddenOrVisible === "hidden"
      ? null
      : `0px 5px 5px 10px rgba(0, 0, 0, 0.6)`};
`;

export const TabsList = styled.div`
  display: inline-flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
`;

export const TabContent = styled.div`
  display: inline-flex;
`;

export const TabsVisibility = styled.div`
  visibility: ${({ hiddenOrVisible }) => hiddenOrVisible};
`;
