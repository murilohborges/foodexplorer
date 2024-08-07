import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';
import { Link } from "react-router-dom";

export const Container = styled.div`
  overflow-x: hidden;
  width: 100%;
  position: ${({ $menuIsOpen }) => $menuIsOpen ? "fixed" : "initial"};
  display: grid; 
  grid-template-columns: 100%; 
  grid-template-rows: 7.125rem auto; 
  grid-template-areas: 
    "top"
    "main";

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr;
    grid-template-areas: 
    "top"
    "main";
  }
`;

export const FixedContent = styled.section`
  grid-area: "main";
`;

export const Main = styled.div`
  margin: 2rem 6rem 3.4rem;

  > h1 {
    font-size: 2rem;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    color: ${({ theme}) => theme.COLORS.LIGHT_300};
    margin-top: 2rem;
    margin-bottom: 2rem;
    grid-area: title;

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
      font-size: 2rem;
    }
  }
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-size: 1rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;

  > svg {
    width: 0.5rem;
    height: 1rem;
  }

  @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
    margin-top: 2.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    > svg {
      width: 1rem;
      height: 1.5rem;
    }
  }

`;

export const List = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 15rem;
  display: flex;
  flex-direction: column;

  @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
    display: grid;
    grid-template-columns: auto auto auto;
  }
`;