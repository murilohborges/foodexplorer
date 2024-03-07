import styled from "styled-components";
import introImage from "../../assets/title.png";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
`;

export const Title = styled.div`
  background: rgb(9,29,38);
  background: linear-gradient(180deg, rgba(9,29,38,1) 0%, rgba(0,19,28,1) 100%);
  border-radius: 3px;
    
  margin-top: 3.2rem;
  margin-bottom: 3.875rem;
  margin-left: 2.2rem;
  margin-right: 2.2rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: "Poppins", sans-serif;
  padding: 2.5rem 0 1.375rem 0;

  display: flex;
  flex-direction: row;
  position: relative;

  .description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 12.3rem;
    @media (max-width: 375px ){
      margin-left: 11.3rem;
    }
  }

  h1 {
    font-weight: 600;
    font-size: 1.125rem;
    @media (max-width: 375px ){
      font-size: 1rem;
    }
    @media (max-width: 320px ){
      font-size: .9rem;
    }
  }
  p {
    font-weight: normal;
    font-size: 0.75rem;
    @media (max-width: 375px ){
      font-size: 0.6rem;
    }
  }
`;

export const TitleImage = styled.div`
  flex: 1;
  background: url(${introImage}) no-repeat center center;
  background-size: cover;

  width: 14rem;
  height: 10rem;

  position: absolute;
  left: -1.7rem;
  bottom: 0rem;
  @media (max-width: 375px ){
    width: 12rem;
    height: 10rem;
    left: -0.7rem;
  }
`;

export const Main = styled.div`
  margin-bottom: 1.56rem;
  margin-left: 2.2rem;
`;

export const WrapperPlates = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-bottom: 1.5rem;
`;