import styled, { css } from "styled-components";
import { Github } from "@styled-icons/remix-line";
import { Linkedin } from "@styled-icons/remix-line";
import { Codepen } from "@styled-icons/icomoon";
import { Codesandbox } from "@styled-icons/simple-icons";
import { motion } from "framer-motion";

import SectionContainer from "../Home/SectionContainer";

// Footer:
// Links: GitHub, LinkedIn, CodePen, CodeSandbox
// Created by Dalton

const linkData = [
  {
    icon: "",
    link: "",
  },
];

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const IconContainer = styled(motion.a)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  margin-right: ${({ mr }) => (mr ? "8px" : 0)};
  border: 1px solid ${({ theme }) => theme.colors.borders};
  cursor: pointer;
`;

const iconStyle = css`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const GithubIcon = styled(Github)`
  ${iconStyle}
`;
const LinkedinIcon = styled(Linkedin)`
  ${iconStyle}
`;
const CodepenIcon = styled(Codepen)`
  ${iconStyle}
`;
const CodesandboxIcon = styled(Codesandbox)`
  ${iconStyle}
`;

const CreatedBy = styled.p`
  ${iconStyle};
  margin-top: 16px;
  font-size: 14px;
  text-align: center;
`;

const RepoLink = styled.a`
  text-decoration: underline;
`;

const Footer = () => {
  const iconHover = {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  };

  return (
    <SectionContainer>
      <Center>
        <IconContainer
          whileHover={iconHover}
          href="https://github.com/notlad-p"
          target="_blank"
          rel="noopener noreferrer"
          mr
        >
          <GithubIcon size="24" />
        </IconContainer>
        <IconContainer
          whileHover={iconHover}
          href="https://www.linkedin.com/in/dalton-perkins-922a27208/"
          target="_blank"
          rel="noopener noreferrer"
          mr
        >
          <LinkedinIcon size="24" />
        </IconContainer>
        <IconContainer
          whileHover={iconHover}
          href="https://codepen.io/daltronp"
          target="_blank"
          rel="noopener noreferrer"
          mr
        >
          <CodepenIcon size="24" />
        </IconContainer>
        <IconContainer
          whileHover={iconHover}
          href="https://codesandbox.io/u/daltonp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CodesandboxIcon size="24" />
        </IconContainer>
      </Center>
      <CreatedBy>
        Created by{" "}
        <RepoLink
          href="https://github.com/notlad-p/portfolio-v2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dalton
        </RepoLink>
      </CreatedBy>
    </SectionContainer>
  );
};

export default Footer;
