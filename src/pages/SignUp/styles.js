import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5.25rem 2.06rem;
  align-items: stretch;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 5.625rem;
  }
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  margin-bottom: 4.6rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: fit-content;
    font-size: 1.5rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;

  .title{
    display: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    margin-bottom: 2rem;
    margin: 0 auto 2rem;
  }

  label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1rem;
    margin-bottom: 8px;
  }

  .button-auth {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    width: 100%;

    font-size: 1rem;
    font-weight: 400;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    background: ${({ theme }) => theme.COLORS.DARK_700};
    padding: 4rem;
    border-radius: 1rem;
    width: 29.75rem;

    .title{
      display: block;
    }
  }
`;