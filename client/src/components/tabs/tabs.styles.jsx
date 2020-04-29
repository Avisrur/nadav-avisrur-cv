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
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  visibility: ${({ hiddenOrVisible }) => hiddenOrVisible};
`;

export const ButtonContainer = styled.div`
  visibility: ${({ hiddenOrVisible }) => hiddenOrVisible};
`;

export const TabContent = styled.div`
  height: 80%;
  text-align: center;
`;

export const TabsVisibility = styled.div``;
