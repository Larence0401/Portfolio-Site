import { useState } from "react";
import tw from "tailwind-styled-components";
import Image from "next/image";
import ProjectLinks from "./ProjectLinks";

const Project = ({
  reference,
  name,
  description,
  inView,
  imageSrc,
  github,
  live,
  youtube,
}) => {
  const [hovered, setHovered] = useState(false);

  const hoverClass = hovered ? "scale-125" : null;

  return (
    <Container
      className="project"
      ref={reference}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ProjectName className={hoverClass}>{name}</ProjectName>
      <Description
        className={
          inView || window.innerWidth >= 768
            ? "transition-opacity duration-500"
            : "opacity-0"
        }
      >
        {description}
      </Description>
      {(inView || window.innerWidth >= 768) && (
        <ProjectLinks
          hovered={hovered}
          github={github}
          live={live}
          youtube={youtube}
        />
      )}
        <Image
          src={imageSrc}
          width="100%"
          height="100%"
          className="object-fill scale-105"
          layout="fill"
        />
    </Container>
  );
};

const Container = tw.div`
h-[66vw]
w-full
md:h-[33vw]
lg:max-h-[400px]
min-h-[260px]
rounded-xl
overflow-hidden
relative
hover:cursor-pointer
`;

const ProjectName = tw.div`
absolute
top-4
left-0
right-0
m-auto
z-50
text-2xl
font-bold
tracking-wide
text-white/90
text-center
lg:text-4xl
lg:top-16
`;

const Description = tw.div`
absolute
top-20
left-4
z-50
tracking-wide
text-white/80
text-center
mx-2
max-w-[66vw]
md:max-w-[33vw]
lg:top-36
lg:left-12
lg:right-12
lg:text-xl
lg:leading-[2.5rem]
`;

export default Project;
