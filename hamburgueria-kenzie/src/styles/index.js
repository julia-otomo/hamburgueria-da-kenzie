import styled from "styled-components";

export const ApplicationBody = styled.div`
  main {
    .main__container {
      margin-top: 1rem;
      width: 100%;
      padding-left: 1rem;
      box-sizing: border-box;

      .search__results {
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        p {
          color: var(--grey-100);
        }

        button {
          width: 5rem;
          height: 2rem;
          background-color: var(--color-primary);
          border: none;
          border-radius: var(--border-radius-default);
          color: var(--grey-0);
          font-weight: var(--font-weight-bold);
        }

        button:hover {
          background-color: var(--color-primary-50);
        }
      }
    }
  }

  @media (min-width: 1024px) {
    main {
      width: 100vw;
      .main__container {
        padding-left: 0;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 75%;

        .products-and-cart__container {
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: space-between;
        }

        .search__results {
          margin-top: 2rem;
          flex-direction: row;
          gap: 2rem;

          p {
            font-size: var(--title-3);
          }
        }
      }
    }
  }
`;
