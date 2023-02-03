import styled from "styled-components";

export const StyledCardCart = styled.li`
  img {
    width: 80px;
    height: 80px;
    background-color: var(--grey-20);
    border-radius: var(--border-radius-default);
  }

  display: flex;
  flex-direction: row;
  /* align-items: center; */
  width: 100%;
  gap: 10px;

  .product__information {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    .product__name {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 0.5rem 0;

      h2 {
        font-size: var(--title-3);
        font-weight: var(--font-weight-bold);
        color: var(--grey-100);
      }

      p {
        font-size: var(--title-4);
        color: var(--grey-50);
      }
    }

    button {
      align-self: start;
      margin-top: 0.5rem;
      border: none;
      cursor: pointer;
      background-color: transparent;
      color: var(--grey-50);
    }

    button:hover {
      color: var(--grey-100);
      text-decoration: underline;
    }
  }
`;
