import styled from "styled-components";

export const StyledTotalCart = styled.div`
  height: 130px;
  padding: 21px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;

  .totalPrice {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h2 {
      font-weight: var(--font-weight-semi-bold);
      color: var(--grey-100);
    }

    p {
      font-weight: var(--font-weight-semi-bold);
      color: var(--grey-50);
    }
  }

  button {
    max-width: 343px;
    height: 60px;
    border: none;
    border-radius: var(--border-radius-default-2);
    background-color: var(--grey-20);
    color: var(--grey-50);
    font-weight: var(--font-weight-bold);
    font-size: var(--headline);
    cursor: pointer;
  }

  button:hover {
    background-color: var(--grey-50);
    color: var(--grey-0);
  }
`;
