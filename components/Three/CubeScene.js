import React from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { themes } from "@/utils/variables";
import { useTheme } from "@/utils/provider";
import Ball from "public/Ball";
import Cube from "public/Cube";
import Pyramid from "public/Pyramid";
import useWindowSize from "@/hooks/useWindowSize";
import useScrollTop from "@/hooks/useScrollTop";

export default function CubeScene({}) {
  const { theme } = useTheme();

  const { windowSize } = useWindowSize();
  const scrollTop = useScrollTop();

  return (
    <Canvas
      style={{
        width: "100%",
        height: "100%",
        background: themes[theme].primary,
      }}
    >
      <PerspectiveCamera
        fov={50}
        makeDefault
        rotation={[0, 0, 0]}
        position={[0, 0, 10]}
      />
      <ambientLight />
      <pointLight position={[-10, -10, 100]} />
      <Cube px={-5} py={5} pz={-15} ry={1} scrollTop={scrollTop} />
      <Cube px={-5} py={-10} pz={-30} ry={2} scrollTop={scrollTop} />
      <Cube px={5} py={15} pz={-20} ry={2} scrollTop={scrollTop} />
    </Canvas>
  );
}
