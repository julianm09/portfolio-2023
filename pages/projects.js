import { Column } from "@/components/Container/Column";
import { Container } from "@/components/Container/Container";
import { Grid } from "@/components/Grid/Grid";
import { ProjectTile } from "@/components/Grid/ProjectTile";
import { Tile } from "@/components/Grid/Tile";
import { Item } from "@/components/Tech/Item";
import { H1 } from "@/components/Text/H1";
import { H2 } from "@/components/Text/H2";
import { Text } from "@/components/Text/Text";
import CubeScene from "@/components/Three/CubeScene";
import PyramidScene from "@/components/Three/PyramidScene";
import RocketScene from "@/components/Three/RocketScene";
import Scene from "@/components/Three/Scene";
import StarScene from "@/components/Three/StarScene";
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
    <>
      <Column xl="padding: 20px;">
        <Grid
          xl={`
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: minmax(3, 1fr) 300px;
          grid-template-areas: 
            "area-1 area-2 area-2 area-3 area-3"
            "area-6 area-6 area-4 area-5 area-5"
            "area-7 area-7 area-8 area-8 area-9";
          `}
          sm={`
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: minmax(7, 1fr) 300px;
          grid-template-areas: 
            "area-1 area-1 area-2 area-2 area-2"
            "area-5 area-5 area-5 area-5 area-5"
            "area-3 area-3 area-3 area-3 area-3"
            "area-4 area-4 area-6 area-6 area-6"
            "area-7 area-7 area-7 area-7 area-7"
            "area-8 area-8 area-8 area-8 area-8"
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
            "area-7 area-7 area-7 area-7 area-7"
            "area-8 area-8 area-8 area-8 area-8"
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
            <Text xl="margin-bottom: 20px;">Go Back Home 🚀</Text>
            <Text xl="color: grey">
              <ArrowLeftCircle />
            </Text>
          </Tile>

          <ProjectTile
            headline="Galla"
            href="https://galla.vercel.app/"
            target="_blank"
            clickable
            url="/images/galla.png"
            transition={{ ease: "linear", duration: 0.25, delay: 0.5 }}
            xl="grid-area: area-2; padding: 0;"
          >
            <Text xl="margin-bottom:20px; max-width: 450px; text-align: center;">
              AI powered website prototyping tool (work in progress)
            </Text>
            <Container>
              <Item>Next JS</Item>
              <Item>GTP-3</Item>
              <Item>Typescript</Item>
            </Container>
          </ProjectTile>

          <ProjectTile
            href="https://ghost-two.vercel.app/"
            target="_blank"
            headline="Ghost"
            clickable
            url="/images/ghost.png"
            transition={{ ease: "linear", duration: 0.25, delay: 0.2 }}
            xl="grid-area: area-3; align-items: center;"
          >
            <Text xl="margin-bottom:20px; max-width: 350px; text-align: center;">
              Invisible pimple patches
            </Text>
            <Container>
              <Item>Next JS</Item>
              <Item>Blender</Item>
              <Item>Framer Motion</Item>
            </Container>
          </ProjectTile>

          {/*           <ProjectTile
            headline="Ecouture"
            href="https://www.ecouture.ca/"
            target="_blank"
            clickable
            url="/images/ecouture.gif"
            transition={{ ease: "linear", duration: 0.25, delay: 0.5 }}
            xl="grid-area: area-7; padding: 0;"
          >
            <Text xl="margin-bottom:20px; max-width: 350px; text-align: center;">
              Sustainable clothing web app
            </Text>
            <Container>
              <Item>React JS</Item>
              <Item>Three JS</Item>
              <Item>Blender</Item>
            </Container>
          </ProjectTile> */}
          <Tile
            transition={{ ease: "linear", duration: 0.25, delay: 0.1 }}
            xl="grid-area: area-4; padding: 0;"
          >
            <StarSceneTwo />
          </Tile>

          <ProjectTile
            href="https://www.lelavietnamese.com/"
            target="_blank"
            headline="Lê La"
            url="/images/lela.gif"
            transition={{ ease: "linear", duration: 0.25, delay: 0.2 }}
            clickable
            xl="grid-area: area-7;"
          >
            <Text xl="margin-bottom:20px; max-width: 350px; text-align: center;">
              Authentic Vietnamese restaurant in Calgary
            </Text>
            <Container>
              <Item>Next JS</Item>
              <Item>Sanity</Item>
              <Item>GraphQL</Item>
            </Container>
          </ProjectTile>

          <ProjectTile
            href="https://www.nxtsndy.com/"
            target="_blank"
            headline="Nxtsndy"
            transition={{ ease: "linear", duration: 0.25, delay: 0.3 }}
            clickable
            xl="grid-area: area-5;"
            url="/images/nxtsndy.gif"
          >
            <Text xl="margin-bottom:20px; max-width: 350px; text-align: center;">
              Clothing brand based in Toronto
            </Text>
            <Container>
              <Item>Next JS</Item>
              <Item>Sanity</Item>
              <Item>Graph QL</Item>
            </Container>
          </ProjectTile>

          <ProjectTile
            href="https://www.creativecareers.ca/"
            target="_blank"
            headline="CD + WIL"
            url="/images/cdwil.gif"
            transition={{ ease: "linear", duration: 0.25, delay: 0.4 }}
            clickable
            xl="grid-area: area-6;"
          >
            <Text xl="margin-bottom:20px; max-width: 350px; text-align: center;">
              Emily Carr's career development office
            </Text>
            <Container>
              <Item>React JS</Item>
              <Item>Sanity</Item>
              <Item>Graph QL</Item>
            </Container>
          </ProjectTile>

          <ProjectTile
            href="https://julian-mayes-portfolio-n1gvg7mkm-cre8rec.vercel.app/"
            target="_blank"
            url="/images/portfolio.png"
            headline="Portfolio V1"
            transition={{ ease: "linear", duration: 0.25, delay: 0.4 }}
            clickable
            xl="grid-area: area-8;"
          >
            <Text xl="margin-bottom:20px; max-width: 350px; text-align: center;">
              My previous portfolio website!
            </Text>
            <Container>
              <Item>Next JS</Item>
              <Item>Framer Motion</Item>
              <Item>Three JS</Item>
            </Container>
          </ProjectTile>

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
    </>
  );
}
