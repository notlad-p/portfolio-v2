import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Button from "../../Button";

const Container = styled(motion.div)`
  display: flex;
  margin-bottom: 96px;
  background-color: rgba(255, 255, 255, 0.02);

  @media (max-width: 1050px) {
    flex-direction: column-reverse;
  } ;
`;

const ContentContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 323px;
  padding: 0 28px;
  background-color: rgba(255, 255, 255, 0.05);

  @media (max-width: 1050px) {
    width: 100%;
    padding: 32px 28px;
  } ;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 600px;
  height: 337px;

  @media (max-width: 1050px) {
    width: 100%;
    height: auto;
    padding-bottom: 56.25%;
  } ;
`;

const Title = styled(motion.h3)`
  margin: 0;
  padding-bottom: 24px;
  font-size: 22px;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px;
  margin-right: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  font-size: 12px;
  text-align: center;
`;

const Description = styled(motion.p)`
  margin: 16px 0 24px 0;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Project = ({
  title,
  description,
  image,
  tech,
  codeLink,
  projectLink,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  const contentContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 16,
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    },
    show: {
      opacity: 1,
      y: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    },
  };

  return (
    <Container
      ref={ref}
      variants={container}
      animate={inView ? "show" : "hidden"}
    >
      <ContentContainer
        variants={contentContainer}
        animate={inView ? "show" : "hidden"}
      >
        <div>
          <Title variants={item}>{title}</Title>
          <motion.div variants={item}>
            {tech.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </motion.div>
          <Description variants={item}>{description}</Description>
          <motion.div variants={item}>
            {codeLink && (
              <a href={codeLink} target="_blank" rel="noopener noreferrer">
                <Button text>Code</Button>
              </a>
            )}
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
              <Button text>Project</Button>
            </a>
          </motion.div>
        </div>
      </ContentContainer>
      <ImageContainer>{image}</ImageContainer>
    </Container>
  );
};

export default Project;
