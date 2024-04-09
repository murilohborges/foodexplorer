import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 2rem;
  width: fit-content;

  background-color: ${({ theme, $isNew}) => $isNew ? "transparent" : theme.COLORS.LIGHT_600};
  color: ${({ theme}) => theme.COLORS.LIGHT_100};

  border: ${({ theme, $isNew}) => $isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  padding: 0.5rem 1rem;
  border-radius: 10px;

  > #button-tag {
    border: none;
    background: none;
    display: flex;
    align-items: center;
  }

  .button-delete{
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .button-add{
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  #input-tag {
    height: fit-content;
    width: fit-content;
    padding: 0;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    font-size: 1rem;
    font-weight: 500;
    font-family: "Roboto", sans-serif;

    border: none;
    border-radius: 0;

    &::placeholder{
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;