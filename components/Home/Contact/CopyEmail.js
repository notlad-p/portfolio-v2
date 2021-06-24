import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ContentCopy } from "@styled-icons/material-sharp/ContentCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;

  @media (max-width: 450px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
    margin-bottom: 16px;
  }
`;

const IconContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 100%;
  cursor: pointer;
`;

const CopyIcon = styled(ContentCopy)`
  color: ${({ theme }) => theme.colors.primary};
`;

const CopyHeading = styled(motion.h3)`
  display: inline;
  margin: 0;
  margin-left: 4px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const CopyEmail = () => {
  const [hover, setHover] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleMouseOver = () => setHover(true);
  const handleMouseOut = () => setHover(false);

  const heading = {
    hover: {
      color: "#E9E9E9",
    },
    default: {
      color: "#A6A6A6",
    },
    copied: {
      color: "#3395D6",
      opacity: 0.7,
    },
  };

  return (
    <CopyContainer>
      <CopyToClipboard
        text={"contact@daltonp.dev"}
        onCopy={() => setCopied(true)}
      >
        <IconContainer
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          whileHover={{
            backgroundColor: "rgba(51, 149, 214, 0.1)",
            scale: 1.1,
          }}
          whileTap={{ scale: 1 }}
        >
          <CopyIcon data-tip data-for="copy" size="18" />
        </IconContainer>
      </CopyToClipboard>
      <CopyHeading
        animate={copied ? "copied" : hover ? "hover" : "default"}
        variants={heading}
      >
        contact@daltonp.dev
      </CopyHeading>
    </CopyContainer>
  );
};

export default CopyEmail;