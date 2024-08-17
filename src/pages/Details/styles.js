import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  position: ${({ $menuIsOpen }) => $menuIsOpen ? "fixed" : "initial"};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.div`
  margin-top: 2rem;
  margin-bottom: 3.125rem;
`;

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  margin-left: 1rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-size: 1.5rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;

  @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
    font-weight: bold;
    gap: 10px;
  }

`;

export const PlateInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.625rem;

  @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
    flex-direction: row;
    gap: 3rem;
  }

`;

export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1.5rem;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    
    text-align: center;

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
      margin-bottom: 0;
      font-size: 2.5rem;
      line-height: 140%;
    }
  }

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1rem;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
    text-align: center;

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
      margin-bottom: 0;
      text-align: left;
      font-size: 1.5rem;
      line-height: 140%;
    }
  }

  > .wrapper-tags {
    width: 100%;
    margin-bottom: 1.5rem;
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
      align-items: start;
      justify-content: flex-start;
    }
  }

  > .wrapper-buttons {
    display: flex;
    gap: 1rem;
    width: 100%;
  }

  > .button-edit{
    width: 100%;
    @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
      width: 8.2rem;
    }
  }

  @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
    align-items: start;
  }
`;

export const PlateImage = styled.div`
  margin-bottom: 1rem;
  
  > img {
    width: 16.5rem;
    height: 16.5rem;
    border-radius: 50%;
  }
  @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
    > img {
      width: 24rem;
      height: 24rem;
    }
  }
`;

export const ControlNumberPlates = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2rem;
  margin-top: 0.75rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: "Roboto", sans-serif;

  > button {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
    height: 18px;
  }

  > .include-button {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    border-radius: 4px;
    width: 15rem;
    height: 2.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1rem;
    font-weight: 500;
    font-family: "Poppins", sans-serif;

    @media(min-width: ${DEVICE_BREAKPOINTS.XS}){
      font-size: 0.8rem;
      width: 12rem;
    }
  }

`;
