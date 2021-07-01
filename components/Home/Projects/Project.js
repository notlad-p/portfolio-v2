import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Button from "../../Button";

const BordersContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 395px;
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

const ProjectContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: ${({ flip }) => (flip ? "row-reverse" : "row")};
  background-color: rgba(255, 255, 255, 0.05);

  @media (max-width: 1050px) {
    flex-direction: column;
    align-items: unset;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 700px;
  height: 100%;
  @media (max-width: 1050px) {
    width: 100%;
    height: 45%;
  } ;
`;

const ImageOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 2;
`;

const ContentContainer = styled(motion.div)`
  padding: 0px 8px 8px 8px;
  width: 40%;

  @media (max-width: 1050px) {
    width: 100%;
  }
`;

const ProjectTitle = styled(motion.h3)`
  margin: 16px 8px;
  font-size: 24px;
`;

const TagsContainer = styled(motion.div)`
  margin: 0 4px 16px 4px;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px;
  margin-left: 4px;
  margin-right: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  font-size: 12px;
  text-align: center;
`;

const ProjectDescription = styled(motion.p)`
  margin: 0 8px 16px 8px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Project = ({
  title,
  description,
  image,
  tech,
  codeLink,
  projectLink,
  flip,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1,
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
    hidden: { opacity: 0, y: 16, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
    show: { opacity: 1, y: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
  };

  return (
    <Borders
      flip={flip}
      isHovered={isHovered}
      inView={inView}
      setIsHovered={setIsHovered}
    >
      <ProjectContainer
        flip={flip}
        ref={ref}
        variants={container}
        animate={inView ? "show" : "hidden"}
      >
        <ImageContainer>
          <ImageOverlay animate={{ opacity: isHovered ? 0 : 0.35 }} />
          {image}
        </ImageContainer>
        <ContentContainer
          variants={contentContainer}
          animate={inView ? "show" : "hidden"}
        >
          <ProjectTitle variants={item}>{title}</ProjectTitle>
          <TagsContainer variants={item}>
            {tech.map((t, i) => (
              <Tag key={i}>{t}</Tag>
            ))}
          </TagsContainer>
          <ProjectDescription variants={item}>{description}</ProjectDescription>
          <motion.div variants={item}>
            <a href={codeLink} target='_blank' rel="noopener noreferrer" ><Button text>Code</Button></a>
            <a href={projectLink} target='_blank' rel="noopener noreferrer" ><Button text>Project</Button></a>
          </motion.div>
        </ContentContainer>
      </ProjectContainer>
    </Borders>
  );
};

export default Project;
