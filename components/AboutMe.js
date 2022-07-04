import React from "react";
import tw from "tailwind-styled-components";

const AboutMe = () => {
  return (
    <Wrapper id="about">
      <Headline>About Me</Headline>
      <div className="flex flex-col md:flex-row">
      <OrangeBar/>
      <Textblock>
        I am Lars, a self-taught web developer. <br></br>Conceptualizing, building and
        problem solving are my strong points and passion. Every new
        project is an exciting journey for me which starts with a rough sketch on a
        sheet of paper and ends with a finalized and polished product. I am
        always curious about mastering new technologies and I genuinely enjoy tackling
        challenging projects.
      </Textblock>

      </div>
      
    </Wrapper>
  );
};

const Wrapper = tw.div`
flex
flex-col
text-white
max-w-[1140px]
mb-4
pt-16
md:mt-20
lg:mb-20
`;

const Headline = tw.div`
flex
flex-col
text-[28px]
md:text-5xl
leading-[33px]
font-bold
mb-3
md:mb-4
md:text-5xl
lg:text-6xl
`;

const Textblock = tw.div`
font-light
leading-5
py-4
md:py-0
tracking-wide
text-[18px]
lg:text-2xl
lg:py-1
`;

const OrangeBar = tw.div`
w-[34px]
h-[4px]
bg-accent
md:w-16
md:mr-2
md:mt-2
lg:w-44
lg:mr-4
lg:mt-3
`;

export default AboutMe;
