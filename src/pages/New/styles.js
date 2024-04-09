import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';
import { Link } from "react-router-dom";

export const Container = styled.div`
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-size: 1rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;

  > svg {
    width: 0.5rem;
    height: 1rem;
  }

  @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
    margin-top: 2.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    > svg {
      width: 1rem;
      height: 1.5rem;
    }
  }

`;

export const Main = styled.div`
  margin: 0.75rem 2rem 3.4rem;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;

  > h1 {
    font-size: 2rem;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    color: ${({ theme}) => theme.COLORS.LIGHT_300};
    margin-top: 2rem;
    grid-area: title;

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
      font-size: 2rem;
    }
  }

  .wrapper-input {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label {
      font-size: 1rem;
      font-weight: 400;
      font-family: "Roboto", sans-serif;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      
    }

    input {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      border-radius: 8px;
      width: 100%;
      height: 3rem;
      border: 0;
      padding-left: 0.875rem;
      

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        font-size: 1rem;
        font-weight: 500;
        font-family: "Roboto", sans-serif;
      }
    }

    input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none;
    }

    .ingredients {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 1rem;

      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      border-radius: 8px;
      width: 100%;
      height: fit-content;
      border: 0;
      padding-left: 0.5rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }

    select {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      border-radius: 8px;
      width: 100%;
      height: 3rem;
      border: 0;

      padding-left: 0.875rem;
      padding-right: 0.875rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-size: 1rem;
      font-weight: 500;
      font-family: "Roboto", sans-serif;
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.4545 7.8295C4.89384 7.39017 5.60616 7.39017 6.0455 7.8295L12 13.784L17.9545 7.8295C18.3938 7.39017 19.1062 7.39017 19.5455 7.8295C19.9848 8.26884 19.9848 8.98116 19.5455 9.4205L12.7955 16.1705C12.3562 16.6098 11.6438 16.6098 11.2045 16.1705L4.4545 9.4205C4.01517 8.98116 4.01517 8.26884 4.4545 7.8295Z' fill='%23C4C4CC'/%3E%3C/svg%3E%0A");
      background-repeat: no-repeat;
      background-position: right 24px top 50%;
    }

  }

`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;

  .wrapper-input {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label {
      font-size: 1rem;
      font-weight: 400;
      font-family: "Roboto", sans-serif;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      
    }

    input {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      border-radius: 8px;
      width: 100%;
      height: 3rem;
      border: 0;
      padding-left: 0.875rem;
      

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        font-size: 1rem;
        font-weight: 500;
        font-family: "Roboto", sans-serif;
      }
    }

    input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none;
    }

    .ingredients {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 1rem;

      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      border-radius: 8px;
      width: 100%;
      height: fit-content;
      border: 0;
      padding-left: 0.5rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }

    select {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      border-radius: 8px;
      width: 100%;
      height: 3rem;
      border: 0;

      padding-left: 0.875rem;
      padding-right: 0.875rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-size: 1rem;
      font-weight: 500;
      font-family: "Roboto", sans-serif;
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.4545 7.8295C4.89384 7.39017 5.60616 7.39017 6.0455 7.8295L12 13.784L17.9545 7.8295C18.3938 7.39017 19.1062 7.39017 19.5455 7.8295C19.9848 8.26884 19.9848 8.98116 19.5455 9.4205L12.7955 16.1705C12.3562 16.6098 11.6438 16.6098 11.2045 16.1705L4.4545 9.4205C4.01517 8.98116 4.01517 8.26884 4.4545 7.8295Z' fill='%23C4C4CC'/%3E%3C/svg%3E%0A");
      background-repeat: no-repeat;
      background-position: right 24px top 50%;
    }

  }

  @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
    flex-direction: row;

    &:nth-child(2) {
      .wrapper-input:nth-child(1){
        width: 20%;
      }
      .wrapper-input:nth-child(2){
        width: 45%;
      }
      .wrapper-input:nth-child(3){
        width: 35%;
      }
    }

    &:nth-child(3) {
      .wrapper-input:nth-child(1){
        width: 75%;
      }
      .wrapper-input:nth-child(2){
        width: 25%;
      }
    }

    &:nth-child(5) {
      padding-left: 85%;
    }
  }
`;

export const SaveButton = styled.button`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: 0;

  padding: 0.75rem 0;
  border-radius: 5px;

  font-size: 0.875rem;
  font-family: "Poppins", sans-serif;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  border-radius: 8px;
  width: 100%;
  height: 3rem;

  padding-left: 2rem;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};

  cursor: pointer;

  @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
    padding-left: 0;
    justify-content: center;
  }

  > p {
    font-size: 0.875rem;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
  > input {
    display: none;
  }
`;