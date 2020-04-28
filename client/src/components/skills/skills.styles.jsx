import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: white;
  border-radius: 15px;
  border: 1px solid grey;
  border-bottom: 0px;
  width: 80%;
  text-align: center;
  background: #686868;
  padding: 10px;
  box-shadow: ${({ hiddenOrVisible }) =>
    hiddenOrVisible === "hidden"
      ? null
      : `0px 5px 5px 10px rgba(0, 0, 0, 0.6)`};
`;

export const IconContainer = styled.div`
  visibility: ${({ hiddenOrVisible }) => hiddenOrVisible};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
