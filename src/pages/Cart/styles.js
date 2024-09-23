import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';
import { Link } from "react-router-dom";

export const Container = styled.div`
  overflow-x: hidden;
  width: 100%;
  min-height: 100vh;
  position: ${({ $menuIsOpen }) => $menuIsOpen ? "fixed" : "initial"};
  display: grid; 
  grid-template-columns: auto; 
  grid-template-rows: auto auto auto;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr auto auto;
  }
`;

export const FixedContent = styled.section`
  grid-area: "main";
  height: auto;
  position: relative;
`;

export const Main = styled.div`
  margin: 2rem 3rem 3.4rem;
  height: auto;
  @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
    margin: 2rem 6rem 3.4rem;
  }

  > h1 {
    font-size: 2rem;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    color: ${({ theme}) => theme.COLORS.LIGHT_300};
    margin-top: 2rem;
    margin-bottom: 2rem;

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
      font-size: 2rem;
    }
  }

  > .wrapper-next-button{
    margin-top: 2rem;
    width: 50%;
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
  min-height: 19rem;
  display: flex;
  flex-direction: column;

  @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
    display: ${({ $numbercart }) => $numbercart == 0 ? "flex" : "grid"};
    grid-template-columns: auto auto;
  }
`;

export const EmptyCart = styled.div`
  display: ${({ $numbercart }) => $numbercart != 0 ? "none" : "flex"};
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  border: 1px solid ${({ theme}) => theme.COLORS.LIGHT_500};
  border-radius: 0.5rem;
  width: 100%;
  padding: 4rem;

  font-family: "Poppins", sans-serif;
  color: ${({ theme}) => theme.COLORS.LIGHT_500};
`
