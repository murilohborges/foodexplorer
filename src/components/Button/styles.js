import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  
  height: 3.5rem;
  border: 0;
  padding: 0.75rem auto;
  border-radius: 10px;
  font-weight: 400;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;

  &:disabled {
    opacity: 0.5;
  }
`;