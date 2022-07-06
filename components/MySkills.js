import React from "react";
import tw from "tailwind-styled-components";
import Skill from "./Skill";

const MySkills = () => {
  const skills = [
    ["/javascript.png", "Javascript"],
    ["/css.png", "CSS 3"],
    ["/git.png", "Git Source Control"],
    ["/firebase.png", "Firebase"],
    ["/React.png", "React JS"],
    ["/NextJS.png", "Next JS"],
    ["/Tailwind.png", "Tailwind CSS"],
    ["/StyledComp.png", "Styled Components"],
    ["/Jest.svg", "Jest"],
    ["/Redux.png", "Redux"],
    ["/Context.png", "Context API"],
    ["/RestAPI.png", "RESTful APIs"],
  ];

  return (
    <Wrapper id="skills">
      <Headline>My Skills</Headline>
      <Stack>
        {skills.map((el,i) => {
          return <Skill fileName={el[0]} skill={el[1]} key={i}/>;
        })}
      </Stack>
    </Wrapper>
  );
};

const Wrapper = tw.div`
flex
flex-col
text-white
mb-8
max-w-[1220px]
w-full
lg:mb-32
`;

const Headline = tw.div`
flex
flex-col
text-center
text-[28px]
leading-[33px]
font-bold
mb-3
p-4
md:text-5xl
md:mt-16
lg:text-6xl
lg:mb-12
`;

const Stack = tw.div`
grid
grid-cols-2
gap-3
md:grid-cols-3
lg:grid-cols-4
lg:gap-6
w-full
`;

const Tile = tw.div`
flex
flex-col
justify-center
items-center
bg-white/10
hover:bg-white/[6%]
h-[40vw]
md:h-[26vw]
lg:h-[15vw]
p-2
text-center
lg:flex-1
`;

export default MySkills;
