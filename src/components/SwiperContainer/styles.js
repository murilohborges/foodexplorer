import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  margin: 0;
  display: flex;
  justify-content: center;
  > swiper-container {
    width: 100%;
    overflow: hidden;
  }
  > swiper-slide {
    width: 100%;
    box-sizing: border-box;
  }
`;