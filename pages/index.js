import { Button } from "@/components/Button/Button";
import { Column } from "@/components/Container/Column";
import { Container } from "@/components/Container/Container";
import { Grid } from "@/components/Grid/Grid";
import { Tile } from "@/components/Grid/Tile";
import { H1 } from "@/components/Text/H1";
import { H2 } from "@/components/Text/H2";
import { Text } from "@/components/Text/Text";
import RocketScene from "@/components/Three/RocketScene";
import Scene from "@/components/Three/Scene";
import StarScene from "@/components/Three/StarScene";
import StarSceneThree from "@/components/Three/StarSceneThree";
import StarSceneTwo from "@/components/Three/StarSceneTwo";
import StarSpinScene from "@/components/Three/StarSpinScene";
import SwirlScene from "@/components/Three/SwirlScene";
import { handleTheme } from "@/utils/functions/handleTheme";
import { useTheme } from "@/utils/provider";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  ArrowRightCircle,
  GitHub,
  Instagram,
  Linkedin,
  Mail,
} from "react-feather";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Column>
      <Grid xl="padding: 20px;">
        <Tile
          transition={{ ease: "linear", duration: 0.25, delay: 0.1 }}
          xl="grid-area: area-1; text-align: left;"
        >
          <H1 xl="margin-bottom: 10px;">Hi, I'm Julian</H1>
          <Text xl="margin-bottom: 20px; max-width: 550px;">
            A frontend developer and designer based in Vancouver, BC. This
            website is a playground to showcase what I have been working on.
            Thanks for visiting!
          </Text>
          <Button href="mailto:julianmayes@gmail.com">Contact Me</Button>
        </Tile>
        <Tile
          nav
          transition={{ ease: "linear", duration: 0.25, delay: 0.2 }}
          xl="grid-area: area-2; align-items: center;"
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
            <Container xl="margin-right: 20px;"></Container>
            <Container>
              <Link href="https://github.com/julianm09" target="_blank">
                <GitHub />
              </Link>
            </Container>
          </Container>
        </Tile>
        <Tile
          transition={{ ease: "linear", duration: 0.25, delay: 0.6 }}
          xl="grid-area: area-3; padding: 0;"
        >
          <StarSceneThree />
        </Tile>
        <Tile
          transition={{ ease: "linear", duration: 0.25, delay: 0.1 }}
          xl="grid-area: area-4; padding: 0;"
        >
          <StarScene />
        </Tile>

        <Tile
          headline="Projects"
          text="A collection of work"
          transition={{ ease: "linear", duration: 0.25, delay: 0.2 }}
          clickable
          xl="grid-area: area-5;"
          onClick={() =>
            router.push("/projects", undefined, {
              scroll: false,
              shallow: true,
            })
          }
        />

        <Tile
          headline="Blog"
          text="Coming Soon"
          transition={{ ease: "linear", duration: 0.25, delay: 0.3 }}
          xl="grid-area: area-7; align-items: center; color: grey;"
          xs="text-align: center;"
        />
        <Tile
          headline="About Me"
          text="Allow me to introduce myself"
          transition={{ ease: "linear", duration: 0.25, delay: 0.4 }}
          clickable
          xl="grid-area: area-6;"
          onClick={() =>
            router.push("/about", undefined, {
              scroll: false,
              shallow: true,
            })
          }
        />

        <Tile
          transition={{ ease: "linear", duration: 0.25, delay: 0.6 }}
          xl="grid-area: area-8; padding: 0;"
        >
          <StarSceneTwo />
        </Tile>
        <Tile
          nav
          transition={{ ease: "linear", duration: 0.25, delay: 0.6 }}
          xl="grid-area: area-9;"
          clickable
          onClick={() =>
            router.push("/about", undefined, {
              scroll: false,
              shallow: true,
            })
          }
        >
          <Text xl="margin-bottom: 20px;">About Me</Text>
          <Text xl="color: grey">
            <ArrowRightCircle />
          </Text>
        </Tile>
      </Grid>
    </Column>
  );
}
