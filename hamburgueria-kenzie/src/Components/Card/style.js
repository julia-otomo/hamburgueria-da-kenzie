import styled from "styled-components";

export const StyledCard = styled.li`
  margin-right: 20px;
  min-width: 300px;
  width: 300px;
  max-width: 90%;
  height: 346px;
  border: 2px solid var(--grey-0);
  border-radius: var(--border-radius-default);
  display: flex;
  flex-direction: column;
  gap: 1.3rem;

  img {
    height: 150px;
    object-fit: contain;
    background-color: var(--grey-0);
  }

  .information__container {
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    padding: 0 1rem;

    h2 {
      font-size: var(--title-3);
      font-weight: var(--font-weight-bold);
      color: var(--grey-100);
    }

    span {
      font-size: var(--caption);
      color: var(--grey-50);
    }

    p {
      font-size: var(--title-4);
      font-weight: var(--font-weight-bold);
      color: var(--color-primary);
    }
  }

  @media (min-width: 1024px) {
    margin-right: 0;
  }
`;
