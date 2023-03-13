import styled from "styled-components";
import { sizes } from "utils/variables";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import StarSpinScene from "../Three/StarSpinScene";
import { H2 } from "../Text/H2";
import { Text } from "../Text/Text";
import useWindowSize from "@/hooks/useWindowSize";

export const Tile = ({
  children,
  xl,
  lg,
  md,
  sm,
  xs,
  initial = { opacity: 0 },
  whileInView = { opacity: 1 },
  viewport = { once: true },
  transition = { duration: 0.25 },
  exit = { opacity: 0 },
  onClick = () => {},
  clickable,
  gridArea,
  url,
  star,
  headline,
  text,
}) => {
  const { router } = useRouter();
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
    >
      {headline && (
        <H2 xl="margin-bottom: 20px;" hover={hover}>
          {headline}
        </H2>
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
  padding: 80px;
  min-height: ${({ headline, url }) => (url || headline ? "300px" : "100px")};
  box-sizing: border-box;
  justify-content: center;
  transition: 0.2s ease;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(111, 111, 111, 0.1);
  border-radius: 10px;
  grid-area: ${({ gridArea }) => gridArea};

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
  transition: 0.5s ease;
  z-index: -1;
  opacity: ${({ hover }) => (hover ? 1 : 0)};
`;
