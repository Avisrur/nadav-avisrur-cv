import styled from "styled-components";
import background from "../../assets/background.png";

export const SkillsContainer = styled.div`
  color: white;
  border-radius: 15px;
  border: 1px solid grey;
  border-bottom: 0px;
  width: 50%;
  text-align: center;
  background-image: url(${background});
  padding: 10px;
  box-shadow: ${({ hiddenOrVisible }) =>
    hiddenOrVisible === "hidden"
      ? null
      : `0px 5px 5px 10px rgba(0, 0, 0, 0.6)`};
`;

export const SkillsSpan = styled.span`
  visibility: ${({ hiddenOrVisible }) => hiddenOrVisible};
`;
