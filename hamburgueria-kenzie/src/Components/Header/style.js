import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 139px;
  background-color: var(--grey-0);

  .header__container--div {
    margin: 0 auto;
    width: 90%;
    padding: 1rem 0;
    box-sizing: border-box;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-weight: var(--font-weight-bold);
      font-size: var(--title-2);
      color: var(--grey-100);

      span {
        font-size: var(--title-4);
        color: var(--color-secondary);
        margin-left: 0.3rem;
      }
    }
  }

  @media (min-width: 1024px) {
    height: 80px;

    .header__container--div {
      width: 75%;
      flex-direction: row;
    }
  }
`;
