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
import StarSpinScene from "@/components/Three/StarSpinScene";
import SwirlScene from "@/components/Three/SwirlScene";
import { handleTheme } from "@/utils/functions/handleTheme";
import { useTheme } from "@/utils/provider";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ArrowRightCircle, Instagram, Linkedin, Mail } from "react-feather";

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
          xl="grid-area: area-1;"
        >
          <H1 xl="margin-bottom: 20px;">Hi, I'm Julian</H1>
          <Text>
            A web developer and designer based in Vancouver, BC. This website is
            a playground to showcase what I have been working on. Thanks for
            visiting 🚀
          </Text>
        </Tile>
        <Tile
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
            <Container xl="margin-right: 20px;">
              <Link
                href="https://www.instagram.com/julianmayes.dev/"
                target="_blank"
              >
                <Instagram />
              </Link>
            </Container>
            <Container>
              <Link href="#">
                <Mail />
              </Link>
            </Container>
          </Container>
        </Tile>
        <Tile
          xl="grid-area: area-3; padding: 0;"
          clickable
          onClick={() => handleTheme(theme, setTheme)}
        >
          <RocketScene />
        </Tile>
        <Tile
          xl="grid-area: area-4; padding: 0;"
          clickable
          onClick={() => handleTheme(theme, setTheme)}
        >
          <StarScene />
        </Tile>

        <Tile
          headline="Projects"
          text="A collection of Work"
          star
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
          headline="Ideas"
          text="A journal of sorts"
          star
          clickable
          xl="grid-area: area-6;"
        />
        <Tile
          headline="About Me"
          text="Allow me to reintroduce myself"
          star
          clickable
          xl="grid-area: area-7;"
          onClick={() =>
            router.push("/about", undefined, {
              scroll: false,
              shallow: true,
            })
          }
        />

        <Tile
          xl="grid-area: area-8; padding: 0;"
          clickable
          onClick={() => handleTheme(theme, setTheme)}
        >
          <StarScene />
        </Tile>
        <Tile
          star
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
  );
}
