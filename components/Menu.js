import React from "react";
import dynamic from "next/dynamic";
import tw from "tailwind-styled-components";

const Hamburger = dynamic(() => import("../components/Hamburger"), {
  ssr: false,
});

const Menu = ({ toggleMenu, showMenu }) => {
  return (
    <Wrapper>
      <Name>
        <p className="font-rubik font-bold text-2xl leading-8 text-[#FAFAFA] md:text-4xl">
          Lars Jensen<span className="text-accent">.</span>
        </p>
      </Name>
      <Hamburger toggleMenu={toggleMenu} showMenu={showMenu} />
      <NavBar>
        <NavBarItem href="#about">About</NavBarItem>
        <NavBarItem href="#skills">Skills</NavBarItem>
        <NavBarItem href="#portfolio">Portfolio</NavBarItem>
        <NavBarItem href="#contact">Contact</NavBarItem>
      </NavBar>
    </Wrapper>
  );
};

const Wrapper = tw.div`
flex
justify-between
items-center
w-full
md:mb-20
max-w-[1220px]
`

const Name = tw.div`
  `;

const NavBar = tw.div`
  hidden
  md:flex
  justify-around
  `;

  const NavBarItem = tw.a`
  text-white/90
  text-xl
  mx-4
  lg:hover:text-white
  lg:hover:scale-105
  `

export default Menu;
