import styled from "styled-components";
import { sizes } from "utils/variables";
import { motion } from "framer-motion";

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
  transition = { ease: "easeOut", duration: 0.5 },
  exit = { opacity: 0 },
  onClick = () => {},
  clickable,
  gridArea,
}) => {
  return (
    <Cont
      onClick={onClick}
      xl={xl}
      lg={lg}
      md={md}
      sm={sm}
      xs={xs}
      clickable={clickable}
      gridArea={gridArea}
      viewport={viewport}
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      exit={exit}
    >
      {children}
    </Cont>
  );
};

const Cont = styled(motion.div)`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 40px;
  box-sizing: border-box;
  justify-content: center;
  overflow: hidden;
  height: 300px;
  transition: 0.2s ease;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(111, 111, 111, 0.25);
  border-radius: 10px;
  grid-area: ${({ gridArea }) => gridArea};

  ${({ clickable }) =>
    clickable &&
    `
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
  }
`;
