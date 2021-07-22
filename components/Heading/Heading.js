import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 32px;

  @media (max-width: 450px) {
    margin-bottom: 16px;
  }
`;

const SectionHeading = styled(motion.h2)`
  margin: 0;
  font-size: 32px;
  opacity: 0;
`;

const Heading = ({ text }) => {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <TitleContainer ref={ref} >
      <SectionHeading
        animate={{ y: inView ? 0 : 16, opacity: inView ? 1 : 0 }}
        transition={{ type: "spring", mass: 0.5, bounce: 0 }}
      >
        {text}
      </SectionHeading>
    </TitleContainer>
  );
};

export default Heading;
