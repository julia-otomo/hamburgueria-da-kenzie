import styled from "styled-components";

export const StyledProductsList = styled.ul`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  align-items: center;

  @media (min-width: 1024px) {
    flex-wrap: wrap;
    width: 75%;
    margin-top: 1rem;
    gap: 20px;
  }
`;
