import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ContentCopy } from "@styled-icons/material-sharp/ContentCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useInView } from "react-intersection-observer";

import SectionContainer from "../SectionContainer";
import Heading from "../../Heading/Heading";
import TextInput from "../../Inputs/TextInput";
import Button from "../../Button";

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CopyContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
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
      color: '#3395D6',
      opacity: 0.7,
    }
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
          <CopyIcon data-tip data-for='copy' size="18" />
        </IconContainer>
      </CopyToClipboard>
      <CopyHeading animate={copied ? 'copied' : hover ? "hover" : "default"} variants={heading}>
        contact@daltonp.dev
      </CopyHeading>
    </CopyContainer>
  );
};

const Contact = () => {

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  
  const form = {
    hidden: {  },
    show: {
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const input = {
    hidden: { opacity: 0, y: 16, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
    show: { opacity: 1, y: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
  }

  // REMOVE ALL ANIMATION HERE

  // ADD ANIMATION FOR WHOLE CONTACT SECTION
    // ANIMATION ON SECTION HEADER??
      // OR ADD ANIMATION TO HEADING

  return (
    <SectionContainer id='contact' >
      <HeadingContainer>
        <Heading text="Contact" />
        <CopyEmail />
      </HeadingContainer>
      <Form ref={ref} variants={form} animate={inView ? 'show' : 'hidden'} >
        <TextInput variants={input} type="text" id="name" />
        <TextInput variants={input} type="email" id="email" />
        <TextInput variants={input} id="message" textarea />
        <motion.div variants={input} style={{ marginLeft: "auto", marginTop: "16px" }}>
          <Button>Submit</Button>
        </motion.div>
      </Form>
    </SectionContainer>
  );
};

export default Contact;
