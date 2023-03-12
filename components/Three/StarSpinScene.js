import ReactDOM from "react-dom";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Star from "/public/Star";
import Rocket from "/public/Rocket";
import useWindowSize from "@/hooks/useWindowSize";
import { PerspectiveCamera, Stars } from "@react-three/drei";
import { useTheme } from "@/utils/provider";
import useScrollTop from "@/hooks/useScrollTop";
import { themes } from "@/utils/variables";

export default function StarSpinScene({hover}) {
  const windowSize = useWindowSize();
  const scrollTop = useScrollTop();
  const { theme } = useTheme();

  return (
    <Canvas
    frameloop={hover ? "always" : "never"}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        opacity: hover ? 1 : 0,
        transition: '0.25s ease',
        top: 0,
        zIndex: -100,
        background: themes[theme].primary,
      }}
    >
      <Suspense fallback={null}>
        <PerspectiveCamera
          fov={75}
          makeDefault
          position={windowSize.width > 500 ? [0, 0, 5] : [0, 0, 10]}
        />
        <ambientLight intensity={1} color={theme === "dark" ? "blue" : "grey"} />
        <pointLight intensity={1} color={"white"} position={[10, 10, 10]} />
        <pointLight
          intensity={1}
          color={theme === "dark" ? "pink" : "white"}
          position={[-100, -100, -10]}
        />
        <Star scrollTop={0} x={4} y={0} z={0} rx={0} ry={0} rz={0} />
      </Suspense>
    </Canvas>
  );
}
