
import { useInView } from "react-intersection-observer";
import tw from "tailwind-styled-components";
import Project from "./Project";

const Portfolio = () => {
  const [ref1, inView1] = useInView({
    rootMargin: "-100px 0px -100px 0px",
    threshold: 1,
  });
  const [ref2, inView2] = useInView({
    rootMargin: "-100px 0px -100px 0px",
    threshold: 1,
  });
  const [ref3, inView3] = useInView({
    rootMargin: "-100px 0px -100px 0px",
    threshold: 1,
  });
  const [ref4, inView4] = useInView({ threshold: 1 });

  return (
    <Wrapper id="portfolio">
      <Headline>Portfolio</Headline>
      <ProjectContainer>
        <Project
          reference={ref1}
          name="Tripmeister"
          description=" an itinerary builder for multi-day road trips. Plan your routes, look for hotels and plan activities with this app."
          inView={inView1}
          imageSrc="/projectone.png"
          github="https://github.com/Larence0401/tripmeister"
          live="https://tripmeister.vercel.app"
        />
        <Project
          reference={ref2}
          name="Lingogee"
          description="a messaging app like whatsapp with a built-in multi-language translation feature"
          inView={inView2}
          imageSrc="/projecttwo.png"
          github="https://github.com/Larence0401/Lingogee"
          live="https://lingogee.vercel.app"
        />
        <Project
          reference={ref3}
          name="Juggle Fox"
          description="a simple math game which requires you to compute a range of random numbers in the least time possible."
          inView={inView3}
          imageSrc="/projectthree.png"
          github="https://github.com/Larence0401/JuggleFox"
          live="https://juggle-fox.vercel.app/"
          
        />
        <Project
          reference={ref4}
          name="Memory Quiz"
          description="a movie memory game with the option to select categories and the number of cards to play with."
          inView={inView4}
          imageSrc="/projectfour.png"
          github="https://github.com/Larence0401/Movie-Memory-Quiz"
          live="https://movie-memory-quiz.vercel.app/"
        />
       
      </ProjectContainer>
    </Wrapper>
  );
};

const Wrapper = tw.div`
flex
flex-col
text-white
items-center
mb-12
md:grid
max-w-[1140px]
w-full
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
lg:text-6xl
lg:mb-12
`;

const ProjectContainer = tw.div`
grid
grid-cols-1
md:grid-cols-2
md:gap-3
lg:gap-6
w-full
`;



export default Portfolio;
