import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useTransition, a } from "@react-spring/three";
import { MeshWobbleMaterial } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

// MOUNT ANIMATION
// https://codesandbox.io/s/mount-transitions-1sccp?file=/src/App.js

// create items array: torus's for planet ring & sphere for planet

// Geometry component used when mapping 'trasition'

// Planet (Geometries) component to group rings & planet, and applying the mount trasition

const Ring = ({ show, ...props }) => {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.z -= 0.001;
  });

  const transition = useTransition(show, {
    from: { position: [0, 1.25, 0] },
    enter: { position: [0, 0.25, 0] },
    leave: { position: [0, -1.25, 0] },
    config: { mass: 2, friction: 20 },
  });

  return transition(({ position }) => (
    <a.points
      ref={mesh}
      {...props}
      position={position}
      rotation={[2, -0.5, 0]}
      receiveShadow
    >
      <torusGeometry args={[2.5, 0.01, 2, 300]} />
      <pointsMaterial color="#4F4E4D" size={0.005} />
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

  return (
    <group position={isSmallScreen ? [0, 1, 0] : [2.5, 0, 0]}>
      <Ring show={show} />
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
