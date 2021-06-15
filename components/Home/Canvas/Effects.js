import React, { useRef, useEffect } from "react";
import { extend, useThree, useFrame } from "react-three-fiber";
import { Effects as DreiEffects } from '@react-three/drei';

const Effects = () => {

  return (
    <DreiEffects multisamping={8} renderIndex={1} disableGamma={false} disableRenderPass={false} >
    </DreiEffects>
  );
}

export default Effects;