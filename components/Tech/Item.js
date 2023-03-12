import styled from "styled-components";
import { sizes } from "utils/variables";
import { motion } from "framer-motion";

export const Item = ({
  key
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
      key={key}
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
      {children}
    </Cont>
  );
};

const Cont = styled(motion.div)`
  display: flex;
  position: relative;
  border-radius: 50px;
  padding: 5px 20px;
  white-space: nowrap;
  margin: 0 10px 10px 0;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid grey;
  // background: linear-gradient(-90deg, #DEDBF0, #D0CEEE, #BB8EE9, #C6C3EC, #DEDBF0);
	// background-size: 300%;
	// animation: animated_text 10s ease-in-out infinite;
	// -moz-animation: animated_text 10s ease-in-out infinite;
	// -webkit-animation: animated_text 10s ease-in-out infinite;

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
