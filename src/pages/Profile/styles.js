import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
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

export const Main = styled.div`
  margin: 0.75rem 2rem 3.4rem;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  > h1 {
    font-size: 2rem;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    color: ${({ theme}) => theme.COLORS.LIGHT_300};
    margin-top: 2rem;
    grid-area: title;

    @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
      font-size: 1.5rem;
    }
  }
  
  > .row-five{
    margin-top: 2rem;
    width: 50%;
  }

`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  .wrapper-input {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
      width: 80%;
    }

    label {
      font-size: 1.5rem;
      font-weight: 400;
      font-family: "Roboto", sans-serif;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
        font-size: 1rem;
      }
    }

    input {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      border-radius: 8px;
      width: 100%;
      height: 3rem;
      border: 0;
      padding-left: 0.875rem;
      

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        font-size: 1rem;
        font-weight: 500;
        font-family: "Roboto", sans-serif;
      }
    }

    input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none;
    }
  }
  
`;

export const SaveButton = styled.button`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: 0;

  padding: 0.75rem 0;
  border-radius: 5px;

  font-size: 0.875rem;
  font-family: "Poppins", sans-serif;
`;
