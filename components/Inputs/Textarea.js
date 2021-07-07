import styled from "styled-components";

import { InputContainer, Label } from "./TextInput";

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 132px;
  min-height: 132px;
  padding: 32px 16px 0 24px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  color: ${({ theme }) => theme.colors.textPrimary};
  resize: vertical;
  caret-color: ${({ theme }) => theme.colors.textPrimary};

  &:focus {
    outline: none;
  }
`;

const Textarea = ({
  value,
  onChange,
  id,
  label,
  transition,
  focus,
  onFocus,
  onBlur,
  variants,
}) => {
  return (
    <InputContainer height="auto" variants={variants}>
      <Label
        animate={focus ? "focused" : "default"}
        variants={label}
        transition={transition}
        htmlFor={id}
      >
        {id}
      </Label>
      <StyledTextarea
        value={value}
        id={id}
        name={id}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        required
      />
    </InputContainer>
  );
};

export default Textarea;
