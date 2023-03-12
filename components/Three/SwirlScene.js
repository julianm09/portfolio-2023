import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { themes } from "utils/variables";
import { useTheme } from "utils/provider";
import Ball from "public/Ball";
import Cube from "public/Cube";
import Pyramid from "public/Pyramid";
import useScrollTop from "@/hooks/useScrollTop";
import useWindowSize from "@/hooks/useWindowSize";
import { Container } from "../Container/Container";

export default function SwirlScene({}) {
  const { theme } = useTheme();
  const scrollTop = useScrollTop();
  const windowSize = useWindowSize();
  const [hover, setHover] = useState(false);

  console.log(scrollTop);

  return (
    <>
      <Container
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        xl="height: 100%; width: 100%; position: absolute;"
      ></Container>

      <Canvas
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: -100,
          background: "peachfuzz",
        }}
      >
        <PerspectiveCamera
          fov={10}
          makeDefault
          rotation={[0, 0, 0]}
          position={windowSize.width > 500 ? [0, 0, 0] : [0, 0, 10]}
        />
        <ambientLight />
        <pointLight position={[-10, -10, 100]} />
        <Cube
          px={-2.2}
          py={-2}
          pz={-10}
          ry={2}
          scrollTop={0}
          color={hover ? "#ffbf1c" : themes[theme].primary}
        />
        <Cube
          px={2.2}
          py={-2}
          pz={-10}
          ry={2}
          scrollTop={0}
          color={hover ? "#cfadf0" : themes[theme].primary}
        />
        <Cube
          px={2.2}
          py={2}
          pz={-10}
          ry={2}
          scrollTop={0}
          color={hover ? "#7bbeff" : themes[theme].primary}
        />
        <Cube
          px={-2.2}
          py={2}
          pz={-10}
          ry={2}
          scrollTop={0}
          color={hover ? "#ff854d" : themes[theme].primary}
        />
        <Cube
          px={0}
          py={0}
          pz={-20}
          ry={2}
          scrollTop={0}
          color={hover ? "#ff854d" : themes[theme].primary}
        />
      </Canvas>
    </>
  );
}
