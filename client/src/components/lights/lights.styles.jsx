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
`;

export const TopLeftFlashLight = styled.div`
  ${flashlight};
  top: 0;
  left: 0;
  transform: rotate(135deg);
`;
export const BottomRightFlashLight = styled.div`
  ${flashlight};
  bottom: 0;
  right: 0;
  transform: rotate(-45deg);
`;
export const BottomLeftFlashLight = styled.div`
  ${flashlight};
  bottom: 0;
  left: 0;
  transform: rotate(45deg);
`;

export const UpperFlashLightPart = styled.div`
  background-color: #8c8c8c;
  height: 20px;
  width: 100px;
`;

export const LowerFlashLightPart = styled.div`
  height: 0px;
  width: 40px;
  border-top: 80px solid #595959;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
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
`;
