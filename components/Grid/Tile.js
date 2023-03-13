import styled from "styled-components";
import { sizes } from "utils/variables";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import StarSpinScene from "../Three/StarSpinScene";
import { H2 } from "../Text/H2";
import { Text } from "../Text/Text";
import useWindowSize from "@/hooks/useWindowSize";
import { H3 } from "../Text/H3";

export const Tile = ({
  children,
  xl,
  lg,
  md,
  sm,
  xs,
  initial = { opacity: 0, x: 50 },
  whileInView = { opacity: 1, x: 0 },
  viewport = { once: true },
  transition = { duration: 0.25 },
  exit = { opacity: 0, x: -50 },
  onClick = () => {},
  clickable,
  gridArea,
  url,
  star,
  headline,
  text,
  minimum,
}) => {
  const [hover, setHover] = useState();
  const { width } = useWindowSize();

  return (
    <Cont
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      xl={xl}
      lg={lg}
      md={md}
      sm={sm}
      xs={xs}
      clickable={clickable}
      gridArea={gridArea}
      viewport={viewport}
      exit={exit}
      transition={transition}
      initial={initial}
      whileInView={whileInView}
      url={url}
      headline={headline}
      minimum={minimum}
    >
      {headline && (
        <H3 xl="margin-bottom: 10px;" hover={hover}>
          {headline}
        </H3>
      )}

      {text && <Text>{text}</Text>}
      {children}
      {url && <Img hover={hover} url={url && url} />}
      {star && <StarSpinScene hover={hover} />}
    </Cont>
  );
};

const Cont = styled(motion.div)`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 60px 40px;
  min-height: 300px;
  box-sizing: border-box;
  justify-content: center;
  transition: 0.2s ease;
  border: 1px solid rgba(111, 111, 111, 0.1);
  border-radius: 10px;
  grid-area: ${({ gridArea }) => gridArea};
  overflow: hidden;

  ${({ clickable }) =>
    clickable &&
    `
    box-shadow: 0px 0px 20px rgba(100, 100, 100, 0.1);
    align-items: center; 
    cursor: pointer; 
    &:hover{
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0);
  }`}

  ${({ xl }) => xl};

  @media (max-width: ${sizes.lg}) {
    ${({ lg }) => lg};
  }

  @media (max-width: ${sizes.md}) {
    ${({ md }) => md};
  }

  @media (max-width: ${sizes.sm}) {
    ${({ sm }) => sm};
  }

  @media (max-width: ${sizes.xs}) {
    ${({ xs }) => xs};
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0);
  }
`;

const Img = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  transition: 0.25s ease;
  z-index: ${({ hover }) => (hover ? 1 : -1)};
  opacity: ${({ hover }) => (hover ? 1 : 0)};
`;
