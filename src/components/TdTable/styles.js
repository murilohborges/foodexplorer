import styled from "styled-components";

export const Container = styled.td`
  border-left: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-top: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  text-align: left;
  padding: 1rem 4.1rem 1rem 1.5rem;
  position: relative;

  &:first-child {
    border-left: none;
    padding-right: 1rem;
  }

  > .wrapper-status {
    display: flex;
    align-items: center;
    gap: 0.5rem
  }

  > select {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    width: 100%;
    height: 3rem;
    border: 0;
    padding-left: 0.5rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 0.875rem;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.4545 7.8295C4.89384 7.39017 5.60616 7.39017 6.0455 7.8295L12 13.784L17.9545 7.8295C18.3938 7.39017 19.1062 7.39017 19.5455 7.8295C19.9848 8.26884 19.9848 8.98116 19.5455 9.4205L12.7955 16.1705C12.3562 16.6098 11.6438 16.6098 11.2045 16.1705L4.4545 9.4205C4.01517 8.98116 4.01517 8.26884 4.4545 7.8295Z' fill='%23C4C4CC'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: right 5px top 50%;
  }
`;