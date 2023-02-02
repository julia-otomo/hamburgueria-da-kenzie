import styled from "styled-components";

export const FormContainer = styled.form`
  width: 382px;
  max-width: 100%;
  height: 60px;
  border-radius: var(--border-radius-default-2);
  border: 2px solid var(--grey-20);
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  justify-content: space-between;

  input {
    height: 100%;
    font-size: var(--headline);
    outline: none;
    border: none;
    max-width: 60%;
  }

  button {
    max-width: 40%;
  }
`;
