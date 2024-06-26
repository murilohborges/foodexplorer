import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;

  > h2 {

    color: ${({theme}) => theme.COLORS.LIGHT_300};
    font-size: 1.125rem;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
  }

`;