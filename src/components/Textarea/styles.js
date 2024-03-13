import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  height: 10.75rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: none;
  resize: none;

  border-radius: 8px;
  padding: 0.875rem;
  font-size: 1rem;
  font-weight: 400;
  font-family: "Roboto", sans-serif;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-size: 1rem;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
  }
`;