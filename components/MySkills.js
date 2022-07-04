import React from "react";
import tw from "tailwind-styled-components";
import Image from "next/image";

const MySkills = () => {
  return (
    <Wrapper id="skills">
      <Headline>My Skills</Headline>
      <Stack>
        <Tile>
          <Image
            src="/javascript.png"
            layout="fixed"
            width={100}
            height={106}
          />
          <p>JavaScript</p>
        </Tile>
        <Tile><Image
            src="/css.png"
            layout="fixed"
            width={76}
            height={100}
          />
          <p>CSS 3</p></Tile>
        <Tile><Image
            src="/git.png"
            layout="fixed"
            width={89}
            height={100}
          />
          <p>Git Source Control</p></Tile>
        <Tile><Image
            src="/firebase.png"
            layout="fixed"
            width={70}
            height={106}
          />
          <p>Firebase</p></Tile>
        <Tile><Image
            src="/React.png"
            layout="fixed"
            width={76}
            height={100}
          />
          <p>React JS</p></Tile>
        <Tile><Image
            src="/NextJS.png"
            layout="fixed"
            width={79}
            height={100}
          />
          <p>Next JS</p></Tile>
          <Tile><Image
            src="/Tailwind.png"
            layout="fixed"
            width={57}
            height={68}
          />
          <p className="mt-2">Tailwind CSS</p></Tile>
          <Tile><Image
            src="/StyledComp.png"
            layout="fixed"
            width={128}
            height={89}
          />
          <p>Styled Components</p></Tile>
          <Tile><Image
            src="/Jest.svg"
            layout="fixed"
            width={82}
            height={100}
          />
          <p>Jest</p></Tile>
          <Tile><Image
            src="/Redux.png"
            layout="fixed"
            width={78}
            height={100}
          />
          <p>Redux</p></Tile>
          <Tile><Image
            src="/Context.png"
            layout="fixed"
            width={82}
            height={100}
          />
          <p>Context API</p></Tile>
          <Tile><Image
            src="/RestAPI.png"
            layout="fixed"
            width={78}
            height={100}
          />
          <p>RESTful APIs</p></Tile>

      </Stack>
    </Wrapper>
  );
};

const Wrapper = tw.div`
flex
flex-col
text-white
mb-8
max-w-[1140px]
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
