import styled from "styled-components";

export const EducationContainer = styled.div`
  color: white;
  border-radius: 15px;
  border: 1px solid grey;
  width: 50%;
  text-align: center;
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
