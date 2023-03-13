import styled from "styled-components";
import { motion } from "framer-motion";
import { sizes } from "utils/variables/sizes";
import { font } from "utils/variables/font";

export const H2 = ({
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
  hover
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
      hover={hover}
    >
      {children}
    </Cont>
  );
};

const Cont = styled.h2`
  display: flex;
  flex-direction: row;
  margin: 0 0 20px 0;
  font-weight: ${font.h2.weight};
  font-size: ${font.h2.lg};

  ${({hover}) => hover && `
  background: linear-gradient(-90deg, #8461E7, #D0CEEE, #BB8EE9, #C6C3EC, #DEDBF0);
	background-size: 300%;
  -webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: animated_text 10s ease-in-out infinite;
	-moz-animation: animated_text 10s ease-in-out infinite;
	-webkit-animation: animated_text 10s ease-in-out infinite;
  `};

  ${({xl}) => xl};

  @media (max-width: ${sizes.lg}) {
    ${({lg}) => lg};
  }

  @media (max-width: ${sizes.md}) {
    ${({md}) => md};
  }

  @media (max-width: ${sizes.sm}) {
    ${({sm}) => sm};
  }

  @media (max-width: ${sizes.xs}) {
    ${({xs}) => xs};
  }
`;
