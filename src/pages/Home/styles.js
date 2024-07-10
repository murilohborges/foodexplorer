import styled from "styled-components";
import introImage from "../../assets/title.png";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  @media (max-width: ${DEVICE_BREAKPOINTS.MD} ){
    display: grid;
    grid-template-areas: 
    "menu top",
    "menu title",
    "menu content",
    "menu footer";
  }
  
`;

export const Title = styled.div`
  grid-area: "title";
  background: rgb(9,29,38);
  background: linear-gradient(180deg, rgba(9,29,38,1) 0%, rgba(0,19,28,1) 100%);
  border-radius: 3px;
    
  margin-top: 3.2rem;
  margin-bottom: 3.875rem;
  margin-left: 2.25rem;
  margin-right: 1rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: "Poppins", sans-serif;
  padding: 2.5rem 0;

  display: flex;
  flex-direction: row;
  position: relative;
  
  @media (min-width: ${DEVICE_BREAKPOINTS.MD} ){
    margin-top: 10.75rem;
    margin-left: 6rem;
    margin-right: 6rem;
    display: grid;
    grid-template-columns: 20rem auto;
    grid-template-areas: 
    "img content";
  }

  .description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 12.8rem;
    @media (max-width: 375px ){
      margin-left: 9.3rem;
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.MD} ){
      align-items: center;
      margin-left: 0;
      grid-area: content;
    }
  }

  h1 {
    font-weight: 600;
    font-size: 1.125rem;
    white-space: nowrap;
    @media (min-width: 375px ){
      font-size: 1rem;
    }
    @media (min-width: 320px ){
      font-size: .9rem;
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.MD} ){
      font-size: 2.1rem;
      font-weight: 400;
    }
    @media (min-width: 830px ){
      font-size: 2.5rem;
      font-weight: 400;
    }
  }
  p {
    font-weight: normal;
    font-size: 0.75rem;
    font-family: 'Roboto', sans-serif;
    @media (max-width: 375px ){
      font-size: 0.6rem;
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.MD} ){
      font-size: 1rem;
      font-weight: 400;
    }
  }
`;

export const TitleImage = styled.div`
  flex: 1;
  background: url(${introImage}) no-repeat center center;
  background-size: cover;

  width: 14.5rem;
  height: 10rem;

  position: absolute;
  left: -1.7rem;
  bottom: 0rem;
  @media (max-width: 375px ){
    width: 10rem;
    height: 8rem;
    left: -0.7rem;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    width: 24rem;
    height: 15rem;
    left: -4rem;
  }
`;

export const Main = styled.div`
  grid-area: "content";
  padding: 0 1rem 0 2.25rem;
  @media (min-width: ${DEVICE_BREAKPOINTS.MD} ){
    padding: 0 6rem;
  }
`;
