import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  border-radius: 10px;

  > input {
    height: 3.5rem;
    width: 100%;

    padding: 1rem 0.875rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-size: 1rem;
      font-weight: 400;
    }
  }

  > svg {
      margin-left: 16px;
  }
`;