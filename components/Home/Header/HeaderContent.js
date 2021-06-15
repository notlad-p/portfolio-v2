import styled from "styled-components";
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive';

import Button from "../../Button";

const Container = styled(motion.div)`
  /* position: absolute;
  top: 50%;
  left: 33%;
  width: 348px;
  transform: translate(-50%, -50%); */
  position: relative;
  top: 50%;
  margin: 0 auto;
  max-width: 1000px;
  transform: translateY(-50%);

  @media (max-width: 1060px) {
    max-width: 700px;
  }

  @media (max-width: 832px) {
    position: absolute;
    top: 70%;
    left: 50%;
    width: 348px;
    margin: 0 auto;
    transform: translate(-50%, -50%);
  };

  @media (max-width: 408px) {
    left: 47.5%;
    transform: scale(0.9) translate(-50%, -50%);
  }; 

  @media (max-width: 332px) {
    transform: scale(0.8) translate(-50%, -50%);
    transform-origin: 0%;
  }; 
`;

const Title = styled(motion.p)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
`;

const HeadingOne = styled(motion.h1)`
  margin-top: 8px;
  margin-bottom: 32px;
  font-size: 40px;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
`;

const Line = styled(motion.div)`
  width: 125px;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Text = styled(motion.p)`
  margin-top: 16px;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const HeaderContent = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 408px)'});

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.75,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 16, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
    show: { opacity: 1, y: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
  };

  return (
    <Container variants={container} initial="hidden" animate="show">
      <Title variants={item}>ABOUT</Title>
      <HeadingOne variants={item}>Hello, I'm Dalton</HeadingOne>
      <Line variants={item} />
      <Text variants={item}>
        I'm a developer who enjoys building web stuff.
      </Text>
      <Button variants={item} style={{ marginRight: "16px" }}>
        Projects
      </Button>
      <Button variants={item}>Contact</Button>
    </Container>
  );
};

export default HeaderContent;
