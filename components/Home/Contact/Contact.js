import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";

import SectionContainer from "../SectionContainer";
import Heading from "../../Heading/Heading";
import CopyEmail from "./CopyEmail";
import TextInput from "../../Inputs/TextInput";
import Button from "../../Button";
import SubmitNotification from "./SubmitNotification";

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

const Contact = () => {
  const [formVals, setFormVals] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    pending: false,
    success: false,
    error: false,
  });

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  const onChange = (e) => {
    setFormVals((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const form = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const input = {
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

  // resets status after 1.5sec for SubmitNotification exit animation
  const resetStatus = () => {
    setTimeout(() => {
      setStatus({ pending: false, success: false, error: false });
    }, 1500);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    // set pending state
    setStatus((state) => ({ ...state, pending: true }));

    // send request
    axios
      .post(
        `${
          process.env.NODE_ENV === "development"
            ? "http://localhost:3000"
            : "https://www.daltonp.dev"
        }/api/contact`,
        formVals
      )
      .then((res) => {
        console.log(res);
        if (res.data === "sent") {
          setStatus((state) => ({ ...state, success: true, pending: false }));
          resetStatus();
          setFormVals({ name: "", email: "", message: "" });
        } else {
          setStatus((state) => ({ ...state, error: true, pending: false }));
          resetStatus();
        }
      })
      .catch((error) => {
        console.log(error);
        setStatus((state) => ({ ...state, error: true, pending: false }));
        resetStatus();
      });
  };

  return (
    <SectionContainer id="contact">
      <HeadingContainer>
        <Heading text="Contact" />
        <CopyEmail />
      </HeadingContainer>
      <Form
        ref={ref}
        variants={form}
        animate={inView ? "show" : "hidden"}
        onSubmit={sendEmail}
      >
        <TextInput
          value={formVals.name}
          onChange={onChange}
          variants={input}
          type="text"
          id="name"
        />
        <TextInput
          value={formVals.email}
          onChange={onChange}
          variants={input}
          type="email"
          id="email"
        />
        <TextInput
          value={formVals.message}
          onChange={onChange}
          variants={input}
          id="message"
          textarea
        />
        <motion.div
          variants={input}
          style={{ marginLeft: "auto", marginTop: "16px" }}
        >
          <Button>Submit</Button>
        </motion.div>
      </Form>
      <SubmitNotification status={status} />
    </SectionContainer>
  );
};

export default Contact;
