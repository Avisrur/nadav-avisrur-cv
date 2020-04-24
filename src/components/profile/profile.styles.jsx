import styled from "styled-components";
import background from "../../assets/background.png";

export const ProfileHeader = styled.div`
  color: white;
  width: 30%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 15px 15px 0px 0px;
  border: 1px solid grey;
  border-bottom: 0px;
  background-image: url(${background});
  box-shadow: ${({ hiddenOrVisible }) =>
    hiddenOrVisible === "hidden"
      ? null
      : `0px -5px 5px 20px rgba(0, 0, 0, 0.5)`};
  z-index: -1;
`;

export const DetailsContainer = styled.div`
  visibility: ${({ hiddenOrVisible }) => hiddenOrVisible};
  img {
    border-radius: 50%;
    max-width: 100%;
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
