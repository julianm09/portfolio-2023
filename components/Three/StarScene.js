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

export default function StarScene({}) {
  const windowSize = useWindowSize();
  const scrollTop = useScrollTop();
  const { theme } = useTheme();

  return (
    <Canvas
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        background: themes[theme].primary,
      }}
    >
      <Suspense fallback={null}>
        <PerspectiveCamera
          fov={75}
          makeDefault
          position={windowSize.width > 500 ? [0, 0, 5] : [0, 0, 10]}
        />
        <ambientLight
          intensity={1}
          color={theme === "dark" ? "blue" : "grey"}
        />
        <pointLight intensity={1} color={"white"} position={[10, 10, 10]} />
        <pointLight
          intensity={1}
          color={theme === "dark" ? "pink" : "white"}
          position={[-100, -100, -10]}
        />

        {theme === "dark" ? (
          <Stars
            color="black"
            radius={1000}
            depth={100}
            count={1000}
            factor={4}
            saturation={0}
          />
        ) : (
          <></>
        )}
        <Star scrollTop={scrollTop} x={15} y={0} z={-15} rx={0} ry={0} rz={0} />
        <Star
          scrollTop={scrollTop}
          x={0}
          y={-20}
          z={-20}
          rx={0}
          ry={0}
          rz={0}
        />
        <Star
          scrollTop={scrollTop}
          x={-15}
          y={-35}
          z={-15}
          rx={0}
          ry={0}
          rz={0}
        />
        <Star
          scrollTop={scrollTop}
          x={10}
          y={-40}
          z={-5}
          rx={0}
          ry={0}
          rz={0}
        />
        <Star
          scrollTop={scrollTop}
          x={5}
          y={-60}
          z={-25}
          rx={0}
          ry={0}
          rz={0}
        />
        <Star
          scrollTop={scrollTop}
          x={5}
          y={-100}
          z={-25}
          rx={0}
          ry={0}
          rz={0}
        />
        <Star
          scrollTop={scrollTop}
          x={-10}
          y={-140}
          z={-20}
          rx={0}
          ry={0}
          rz={0}
        />

        <Star
          scrollTop={scrollTop}
          x={-scrollTop / 8 + 600}
          y={-250}
          z={-50}
          rx={0}
          ry={0}
          rz={0}
        />
      </Suspense>
    </Canvas>
  );
}
