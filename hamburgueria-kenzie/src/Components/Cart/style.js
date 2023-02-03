import styled from "styled-components";

export const StyledCart = styled.div`
  margin-top: 20px;
  width: 384px;
  max-width: 100%;

  padding-right: 1rem;
  box-sizing: border-box;

  .cart__header {
    height: 65px;
    background-color: var(--color-primary);
    border-radius: var(--border-radius-default) var(--border-radius-default) 0px
      0px;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    h2 {
      font-size: var(--title-3);
      font-weight: var(--font-weight-bold);
      color: var(--grey-0);
    }
  }

  .empty__cart {
    height: 158px;
    background-color: var(--grey-0);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

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

  .filled__cart {
    background-color: var(--grey-0);
    padding: 0 20px;
    ul {
      display: flex;
      flex-direction: column;
      padding: 20px 0;
      box-sizing: border-box;
      gap: 1rem;
      max-height: 250px;
      overflow-y: auto;
    }

    .line {
      height: 2px;
      background-color: var(--grey-20);
    }
  }

  @media (min-width: 1024px) {
    padding: 0;
    .filled__cart {
      ul {
        max-height: 480px;
      }
    }
  }
`;
