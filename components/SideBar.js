import tw from "tailwind-styled-components";


import React from "react";

const SideBar = ({ showMenu, toggleMenu }) => {
  const slideIn = !showMenu
    ? "translate-x-[180px] duration-300 ease-in-out"
    : "translate-x-0 duration-300 ease-in-out";

  return (
    <Wrapper className={slideIn}>
      <MenuItem href="#about" onClick={toggleMenu}>About</MenuItem>
      <MenuItem href="#skills" onClick={toggleMenu}>Skills</MenuItem>
      <MenuItem href="#portfolio" onClick={toggleMenu}>Portfolio</MenuItem>
      <MenuItem href="#contact" onClick={toggleMenu}>Contact</MenuItem>
    </Wrapper>
  );
};

export default SideBar;

const Wrapper = tw.div`
w-[180px]
h-auto
bg-background/90
z-40
fixed
right-0
top-[100px]
p-8
py-4
text-white
flex
flex-col
items-start
rounded-tl-xl
rounded-bl-xl
`;

const MenuItem = tw.a`
py-4
text-right
uppercase
`;
