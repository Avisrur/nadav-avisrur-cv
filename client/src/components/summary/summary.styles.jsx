import styled from "styled-components";

export const SummeryContainer = styled.div`
  color: white;
  border-radius: 15px;
  border: 1px solid grey;
  border-bottom: 0px;
  width: 80%;
  text-align: center;
  background: #686868;
  padding: 10px;
  z-index: -1;
  box-shadow: ${({ hiddenOrVisible }) =>
    hiddenOrVisible === "hidden"
      ? null
      : `0px 5px 5px 10px rgba(0, 0, 0, 0.6)`};
`;
export const SummaryContent = styled.span`
  visibility: ${({ hiddenOrVisible }) => hiddenOrVisible};
`;
