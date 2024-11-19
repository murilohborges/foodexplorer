import styled from 'styled-components';

export const Container = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  display: ${({ $isLoading }) => $isLoading == false ? "none" : "flex"};
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_1000};;
  opacity: 0.9;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 1.5rem;
`