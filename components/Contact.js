import React from "react";
import tw from "tailwind-styled-components";
import ContactItem from "./ContactItem";
import Image from "next/image";
import Link from "next/link";
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

const Contact = () => {
  return (
    <Wrapper id="contact">
      <Headline>
        <OrangeBar></OrangeBar>
        <ContactMe>Contact Me</ContactMe>
        <OrangeBar></OrangeBar>
      </Headline>
      <ContactContainer>
        <div className="lg:col-start-2 lg:col-span-1 lg:row-start-1">
          <ContactItem
            icon="/avatar.png"
            detail="Lars Jensen"
            size={[26, 22]}
          />
        </div>
        <div className="lg:col-start-1 lg:col-span-1 lg:row-start-2">
          <ContactItem
            icon="/address2.png"
            detail="Berlin, Germany"
            size={[30, 32]}
            offset="-8px"
            className="lg:row-start-2 lg:col-start-1 lg:col-span-1"
          />
        </div>
        <div className="lg:row-start-2 lg:col-start-2 lg:col-span-1">
          <ContactItem
            icon="/email.png"
            detail="lars@larsjensen.dev"
            size={[29, 28]}
            fontSize="xl"
            className="lg:row-start-2 lg:col-start-2 lg:col-span-1"
          />
        </div>
        <div className="lg:row-start-2 lg:col-start-3 lg:col-span-1">
          <ContactItem
            icon="/phone.png"
            detail="+4915202872609"
            size={[29, 26]}
            className="lg:row-start-2 lg:col-start-3 lg:col-span-1"
          />
        </div>
      </ContactContainer>
      <Headline className="mt-4">
        <OrangeBar></OrangeBar>
        <SocialMedia>
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
                src="/Twitter.png"
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
            <div>
              <Image
                src="/WhatsApp.png"
                layout="fixed"
                height={31}
                width={25}
                className="hover:scale-125"
              />
            </div>
          </Tooltip>
        </SocialMedia>
        <OrangeBar></OrangeBar>
      </Headline>
    </Wrapper>
  );
};

const Wrapper = tw.div`
flex
flex-col
items-center
w-full
lg:mb-12
`;

const Headline = tw.div`
flex
text-white
w-full
items-center
mb-8
`;

const ContactMe = tw.div`
text-[28px]
font-bold
px-2
whitespace-nowrap
lg:text-6xl
`;

const ContactContainer = tw.div`
max-w-[1140px]
lg:grid
lg:grid-cols-3
lg:grid-rows-2
lg:gap-6
`;

const OrangeBar = tw.div`
flex-1
border-t-[3px]
border-accent
lg:mt-12
`;

const SocialMedia = tw.div`
flex
px-2
whitespace-nowrap
w-1/2
justify-around
lg:w-1/6
lg:mt-12
`;

export default Contact;
