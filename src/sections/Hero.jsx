import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden banner">
      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:p-20 p-10 xl:-mt-20">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Transforming
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Drive Growth</h1>
            </div>

            <p className="text-white-50 sm:text-xl relative z-10 pointer-events-none max-w-[400px] sm:max-w-[600px] lg:max-w-[600px] 2xl:max-w-[750px]">
              Software Engineer with <strong>5+ years</strong> of full-stack
              development experience, specializing in React.js, Next.js,
              Node.js, TypeScript, Cloud and Web3. A proactive team leader and
              self-starter who has scaled projects to{" "}
              <strong>10,000+ daily users</strong> worldwide and{" "}
              <strong>
                successfully migrated over $50M in digital assets.
              </strong>
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 md:w-60 w-48 h-12"
              id="counter"
            />
          </div>
        </header>

        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
