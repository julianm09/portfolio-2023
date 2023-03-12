import styled from "styled-components";
import { sizes } from "utils/variables";
import { motion } from "framer-motion";
import { Item } from "./Item";
import { technologies } from "./technologies";

export const Tech = ({
  children,
  xl,
  lg,
  md,
  sm,
  xs,
  initial = {},
  whileInView = {},
  viewport = {},
  transition = {},
  onCLick = () => {},
  onMouseOver = () => {},
  onMouseOut = () => {},
}) => {
  return (
    <Cont
      xl={xl}
      lg={lg}
      md={md}
      sm={sm}
      xs={xs}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      onCLick={onCLick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {technologies && technologies.map((item) => <Item>{item}</Item>)}
    </Cont>
  );
};

const Cont = styled(motion.div)`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  width: 100%;

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
