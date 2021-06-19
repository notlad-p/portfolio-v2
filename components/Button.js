import styled from "styled-components";
import { motion } from "framer-motion";

const BorderButton = styled(motion.button)`
  width: 101px;
  height: 41px;
  padding: 0;
  margin: 0;
  background: url("/border.png");
  background-repeat: no-repeat;
  background-size: 100px 40px;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  cursor: pointer;
`;

const TextButton = styled(motion.button)`
  margin-right: 8px;
  padding: 8px 8px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-size: 15px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

const Button = ({ children, style, text, variants }) => {
  if (text) {
    return (
      <TextButton
        variants={variants}
        whileHover={{ backgroundColor: "rgba(51, 149, 214, 0.1)" }}
      >
        {children}
      </TextButton>
    );
  }
  return (
    <BorderButton
      variants={variants}
      whileHover={{ color: "#E9E9E9" }}
      whileFocus={{ color: "#E9E9E9" }}
      style={style}
    >
      {children}
    </BorderButton>
  );
};

// /* clip-path: polygon(
//     0% 20px,
//     /* top left */ 20px 0%,
//     /* top left */ 100% 0%,
//     /* top right */ 100% 20px,
//     /* top right */ 100% calc(100% - 20px),
//     /* bottom right */ calc(100% - 20px) 100%,
//     /* bottom right */ 20px 100%,
//     /* bottom left */ 0 100% /* bottom left */
//     ); */

export default Button;
