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
import SwirlScene from "@/components/Three/SwirlScene";
import { handleTheme } from "@/utils/functions/handleTheme";
import { useTheme } from "@/utils/provider";
import Link from "next/link";
import { Instagram, Linkedin, Mail } from "react-feather";

export default function Projects() {
  const { theme, setTheme } = useTheme();

  return (
    <Column xl="padding: 20px;">
      <Grid>
        <Tile xl="grid-area: area-1">
          <H1 xl="margin-bottom: 20px;">Hi, I'm Julian</H1>
          <Text>
            A web developer and designer based in Vancouver, BC. This website is
            a playground to showcase what I have been working on. Thanks for
            visiting 🚀
          </Text>
        </Tile>
        <Tile xl="grid-area: area-2; align-items: center;">
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
          clickable
          xl="grid-area: area-3; padding: 0;"
          onClick={() => handleTheme(theme, setTheme)}
        >
          <RocketScene />
        </Tile>
        <Tile xl="grid-area: area-4; padding: 0;">
          <StarScene />
        </Tile>
        <Tile clickable xl="grid-area: area-5;" video>
          <H2 xl="margin-bottom: 20px;">Projects</H2>
        </Tile>
        <Tile clickable xl="grid-area: area-6;">
          <H2 xl="margin-bottom: 20px;">Ideas</H2>
        </Tile>
        <Tile clickable xl="grid-area: area-7;">
          <H2 xl="margin-bottom: 20px;">About Me</H2>
        </Tile>
        <Tile xl="grid-area: area-8; padding: 0;">
          <StarScene />
        </Tile>
      </Grid>
    </Column>
  );
}
