import styled from "styled-components";

export const Container = styled.td`
  border-left: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-top: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  text-align: left;
  padding: 1rem 4.1rem 1rem 1.5rem;

  &:first-child {
    border-left: none;
  }

  > .wrapper-status {
    display: flex;
    align-items: center;
    gap: 0.5rem
  }
`;