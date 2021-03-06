import Head from "next/head";
import { useState } from "react";
import tw from "tailwind-styled-components";
import AboutMe from "../components/AboutMe";
import MySkills from "../components/MySkills";
import Contact from "../components/Contact";
import SideBar from "../components/SideBar";
import dynamic from "next/dynamic";
import ScrollToTop from "react-scroll-to-top";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
//import Introduction from "../components/Introduction"
import Menu from "../components/Menu"

const Portfolio = dynamic(() => import("../components/Portfolio"), {
  ssr: false,
});

const Introduction = dynamic(() => import("../components/Introduction"), {
  ssr: false,
});

export default function Home() {
  const [showMenu, setShowMenu] = useState();

  const toggleMenu = () => setShowMenu((prevState) => !prevState);

  return (
    <div>
      <Head>
        <title>Lars Jensen, web developer</title>
        <meta name="description" content="Hi, I am Lars Jensen, frontend developer from Berlin. I mainly develop in ReactJs, NextJs and Firebase" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Container>
        <ScrollToTop
          smooth
          style={{ color: "accent", backgroundColor: "rgba(255,255,255,.7)" }}
          component={<ArrowCircleUpIcon fontSize="large" />}
        />
        <SideBar showMenu={showMenu} toggleMenu={toggleMenu} />
        <Menu toggleMenu={toggleMenu} showMenu={showMenu}/>

        <Introduction/>
        <AboutMe />
        <MySkills />
        <Portfolio />
        <Contact />
      </Container>
    </div>
  );
}

const Container = tw.div`
    bg-[#21201E]
    w-full
    h-full
    pt-[40px]
    px-[32px]
    flex
    flex-col
    md:px-16
    lg:items-center
  `;

const Name = tw.div`

  `;

const Intro = tw.div`
  mt-16
  text-white
  font-bold
  text-4xl
  md:text-5xl
  w-[63%]
  min-w-[266px]
  flex
  self-center
  mb-8
  `;

const Portrait = tw.div`
  flex
  justify-end
  mb-6
  `;

const ImageWrapper = tw.div`
  relative
  pt-2
  pl-2
  `;

const ImageContainer = tw.div`
  w-[52vw]
  h-[52vw]
  overflow-hidden
  rounded-full
  border-accent
  border-8
  `;

const SocialMedia = tw.div`
    flex
    flex-col
    h-full
    justify-between
    items-center
    pt-[40px]
    pb-[6px]
    pl-2
  `;

const OrangeBar = tw.div`
  w-[68px]
  h-0
  border-2
  border-accent
  rotate-90
  mb-[34px]
`;

const BackgroundCircle = tw.div`
bg-white
opacity-10
rounded-full
w-[85px]
h-[85px]
absolute
`;

const ContactMe = tw.a`
flex
py-2
pt-1
px-4
border-4
border-accent
rounded-[5px]
items-center
text-xl
font-medium
text-white
`;

const HamburgerContainer = tw.div`
fixed
right-0
top-0
w-full
bg-background
rounded-full
z-50
h-[60px]
w-[60px]
`;
