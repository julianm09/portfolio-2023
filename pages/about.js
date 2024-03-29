import { Button } from "@/components/Button/Button";
import { Column } from "@/components/Container/Column";
import { Container } from "@/components/Container/Container";
import { Grid } from "@/components/Grid/Grid";
import { Tile } from "@/components/Grid/Tile";
import { Tech } from "@/components/Tech/Tech";
import { H1 } from "@/components/Text/H1";
import { H2 } from "@/components/Text/H2";
import { H3 } from "@/components/Text/H3";
import { Text } from "@/components/Text/Text";
import CubeScene from "@/components/Three/CubeScene";
import PyramidScene from "@/components/Three/PyramidScene";
import RocketScene from "@/components/Three/RocketScene";
import Scene from "@/components/Three/Scene";
import StarScene from "@/components/Three/StarScene";
import StarSceneThree from "@/components/Three/StarSceneThree";
import StarSceneTwo from "@/components/Three/StarSceneTwo";
import SwirlScene from "@/components/Three/SwirlScene";
import { handleTheme } from "@/utils/functions/handleTheme";
import { useTheme } from "@/utils/provider";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  ArrowLeftCircle,
  ArrowRight,
  ArrowRightCircle,
  GitHub,
  Instagram,
  Linkedin,
  Mail,
} from "react-feather";
import Iframe from "react-iframe";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Column xl="padding: 20px;">
        <Grid
          xl={`
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: minmax(3, 1fr) 300px;
          grid-template-areas: 
            "area-1 area-2 area-2 area-3 area-3"
            "area-4 area-5 area-5 area-6 area-6"
            "area-7 area-7 area-8 area-8 area-9";
          `}
          sm={`
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: minmax(4, 1fr) 300px;
          grid-template-areas: 
            "area-1 area-1 area-2 area-2 area-2"
            "area-5 area-5 area-5 area-3 area-3"
            "area-4 area-4 area-6 area-6 area-6"
            "area-7 area-7 area-7 area-8 area-8"
            "area-9 area-9 area-9 area-9 area-9";
          `}
          xs={`
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: minmax(9, 1fr) 300px;
          grid-template-areas:
            "area-1 area-1 area-1 area-1 area-1"
            "area-2 area-2 area-2 area-2 area-2"
            "area-3 area-3 area-3 area-3 area-3"
            "area-5 area-5 area-5 area-5 area-5"
            "area-6 area-6 area-6 area-6 area-6"
            "area-4 area-4 area-4 area-4 area-4"
            "area-8 area-8 area-8 area-8 area-8"
            "area-7 area-7 area-7 area-7 area-7"
            "area-9 area-9 area-9 area-9 area-9";
          `}
        >
          <Tile
            nav
            clickable
            transition={{ ease: "linear", duration: 0.25, delay: 0.1 }}
            xl="grid-area: area-1"
            onClick={() =>
              router.push("/", undefined, {
                scroll: false,
                shallow: true,
              })
            }
          >
            <Text xl="margin-bottom: 20px;">Go Back Home</Text>
            <Text xl="color: grey">
              <ArrowLeftCircle />
            </Text>
          </Tile>
          <Tile
            minimum
            transition={{ ease: "linear", duration: 0.25, delay: 0.2 }}
            xl="grid-area: area-2; text-align: left;"
          >
            <H2 xl="margin-bottom: 20px;">Hello 👋</H2>
            <Text>
              My name is Julian, and I make websites and apps. I love music and photography. My main tools include Next JS, Three JS, and
              Framer Motion, while I use Figma and Blender for design. I am
              always open to collaborate. So don't be afraid to get in touch!
            </Text>
          </Tile>
          <Tile
            transition={{ ease: "linear", duration: 0.25, delay: 0.5 }}
            xl="grid-area: area-3; padding: 0;"
          >
            <StarScene />
          </Tile>
          <Tile
            transition={{ ease: "linear", duration: 0.25, delay: 0.1 }}
            xl="grid-area: area-4; padding: 0;"
          >
            <StarSceneTwo />
          </Tile>

          <Tile
            nav
            transition={{ ease: "linear", duration: 0.25, delay: 0.2 }}
            xl="grid-area: area-5; align-items: center;"
          >
            <Container>
              <Container xl="margin-right: 20px;">
                <Link
                  href="https://www.linkedin.com/in/julian-mayes/"
                  target="_blank"
                >
                  <Linkedin />
                </Link>
              </Container>
              <Container xl="margin-right: 20px;">
              </Container>
              <Container>
                <Link href="https://github.com/julianm09" target="_blank">
                  <GitHub />
                </Link>
              </Container>
            </Container>
          </Tile>

          <Tile
            minimum
            transition={{ ease: "linear", duration: 0.25, delay: 0.3 }}
            xl="grid-area: area-6;"
          >
            <H3 xl="margin-bottom: 20px; text-align: left;">Tech I've Used</H3>
            <Tech />
          </Tile>
          <Tile
            transition={{ ease: "linear", duration: 0.25, delay: 0.1 }}
            xl="grid-area: area-7; padding: 0;"
          >
            <StarSceneThree />
          </Tile>
          <Tile
            minimum
            transition={{ ease: "linear", duration: 0.25, delay: 0.4 }}
            xl="grid-area: area-8; align-items: center;"
          >
            <H3 xl="margin-bottom: 20px;">Get in Touch!</H3>

            <Button href="mailto:julianmayes@gmail.com">Contact Me</Button>
          </Tile>
          <Tile
            nav
            transition={{ ease: "linear", duration: 0.25, delay: 0.6 }}
            xl="grid-area: area-9;"
            clickable
            onClick={() =>
              router.push("/projects", undefined, {
                scroll: false,
                shallow: true,
              })
            }
          >
            <Text xl="margin-bottom: 20px;">Projects</Text>
            <Text xl="color: grey">
              <ArrowRightCircle />
            </Text>
          </Tile>
        </Grid>
      </Column>
    </>
  );
}
