import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  padding: 1rem 0.5rem;
  margin-bottom: 3rem;
  @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
    padding: 1rem 0
  }
`;

export const Info = styled.div`
  > h1 {
    font-size: 1.25rem;
    line-height: 160%;
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: 400;
    cursor: pointer;
  }
  > h1:hover {
    filter: brightness(0.7);
  }
`;

export const PlateImage = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.8125rem;
  cursor: pointer;
  > img {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
      display: block;
      width: 9rem;
      height: 9rem;
    }
  }
  > img:hover {
    filter: brightness(0.7);
  }
`;

export const ButtonRemove = styled.button`
  border: 0;
  background: transparent;

  font-size: 0.9rem;
  color: ${({ theme }) => theme.COLORS.TOMATO_300};
  font-weight: 600;
`;