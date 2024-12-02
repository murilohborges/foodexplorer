import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 22rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  
  border: none;
  border-radius: 8px;

  padding-top: 3rem;
  padding-bottom: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  position: relative;

  @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
    padding-top: 4.16rem;
    padding-bottom: 4.16rem;
    gap: 0.94rem;
    width: 19.125rem;
    height: 38rem;
  }

  @media(min-width: 320px){
    width: 11.5rem;
  }

  @media(min-width: 640px){
    width: 12.5rem;
  }

  @media(min-width: 768px){
    width: 19.125rem;
  }

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }

  > p {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    text-align: center;
    margin: auto 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    display: none;
    @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
      display: block;
    }
  }

  > .price {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
      font-size: 1.5rem;
      font-weight: 400;
    }
  }

  .include-button {
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Roboto", sans-serif;
    padding: 0.4rem 3.6rem;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    border-radius: 5px;
    margin-bottom: 2rem;
  } 
`;

export const PlateImage = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
    @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
      display: block;
      width: 9rem;
      height: 9rem;
    }
  }
`;

export const EditIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;

export const FavIcon = styled.div`
  > .empty, .filled {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer; 
  }
`;

export const DetailsButton = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  text-align: center;
  width: 90%;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background: transparent;
  border: none;
  cursor: pointer;

  @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
    font-size: 1.5rem;
    font-weight: bold;
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

`;

