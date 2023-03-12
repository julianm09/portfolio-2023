import styled from "styled-components";
import { motion } from "framer-motion";
import { sizes } from "utils/variables/sizes";
import { font } from "utils/variables/font";

export const H1 = ({
  children,
  xl,
  lg,
  md,
  sm,
  xs,
  initial = { opacity: 1 },
  whileInView = { opacity: 1 },
  viewport = { once: true },
  transition = { ease: "easeOut", duration: 0.5 },
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

const Cont = styled(motion.h1)`
  display: flex;
  flex-direction: row;
  font-weight: ${font.h1.weight};
  font-size: ${font.h1.xl};

	background: linear-gradient(-90deg, #8461E7, #D0CEEE, #BB8EE9, #C6C3EC, #DEDBF0);
	background-size: 300%;
  -webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: animated_text 10s ease-in-out infinite;
	-moz-animation: animated_text 10s ease-in-out infinite;
	-webkit-animation: animated_text 10s ease-in-out infinite;

  ${({ xl }) => xl};

  @media (max-width: ${sizes.lg}) {
    font-size: ${font.h1.lg};
    ${({ lg }) => lg};
  }

  @media (max-width: ${sizes.md}) {
    font-size: ${font.h1.md};
    ${({ md }) => md};
  }

  @media (max-width: ${sizes.sm}) {
    font-size: ${font.h1.sm};
    ${({ sm }) => sm};
  }

  @media (max-width: ${sizes.xs}) {
    ${({ xs }) => xs};
  }
`;
