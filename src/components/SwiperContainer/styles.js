import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  align-items: center;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  > .left-shadow {
    height: 100%;
    width: 14rem;
    z-index: 2;
    position: absolute;
    left: 0;
    background: rgb(255,255,255);
    background: linear-gradient(270deg, rgba(0,10,15,0) 27%, rgba(0,10,15,1) 95%);
  }

  > .right-shadow {
    height: 100%;
    width: 14rem;
    z-index: 2;
    position: absolute;
    right: 0;
    background: rgb(255,255,255);
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
    @media (max-width: 375px ){
      top: 6.5rem;
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