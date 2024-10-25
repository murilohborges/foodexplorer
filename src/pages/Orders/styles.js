import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';
import { Link } from "react-router-dom";

export const Container = styled.div`
  overflow-x: hidden;
  width: 100%;
  position: ${({ $menuIsOpen }) => $menuIsOpen ? "fixed" : "initial"};
  display: grid; 
  grid-template-columns: auto; 
  grid-template-rows: auto auto auto;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-columns: auto;
    grid-template-rows: auto 1fr auto auto;
  }
`;

export const FixedContent = styled.section`
  grid-area: "main";
  height: auto;
`;

export const Main = styled.div`
  margin: 2rem 6rem 3.4rem;
  min-height: 25rem;
  @media(max-width: 425px){
    margin: 2rem 2rem 3.4rem;
  }

  > h1 {
    font-size: 1.5rem;
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

  > .wrapper-save-button{
    width: 50%;
    margin-top: 2rem;
    @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
      width: 25%;
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
  min-height: 22rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > .wrapper-table {
    display: ${({ $ordersNumber }) => $ordersNumber == 0 ? "none" : "flex"};
    padding: 0;
    width: 100%;
    height: fit-content;
    overflow: hidden;
    border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-top-left-radius: 0.7rem;
    border-top-right-radius: 0.7rem;
    @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
      display: none;
    }
  }

  > .wrapper-no-orders {
    width: 100%;
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

  .wrapper-order-items {
    display: none;

    @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
      display: block;
      width: 100%;
    }
  }
`;

export const NoOrders = styled.div`
  display: ${({ $ordersNumber }) => $ordersNumber != 0 ? "none" : "flex"};
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};
  border-radius: 0.5rem;
  width: 100%;
  padding: 4rem;

  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
`