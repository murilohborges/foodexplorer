import styled from "styled-components";


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

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }


  > h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > .price {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }
`;

export const PlateImage = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }
`;


