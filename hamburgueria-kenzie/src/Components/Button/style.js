import styled from "styled-components";

export const StyledButton = styled.button`
  height: 40px;
  width: 107px;
  border-radius: var(--border-radius-default-2);
  border: none;
  background-color: var(--color-primary);
  color: var(--grey-0);
  font-weight: var(--font-weight-semi-bold);
  box-sizing: border-box;

  :hover {
    background-color: var(--color-primary-50);
  }
`;
