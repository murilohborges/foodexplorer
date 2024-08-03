import styled from "styled-components";
import { Link } from 'react-router-dom';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  grid-area: "menu";
  width: 100%;
  height: 100%;
  position: absolute;
  left: -100%;

  display: grid;
  grid-template-rows: 7.125rem auto 4.8125rem;
  grid-template-areas: 
  "top-menu"
  "content-menu"
  "footer";
  position: absolute;
  z-index: 1;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
    grid-area: none;
    position: absolute;
    left: 0px;
    z-index: 3;

    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    
    &[data-menu-is-open="true"]{
      transform: translateX(0);
    }
  }

`;

export const HeaderMenu = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  height: 7.125rem;
  width: 100%;
  grid-area: "top-menu";

  display: flex;
  align-items: center;
  padding-left: 1.75rem;
  padding-top: 2rem;
  gap: 1rem;

  > .close-menu-button {
    border: none;
    background: transparent;
  }

  > h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const ContentMenu = styled.div`
  grid-area: "content-menu";
  width: 100%;
  padding: 2.25rem 1.75rem 1rem;
`;

export const InputSearchMenu = styled.div`
  height: 3.5rem;
  width: 100%;
  display: menu;

  padding: 1rem 2rem;
  margin-bottom: 2.25rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  background: ${({ theme }) => theme.COLORS.DARK_900};
  border: 0;
  border-radius: 5px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.8755rem;

  @media(max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 0.5rem;
  }

  > input {
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Roboto", sans-serif;
    width: 90%;
    text-align: center;
    white-space: nowrap;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-size: 1rem;
      font-weight: 400;
      
    }
  }
`;

export const ButtonMenu = styled(Link)`
  width: 100%;
  font-family: "Poppins", sans-serif;
  display: block;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 140%;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  padding: 0.625rem 0.625rem 0.625rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
`;

export const FooterMenu = styled.div`
  background: ${({ theme }) => theme.COLORS.DARK_600};
  height: 4.8125rem;
  width: 100%;
  position: absolute;
  top: calc(100vh - 4.8125rem);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    gap: 0.5rem;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    gap: 25rem;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    gap: 40rem;
  }

  > .title-footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;

    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    font-size: 1rem;
    font-weight: bold;

    @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
      font-size: 0.8rem;
      max-height: 100vh;
      margin-left: 2rem;
    }
    @media (max-width: 360px) {
      font-size: 0.8rem;
      max-height: 100vh;
      margin-left: 2rem;
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 1rem;
      max-height: 100vh;
    }
  }

  > p {
    font-weight: normal;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
      font-size: 0.8rem;
      max-height: 100vh;
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 0.875rem;
      max-height: 100vh;
    }
  }
`;