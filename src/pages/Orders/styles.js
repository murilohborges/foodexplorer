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
  height: auto;
`;

export const Main = styled.div`
  margin: 2rem 6rem 3.4rem;
  height: auto;

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
  min-height: 19rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;

  > .wrapper-table {
    padding: 0;
    width: 100%;
    overflow: hidden;
    border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-top-left-radius: 0.7rem;
    border-top-right-radius: 0.7rem;
    @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
      display: none;
    }
  }

  table {
    margin: auto;
    width: 100%;
    border-collapse: collapse;
  }

  table thead {
    font-size: 1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  table tbody {
    font-size: 1rem;
    font-weight: normal;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
    display: ${({ $numberfavs }) => $numberfavs == 0 ? "flex" : "grid"};
    grid-template-columns: auto auto auto;
  }
`;

export const NoOrders = styled.div`
  display: ${({ $numberfavs }) => $numberfavs != 0 ? "none" : "flex"};
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};
  border-radius: 0.5rem;
  width: 100%;
  padding: 4rem;

  font-family: "Poppins", sans-serif;
  color: ${({ theme}) => theme.COLORS.LIGHT_500};

  
`