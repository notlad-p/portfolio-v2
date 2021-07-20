import * as THREE from "three";
import { useRef, Suspense, useEffect } from "react";
import { Canvas as C, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import styled from "styled-components";

import Planet from "./Planet";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../../Footer/Footer";

function ScrollContainer({ scroll, children }) {
  const { viewport } = useThree();
  const group = useRef();
  const vec = new THREE.Vector3();
  useFrame(() =>
    group.current.position.lerp(
      vec.set(0, viewport.height * scroll.current * 4, 0),
      0.1
    )
  );
  return <group ref={group}>{children}</group>;
}

function Scene() {
  const viewport = useThree((state) => state.viewport);

  return (
    <>
      <Planet />
      <Stars count={1000} factor={2} />
    </>
  );
}

const Scroll = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  top: 0;
  left: 0;
`;

const Canvas = () => {
  const scrollRef = useRef();
  const scroll = useRef(0);
  const doScroll = (e) => {
    return (scroll.current = e.target.scrollTop / e.target.scrollHeight);
  };
  return (
    <>
      <C
        onCreated={(state) => state.events.connect(scrollRef.current)}
        raycaster={{
          computeOffsets: ({ clientX, clientY }) => ({
            offsetX: clientX,
            offsetY: clientY,
          }),
        }}
      >
        <Suspense fallback={null}>
          <ScrollContainer scroll={scroll}>
            <Scene />
          </ScrollContainer>
        </Suspense>
      </C>
      <Scroll ref={scrollRef} onScroll={doScroll} id='scroll' >
        <Header />
        <Projects />
        <Contact />
        <Footer />
      </Scroll>
    </>
  );
};

export default Canvas;
