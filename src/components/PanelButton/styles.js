import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.section`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6rem;

  font-family: "Roboto", sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  line-height: 160%;
  font-size: 1rem;

  background: rgba(9,29,38,1);

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }

  > .wrapper-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 3rem;
  }

`;

export const ButtonHeader = styled.button`
  display: none;
  cursor: pointer;

  font-family: "Roboto", sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  line-height: 160%;
  font-size: 1rem;
  font-weight: bold;
  border: 0;
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};

  @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: inline-block;
  }
  
`;