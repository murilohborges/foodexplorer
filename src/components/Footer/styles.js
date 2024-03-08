import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.DARK_600};
  height: 4.8125rem;
  width: 100%;

  

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    gap: 0.5rem;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    gap: 25rem;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    gap: 40rem;
  }

  > .title-footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;

    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    font-size: 1rem;
    font-weight: bold;

    @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
      font-size: 0.8rem;
      max-height: 100vh;
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 1rem;
      max-height: 100vh;
    }
  }

  > p {
    font-weight: normal;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
      font-size: 0.6rem;
      max-height: 100vh;
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 0.875rem;
      max-height: 100vh;
    }
  }
`;