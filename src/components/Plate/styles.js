import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import { Link } from "react-router-dom";


export const Container = styled.div`
  width: 13.125rem;
  height: 18.25rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  
  border: none;
  border-radius: 8px;

  padding-top: 4.375rem;
  padding-bottom: 4.375rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  cursor: pointer;

  @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
    height: 28.875rem;
    width: 19rem;
    padding-top: 4.16rem;
    padding-bottom: 4.16rem;
    gap: 0.94rem;
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
      font-size: 2rem;
      font-weight: 400;
    }
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
      width: 11rem;
      height: 11rem;
    }
  }
`;

export const EditIcon = styled(Link)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;

  
`;

export const DetailsButton = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background: transparent;
  border: none;

  @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
    font-size: 1.5rem;
    font-weight: bold;
  }
`;


