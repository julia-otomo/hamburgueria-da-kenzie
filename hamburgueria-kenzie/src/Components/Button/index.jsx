import { StyledButton } from "./style";

export function Button({ buttonTitle, buttonId, callback }) {
  return (
    <StyledButton id={buttonId} onClick={callback}>
      {buttonTitle}
    </StyledButton>
  );
}
