import CubeCarousel from "../components/CubeCarousel";
import { dessertImages } from "../constants/data";

export default function About() {
  return (
    <section className="w-[100%] mt-9 sm:mt-10 md:mt-11 flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
      <h1 className="text-center max-w-[18em]">About John</h1>
      <img
        className="w-[300px] profile-border"
        src="/assets/images/ed-park.webp"
        alt="Profile of John"
      />
      <p className="text-justify">Hello! My name is John</p>
      <p className="text-justify">
        I am a Full Stack Developer with 12 + years of experience in developing
        web and mobile application using modern technologies such as Node.js,
        React.js, Vue.js, Next.js, JavaScript and TypeScript and so on. I would
        rate my skills as a software engineer as 8 out of 10. I think this is a
        fair rating because I have a solid foundation in computer science, web
        development, and software engineering principles.
      </p>

      <p className="text-center">Here are a few of my baking creations:</p>
      <CubeCarousel name="desserts" carouselImages={dessertImages} />
      <p className="text-justify">
        My journey in web development is driven by the desire to make a
        meaningful impact on businesses and individuals alike. Combining my
        technical expertise, creativity, and dedication to continuous
        improvement, I strive to create compelling digital experiences that
        exceed expectations.
      </p>
    </section>
  );
}
