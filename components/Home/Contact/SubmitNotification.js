import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

const LoaderContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  width: 36px;
  height: 16px;
`;

const Circle = styled(motion.span)`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.textPrimary};
`;

const Loader = () => {
  const container = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const circle = {
    start: {
      y: 8,
    },
    end: {
      y: 0,
    },
  };

  const circleTransition = {
    type: "tween",
    duration: 0.7,
    repeat: Infinity,
    ease: "easeInOut",
  };

  return (
    <LoaderContainer variants={container} initial="start" animate="end">
      <Circle variants={circle} transition={circleTransition} />
      <Circle variants={circle} transition={circleTransition} />
      <Circle variants={circle} transition={circleTransition} />
    </LoaderContainer>
  );
};

const Container = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 32px;
  background-color: rgba(255, 255, 255, 0.075);
`;

const SubmitNotification = ({ status }) => {
  //const { pending, success, error } = status;

  const [test, set] = useState({ pending: false, success: true, error: false });

  const controls = useAnimation();

  const variants = {
    hidden: {
      opacity: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      y: 16,
      width: 64,
      backgroundColor: "rgba(255, 255, 255, 0.075)",
    },
    pending: {
      opacity: 1,
      y: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    },
    success: {
      opcaity: 1,
      y: 0,
      width: 120,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      backgroundColor: "rgba(92, 184, 92, 0.4)",
    },
    error: {
      opcaity: 1,
      y: 0,
      width: 140,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      backgroundColor: "rgba(217, 83, 79, 0.4)",
    },
  };

  useEffect(() => {
    if (status.pending) {
      controls.start("pending");
    } else if (status.success) {
      controls.start("success");
    } else if (status.error) {
      controls.start("error");
    } else {
      controls.start("hidden");
    }
  }, [status]);

  return (
    <Container animate={controls} variants={variants} initial="hidden">
      {status.pending ? (
        <Loader />
      ) : status.success ? (
        <motion.p>Message sent!</motion.p>
      ) : status.error ? (
        <motion.p>An error occured.</motion.p>
      ) : null}
    </Container>
  );
};

export default SubmitNotification;
