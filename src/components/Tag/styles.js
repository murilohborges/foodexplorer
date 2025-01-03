import styled from "styled-components";

export const Container = styled.span`
  font-size: 0.875rem;
  padding: 4px 18px;
  border-radius: 5px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`;