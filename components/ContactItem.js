import React from "react";
import tw from "tailwind-styled-components";
import Image from "next/image";

const ContactItem = ({ icon, detail, size, fontSize, offset }) => {
    console.log(fontSize)
  return (
    <Container>
      <ImageWrapper className={offset ? `pr-[${offset}]` : null}>
        <Image src={icon} layout="fixed" width={size[0]} height={size[1]}/>
      </ImageWrapper>

      <Details className={fontSize ? `text-${fontSize}` : "text-xl"}>{detail}</Details>
    </Container>
  );
};

export default ContactItem;

const Container = tw.div`
flex
w-full
max-w-[380px]
border-[2px]
border-accent
rounded-lg
p-4
mb-4
opacity-90
lg:mb-0
`;

const Details = tw.div`
text-accent
font-light
ml-8
`;

const ImageWrapper = tw.div`
w-1/6
flex
justify-end
items-center
relative
`;
