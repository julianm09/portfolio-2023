import styled from "styled-components";
import { sizes } from "utils/variables";
import { motion } from "framer-motion";

export const Grid = ({
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
    >
      {children}
    </Cont>
  );
};

const Cont = styled(motion.div)`
display: grid; 
grid-template-columns: repeat(5, 1fr);
grid-template-rows: minmax(5, 1fr) 300px;
grid-template-areas: 
  "area-1 area-1 area-2 area-3 area-3"
  "area-1 area-1 area-2 area-3 area-3"
  "area-4 area-5 area-5 area-6 area-6"
  "area-4 area-5 area-5 area-6 area-6"
  "area-7 area-7 area-8 area-8 area-8";
grid-gap: 20px;
position: relative;

  ${({ xl }) => xl};

  @media (max-width: ${sizes.lg}) {
    ${({ lg }) => lg};
  }

  @media (max-width: ${sizes.md}) {
    ${({ md }) => md};
  }

  @media (max-width: ${sizes.sm}) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: minmax(7, 1fr) 300px;
    grid-template-areas: 
    "area-1 area-1 area-1 area-2 area-2"
    "area-1 area-1 area-1 area-2 area-2"
    "area-5 area-5 area-5 area-3 area-3"
    "area-5 area-5 area-5 area-3 area-3"
    "area-4 area-4 area-6 area-6 area-6"
    "area-4 area-4 area-6 area-6 area-6"
    "area-7 area-7 area-8 area-8 area-8";
    ${({ sm }) => sm};
  }

  @media (max-width: ${sizes.xs}) {
    display: flex;
    flex-direction: column;
    ${({ xs }) => xs};
  }
`;
