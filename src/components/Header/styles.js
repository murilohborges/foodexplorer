import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.DARK_700};
  height: 7.125rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 3.5rem;
  padding-bottom: 1.5rem;
  position: relative;

  @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
    height: 6rem;
    padding: 1.5rem 2.2rem 1.5rem 2.5rem;
    justify-content: space-around;
  }

  > .header-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      gap: 1rem;
      justify-content: space-around;
    }

    > .menu-button{
      position: absolute;
      left: 2.2rem;
      @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
        svg {
          width: 1.2rem;
          height: 1rem;
        }
      }
      @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
        svg {
          display: none;
        }
      }
    }

  }

`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  padding: 0;

  @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
    align-items: normal;
    position: relative;
    padding-left: 2.2rem;

    > svg {
    position: absolute;
    left: 0;
    top: 0;
    }

    > h2 {
      text-align: end;
    }
  }
  

  > h1 {
    font-size: 1.32rem;
    white-space: nowrap;
  }

  > h2 {
    font-size: 0.75rem;
    font-weight: normal;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

`;

export const InputSearch = styled.div`
  height: 3.5rem;
  width: 100%;
  display: none;

  padding: 1rem 0.875rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  background: ${({ theme }) => theme.COLORS.DARK_900};
  border: 0;
  border-radius: 5px;

  @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.875rem;
  }

  > input {
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Roboto", sans-serif;
    width: 15.5rem;
    text-align: center;
    white-space: nowrap;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-size: 1rem;
      font-weight: 400;
      
    }
  }
`;

export const ButtonNewPlate = styled(Link)`
  width: 13.5rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  
  height: 3rem;
  border: 0;
  border-radius: 10px;
  padding: 0.75rem 4.28rem;

  white-space: nowrap;
  font-weight: 400;
  font-size: 0.875rem;
  font-family: "Poppins", sans-serif;

  &:disabled {
    opacity: 0.5;
  }

  display: none;
  @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
  }
`;

export const ButtonOrders = styled(Link)`
  width: 13.5rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  
  height: 3rem;
  border: 0;
  border-radius: 10px;
  padding: 0.75rem 2.14rem;

  white-space: nowrap;
  font-weight: 400;
  font-size: 0.875rem;
  font-family: "Poppins", sans-serif;

  &:disabled {
    opacity: 0.5;
  }

  display: none;
  @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`;

export const ButtonMyFavourites = styled(Link)`
  width: 2.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 2.2rem;
  @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }

  > .counter-fav {
    color: white;
    font-family: "Poppins", sans-serif;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    width: 20px;
    height: 20px;
    text-align: center;
    border-radius: 50%;
    position: absolute;
    right: -6px;
    top: -7px;

  }
`;

export const ButtonLogout = styled.button`
  background-color: transparent;
  border: 0;
  display: none;
  @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
  }
`;