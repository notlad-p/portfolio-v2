import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Textarea from "./Textarea";

export const InputContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: ${({ height }) => height};
  margin-bottom: 16px;
  background-color: rgba(233, 233, 233, 0.05);
`;

export const Label = styled(motion.label)`
  position: absolute;
  top: 16px;
  left: 16px;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-transform: capitalize;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 16px 16px 0 20px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textPrimary};
  caret-color: ${({ theme }) => theme.colors.textPrimary};

  &:focus {
    outline: none;
  }
`;

const Input = ({ value, onChange, id, type, textarea, variants }) => {
  const [focus, setFocus] = useState(false);

  const onFocus = () => setFocus(true);
  const onBlur = (e) => {
    if (e.target.value === "") setFocus(false);
  };

  // reset focus after successful submit
  useEffect(() => {
    if (value === "") setFocus(false);
  }, [value]);

  const label = {
    default: {
      scale: 1,
      y: 4,
      x: 8,
      color: "#E9E9E9",
    },
    focused: {
      scale: 0.8,
      y: -14,
      x: -2,
      color: "#3395D6",
    },
  };

  if (textarea)
    return (
      <Textarea
        value={value}
        id={id}
        label={label}
        focus={focus}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        variants={variants}
      />
    );

  return (
    <InputContainer height="64px" variants={variants}>
      <Label
        animate={focus ? "focused" : "default"}
        variants={label}
        htmlFor={id}
      >
        {id}
      </Label>
      <StyledInput
        value={value}
        name={id}
        type={type}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onAnimationStart={() => setFocus(true)}
        required
        autoComplete="new-password"
      />
    </InputContainer>
  );
};

export default Input;
