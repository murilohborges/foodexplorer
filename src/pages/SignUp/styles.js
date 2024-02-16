import styled from 'styled-components';

export const Container = styled.div`
  margin: 9.9rem auto;
  width: 18.75rem;

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;

  > .header {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    margin-bottom: 4.6rem;
  }

  label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1rem;
    margin-bottom: 8px;
  }

  .button-auth {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    width: 100%;

    font-size: 0.875rem;
    font-weight: 400;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};;
  }
`;