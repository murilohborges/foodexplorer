import styled from "styled-components";

export const Container = styled.th`
  border-left: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  text-align: left;
  padding: 1.3rem 5.4rem 1.3rem 1.5rem;

  &:first-child {
    border-top-left-radius: 0.5rem;
    border-left: none;
  }

  &:nth-child(2), &:nth-child(3){
    padding-right: 2rem;
  }

  &:nth-child(4){
    padding-right: 4rem;
  }

  &:last-child {
    border-top-right-radius: 0.5rem;
  }
`;