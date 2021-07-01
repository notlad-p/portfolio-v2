import styled from "styled-components";
import { motion } from "framer-motion";

const BordersContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 468px;
  margin-bottom: ${({ last }) => (last ? "0" : "64px")};
  padding: 12px;
`;

const Top = styled(motion.div)`
  position: absolute;
  top: 0;
  right: ${({ flip }) => (!flip ? 0 : "auto")};
  left: ${({ flip }) => (flip ? 0 : "auto")};
  width: 64px;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.borders};
  opacity: 1;
`;

const Right = styled(motion.div)`
  position: absolute;
  top: ${({ flip }) => (!flip ? 0 : "auto")};
  bottom: ${({ flip }) => (flip ? 0 : "auto")};
  right: 0;
  width: 1px;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.borders};
  opacity: 1;
`;

const Bottom = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: ${({ flip }) => (!flip ? 0 : "auto")};
  right: ${({ flip }) => (flip ? 0 : "auto")};
  width: 64px;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.borders};
  opacity: 1;
`;

const Left = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  top: ${({ flip }) => (flip ? 0 : "auto")};
  width: 1px;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.borders};
  opacity: 1;
`;

const Borders = ({ children, flip, isHovered, setIsHovered, inView }) => {
  const transition = {
    type: "tween",
    ease: "easeInOut",
    when: "afterChildren",
  };

  const widthVariants = {
    default: { width: 0 },
    viewable: { width: 64 },
    hover: { width: "100%", transition: transition },
  };

  const heightVariants = {
    default: { height: 0 },
    viewable: { height: 64 },
    hover: { height: "100%", transition: transition },
  };

  return (
    <BordersContainer
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTap={() => setIsHovered(true)}
    >
      {children}
      <Top
        animate={
          isHovered && inView ? "hover" : inView ? "viewable" : "default"
        }
        variants={widthVariants}
        flip={flip}
      />
      <Right
        animate={
          isHovered && inView ? "hover" : inView ? "viewable" : "default"
        }
        variants={heightVariants}
        flip={flip}
      />
      <Bottom
        animate={
          isHovered && inView ? "hover" : inView ? "viewable" : "default"
        }
        variants={widthVariants}
        flip={flip}
      />
      <Left
        animate={
          isHovered && inView ? "hover" : inView ? "viewable" : "default"
        }
        variants={heightVariants}
        flip={flip}
      />
    </BordersContainer>
  );
};

export default Borders;