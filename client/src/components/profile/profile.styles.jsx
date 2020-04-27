import styled from "styled-components";

export const ProfileHeader = styled.div`
  color: white;
  width: 20%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 15px 15px 0px 0px;
  border: 1px solid grey;
  border-bottom: 0px;
  background: blueviolet;
  padding-bottom: 10px;
  box-shadow: ${({ hiddenOrVisible }) =>
    hiddenOrVisible === "hidden"
      ? null
      : `0px -5px 5px 20px rgba(0, 0, 0, 0.5)`};
  z-index: -1;
`;

export const DetailsContainer = styled.div`
  visibility: ${({ hiddenOrVisible }) => hiddenOrVisible};
  text-align: center;
  img {
    border-radius: 50%;
    max-width: 70%;
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
