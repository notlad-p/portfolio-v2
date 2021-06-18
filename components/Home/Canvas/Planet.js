import { useRef, useState } from "react";
import * as THREE from 'three';
import { useFrame } from "@react-three/fiber";
import { useTransition, a, useTrail } from "@react-spring/three";
import { MeshWobbleMaterial } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

const Ring = ({ show, rotation, args, delay, ...props }) => {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.z -= 0.001;
  });

  const transition = useTransition(show, {
    from: { position: [0, 1.25, 0] },
    enter: { position: [0, 0.25, 0] },
    leave: { position: [0, -1.25, 0] },
    config: { mass: 1, friction: 20, },
    delay: delay,
  });

  return transition(({ position }) => (
    <a.points
      ref={mesh}
      {...props}
      position={position}
      rotation={rotation}
      receiveShadow
    >
      <ringGeometry args={args} />
      <pointsMaterial color="#4F4E4D" size={0.0075} />
    </a.points>
  ));

};

const PlanetSphere = ({ show, ...props }) => {
  const mesh = useRef();

  const transition = useTransition(show, {
    from: { position: [0, 1, 0], opacity: 0 },
    enter: { position: [0, 0, 0], opacity: 0.5 },
    leave: { position: [0, -1, 0], opacity: 0 },
    config: { mass: 2, friction: 16 },
  });

  return transition(({ position, opacity }) => (
    <a.mesh position={position} castShadow receiveShadow {...props} material-opacity={opacity} >
      <sphereGeometry args={[1.5, 32, 32]} />
      <MeshWobbleMaterial
        roughness={0.65}
        metalness={1}
        color="#3395D6"
        factor={8}
        speed={2}
      />
    </a.mesh>
  ));
};

const Planet = () => {
  const [show] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 832px)" });

  const ringCount = 15;
  const ringArr = Array.from(Array(ringCount).keys()).map((i) => ({
    rotation: [THREE.MathUtils.degToRad(115), THREE.MathUtils.degToRad(-30), (i * Math.random() * 100)],
    args: [i * .03 + 2.5, i * .04 + 2.51, 250],
    delay: i * 25,
  }));

  return (
    <group position={isSmallScreen ? [0, 1, 0] : [2.5, 0, 0]}>
      <Ring show={show} count={10} />
      {ringArr.map(({ rotation, args, delay }) => (
        <Ring show={show} rotation={rotation} args={args} delay={delay}  />
      ))}
      <PlanetSphere show={show} />
      <pointLight
        color={0xffffff}
        intensity={1}
        position={[-6, 6, 2]}
        castShadow
      />
    </group>
  );
};

export default Planet;
