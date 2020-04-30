import styled, { css } from "styled-components";

const flashlight = css`
  width: 100px;
  height: 100px;
  position: fixed;
  margin: auto;
`;

export const TopRightFlashLight = styled.div`
  ${flashlight};
  top: 0;
  right: 0;
  transform: rotate(-135deg);
  @media (max-width: 768px) {
    top: -87px;
    right: -37px;
  }
`;

export const TopLeftFlashLight = styled.div`
  ${flashlight};
  top: 0;
  left: 0;
  transform: rotate(135deg);
  @media (max-width: 768px) {
    top: -37px;
    left: -87px;
  }
`;
export const UpperFlashLightPart = styled.div`
  background-color: #8c8c8c;
  height: 20px;
  width: 100px;
  @media (max-width: 768px) {
    height: 5px;
    width: 30px;
  }
`;

export const LowerFlashLightPart = styled.div`
  height: 0px;
  width: 40px;
  border-top: 80px solid #595959;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  @media (max-width: 768px) {
    width: 10px;
    border-top: 20px solid #595959;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }
`;

export const Light = styled.div`
  height: 0px;
  width: 100px;
  border-top: 80px solid rgba(247, 239, 141, 0.9);
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  position: fixed;
  bottom: 100px;
  left: -100px;
  visibility: ${({ hiddenOrVisible }) => hiddenOrVisible};
  @media (max-width: 768px) {
    height: 0px;
    width: 30px;
    border-top: 40px solid rgba(247, 239, 141, 0.9);
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    bottom: 100px;
    left: -30px;
  }
`;
