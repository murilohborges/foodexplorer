import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  align-items: center;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  > .left-shadow, .right-shadow {
    height: 100%;
    width: 14rem;
    z-index: 2;
    position: absolute;
    background: rgb(255,255,255);
    display: ${({ $numberElements }) => $numberElements >= 4 ? "block" : "none"};
    @media (max-width: 900px){
      display: none;
    }
  }

  > .left-shadow {
    left: 0;
    background: linear-gradient(270deg, rgba(0,10,15,0) 27%, rgba(0,10,15,1) 95%);
  }

  > .right-shadow {
    right: 0;
    background: linear-gradient(90deg, rgba(0,10,15,0) 27%, rgba(0,10,15,1) 95%);
  }

  > .swiper-meals-left, .swiper-desserts-left, .swiper-drinks-left {
    position: absolute;
    left: 1.8rem;
    top: 11.875rem;
  }

  > button {
    z-index: 3;
    background: transparent;
    border: none;
    display: none;
    @media (min-width: 900px){
      display: ${({ $numberElements }) => $numberElements >= 4 ? "block" : "none"};
    }
  }

  > .swiper-meals-right, .swiper-desserts-right, .swiper-drinks-right {
    position: absolute;
    right: 1.8rem;
    top: 11.875rem;
  }

  > swiper-container {
    width: 100%;
    overflow: hidden;
  }
  > swiper-slide {
    width: 1/3;
    box-sizing: border-box;
  }
`;