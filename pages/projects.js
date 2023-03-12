import { Column } from "@/components/Container/Column";
import { Container } from "@/components/Container/Container";
import { Grid } from "@/components/Grid/Grid";
import { Tile } from "@/components/Grid/Tile";
import { H1 } from "@/components/Text/H1";
import { H2 } from "@/components/Text/H2";
import { Text } from "@/components/Text/Text";
import CubeScene from "@/components/Three/CubeScene";
import PyramidScene from "@/components/Three/PyramidScene";
import RocketScene from "@/components/Three/RocketScene";
import Scene from "@/components/Three/Scene";
import StarScene from "@/components/Three/StarScene";
import SwirlScene from "@/components/Three/SwirlScene";
import { handleTheme } from "@/utils/functions/handleTheme";
import { useTheme } from "@/utils/provider";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowLeftCircle, ArrowRight, ArrowRightCircle, Instagram, Linkedin, Mail } from "react-feather";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

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
          "area-1 area-1 area-1 area-2 area-2"
          "area-5 area-5 area-5 area-3 area-3"
          "area-4 area-4 area-6 area-6 area-6"
          "area-7 area-7 area-8 area-8 area-8"
          "area-9 area-9 area-9 area-9 area-9";
          `}
          xs={`
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: minmax(8, 1fr) 300px;
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
            clickable
            transition={{ ease: "linear", duration: 0.5, delay: 0.1 }}
            xl="grid-area: area-1"
            onClick={() =>
              router.push("/", undefined, {
                scroll: false,
                shallow: true,
              })
            }
          >
            <Text xl="margin-bottom: 20px;">Go Back Home 🚀</Text>
            <Text xl="color: grey"><ArrowLeftCircle/></Text>
          </Tile>
          <Tile
            clickable
            url="/images/ghost.png"
            transition={{ ease: "linear", duration: 0.5, delay: 0.2 }}
            xl="grid-area: area-2; align-items: center;"
          >
            <H2>Ghost</H2>
          </Tile>
          <Tile
            transition={{ ease: "linear", duration: 0.5, delay: 0.5 }}
            clickable
            xl="grid-area: area-3; padding: 0;"
            onClick={() => handleTheme(theme, setTheme)}
          >
            <StarScene />
          </Tile>
          <Tile
            transition={{ ease: "linear", duration: 0.5, delay: 0.1 }}
            xl="grid-area: area-4; padding: 0;"
            clickable
            onClick={() => handleTheme(theme, setTheme)}
          >
            <StarScene />
          </Tile>

          <Tile
            url="/images/lela.gif"
            transition={{ ease: "linear", duration: 0.5, delay: 0.2 }}
            clickable
            xl="grid-area: area-5;"
            onClick={() =>
              router.push("/", undefined, {
                scroll: false,
                shallow: true,
              })
            }
          >
            <H2 xl="margin-bottom: 20px;">Lê La</H2>
          </Tile>

          <Tile
            transition={{ ease: "linear", duration: 0.5, delay: 0.3 }}
            clickable
            xl="grid-area: area-6;"
            url="/images/nxtsndy.gif"
          >
            <H2 xl="margin-bottom: 20px;">Nxtsndy</H2>
          </Tile>
          <Tile
            url="/images/cdwil.gif"
            transition={{ ease: "linear", duration: 0.5, delay: 0.4 }}
            clickable
            xl="grid-area: area-7;"
          >
            <H2 xl="margin-bottom: 20px;">Emily Carr</H2>
          </Tile>
          <Tile
            transition={{ ease: "linear", duration: 0.5, delay: 0.4 }}
            clickable
            xl="grid-area: area-8;"
          >
            <H2 xl="margin-bottom: 20px;">Portfolio</H2>
          </Tile>
          <Tile
          star
            transition={{ ease: "linear", duration: 0.5, delay: 0.6 }}
            xl="grid-area: area-9; padding: 0;"
            clickable
            onClick={() =>
              router.push("/about", undefined, {
                scroll: false,
                shallow: true,
              })
            }
          >
            <Text xl="margin-bottom: 20px;">About Me</Text>
          <Text xl="color: grey"><ArrowRightCircle/></Text>
          </Tile>
        </Grid>
      </Column>
    </>
  );
}
