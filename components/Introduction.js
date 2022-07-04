import tw from "tailwind-styled-components";
import Image from "next/image";
import Link from "next/link";
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

const Introduction = () => {
  console.log(window.innerWidth >= 768);
  return (
    <Container>
      <Intro>
        <p className="md:leading-[3.5rem] lg:leading-[6rem]">
          Hello, {window.innerWidth >= 768 && <br></br>} I’m{" "}
          <span className="text-accent">
            Lars, {window.innerWidth >= 768 && <br></br>}
          </span>
          Web Developer
        </p>
        <div>
          <ContactMe
            href="#contact"
            className="hidden md:block mt-6 md:inline-flex"
          >
            Contact Me
          </ContactMe>
        </div>
      </Intro>
      <Portrait>
        <ImageWrapper>
          <BackgroundCircle className="top-0 right-0 lg:top-4 right-4" />
          <BackgroundCircle className="bottom-0 left-0 lg:bottom-4 right-4" />
          <ImageContainer>
            <Image
              src="/bwportrait.png"
              className="object-fill overflow-hidden"
              objectFit="cover"
              layout="fill"
            />
          </ImageContainer>
        </ImageWrapper>

        <SocialMedia className="">
          <OrangeBar />
          <Link href="https://www.facebook.com/lars.jensen.146/">
            <a target="_blank">
              <Image
                src="/Facebook.png"
                layout="fixed"
                width={25}
                height={31}
                className="hover:scale-125"
              />
            </a>
          </Link>
          <Link href="https://twitter.com/Lawrence0401/">
            <a target="_blank">
              <Image
                src="/twitter.png"
                layout="fixed"
                width={25}
                height={31}
                className="hover:scale-125"
              />
            </a>
          </Link>
          <Image
            src="/LinkedIn 2.png"
            layout="fixed"
            height={31}
            width={25}
            className="hover:scale-125"
          />
          <Tooltip title="+4915202872609" placement="bottom">
            <Button>
              <Image
                src="/Whatsapp.png"
                layout="fixed"
                height={31}
                width={25}
                className="hover:scale-125"
              />
            </Button>
          </Tooltip>
        </SocialMedia>
      </Portrait>
      <div className="flex justify-start ml-16 mb-12 md:hidden">
        <ContactMe href="#contact">Contact Me</ContactMe>
      </div>
    </Container>
  );
};

const Container = tw.div`
flex
flex-col
md:flex-row
md:justify-end
mt-8
md:mt-12
md:mb-12
lg:w-full
max-w-[1220px]
lg:justify-center
lg:mb-40
`;

const Name = tw.div`

  `;

const Intro = tw.div`
  text-white
  font-bold
  text-4xl
  md:text-5xl
  w-[63%]
  min-w-[266px]
  flex
  md:flex-col
  self-center
  md:self-start
  lg:text-[88px]
  lg:leading-[6rem]
  lg:self-center
  mb-4
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
  md:w-[28vw]
  md:h-[28vw]
  lg:w-[25vw]
  lg:h-[25vw]
  overflow-hidden
  rounded-full
  border-accent
  border-8
  relative
  lg:border-[10px]
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
    md:pl-0
    lg:max-h-[250px]
    lg:mt-32
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
opacity-[5%]
rounded-full
w-[9vw]
h-[9vw]
absolute
`;

const ContactMe = tw.a`
inline-flex
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
md:hidden
lg:text-2xl
hover:scale-110
`;

export default Introduction;
