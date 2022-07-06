import React from "react";
import Image from "next/image";
import tw from "tailwind-styled-components";
import Link from "next/link";

const ProjectLinks = ({ github, live, youtube }) => {
  return (
    <Wrapper>
      <Link href={github}>
        <a target="_blank">
          <div className="px-4">
            <Image
              src="/GitHub.png"
              width={35}
              height={47}
              className="hover:scale-125"
            ></Image>
          </div>
        </a>
      </Link>
      <Link href={live ? live : "#"}>
        <a target="_blank">
          <div className="px-4">
            {live && (
              <Image
                src="/Link.png"
                width={35}
                height={47}
                className="hover:scale-125"
              ></Image>
            )}
          </div>
        </a>
      </Link>
      {youtube && <Link href={youtube}>
        <a target="_blank">
          <div className="px-4">
              <Image
                src="/yt.png"
                width={50}
                height={50}
                className="hover:scale-125"
              ></Image>
          </div>
        </a>
      </Link>}
      
    </Wrapper>
  );
};

const Wrapper = tw.div`
absolute
bottom-4
left-0
w-full
z-50
flex
justify-center
lg:bottom-8
`;

export default ProjectLinks;
