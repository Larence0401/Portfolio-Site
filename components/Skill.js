import React from 'react'
import tw from "tailwind-styled-components";
import Image from "next/image";

const Skill = ({fileName, skill}) => {
  return (
    <Tile>
          <Image
            src={fileName}
            layout="fixed"
            width="100%"
            height="100%"
          />
          <p>{skill}</p>
        </Tile>
  )
}

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

export default Skill