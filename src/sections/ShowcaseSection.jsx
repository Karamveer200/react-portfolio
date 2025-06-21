import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <div className="text-center py-16 bg-black/3 z-10 mt-10 backdrop-blur-[1px]">
        <TitleHeader sub="🧰 Handy Toolbox" />

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300 max-w-3xl mx-auto px-4">
          <span className="bg-zinc-800 px-3 py-1 rounded-full">Next.js</span>
          <span className="bg-zinc-800 px-3 py-1 rounded-full">React</span>
          <span className="bg-zinc-800 px-3 py-1 rounded-full">Hooks</span>
          <span className="bg-zinc-800 px-3 py-1 rounded-full">Redux</span>
          <span className="bg-zinc-800 px-3 py-1 rounded-full">TypeScript</span>
          <span className="bg-zinc-800 px-3 py-1 rounded-full">JavaScript</span>
          <span className="bg-zinc-800 px-3 py-1 rounded-full">OOP</span>
          <span className="bg-zinc-800 px-3 py-1 rounded-full">MongoDB</span>
          <span className="bg-zinc-800 px-3 py-1 rounded-full">Express</span>

          <span className="bg-zinc-800 px-3 py-1 rounded-full">Node.js</span>
          <span className="bg-zinc-800 px-3 py-1 rounded-full">
            Function Testing
          </span>
          <span className="bg-zinc-800 px-3 py-1 rounded-full">Vitest</span>
          <span className="bg-zinc-800 px-3 py-1 rounded-full">Node:test</span>
          <span className="bg-zinc-800 px-3 py-1 rounded-full">PostgreSQL</span>
          <span className="bg-zinc-800 px-3 py-1 rounded-full">Laravel</span>
          <span className="bg-zinc-800 px-3 py-1 rounded-full">Solidity</span>
          <span className="bg-zinc-800 px-3 py-1 rounded-full">Docker</span>
          <span className="bg-zinc-800 px-3 py-1 rounded-full">Blockchain</span>
          <span className="bg-zinc-800 px-3 py-1 rounded-full">Cloud</span>
          <span className="bg-zinc-800 px-3 py-1 rounded-full">Docker</span>
        </div>
      </div>
      <div className="mt-20 sm:mt-32">
        <TitleHeader sub="🚀 Highlights 🚀" />
      </div>

      <div
        id="work"
        ref={sectionRef}
        className="app-showcase relative z-1 -mt-8"
      >
        <div className="w-full">
          <div className="showcaselayout">
            <div ref={rydeRef} className="first-project-wrapper">
              <div className="image-wrapper">
                <img src="/images/project1.png" alt="Ryde App Interface" />
              </div>
              <div className="text-content">
                <h2 className="text-xl">
                  BankSocial, A Multi-Chain Crypto Wallet Embedded Right Into
                  Your Bank App
                </h2>
              </div>
            </div>

            <div className="project-list-wrapper overflow-hidden ">
              <div className="project" ref={libraryRef}>
                <div className="image-wrapper bg-[#becbe7]">
                  <img
                    src="/images/project2.webp"
                    alt="Library Management Platform"
                  />
                </div>

                <h2 className="text-xl">
                  Symphona, AI-driven no‑code CRM & BPA platform
                </h2>
              </div>

              <div className="project xl:mt-4" ref={ycDirectoryRef}>
                <div className="image-wrapper bg-[#becbe7]">
                  <img src="/images/project3.png" alt="YC Directory App" />
                </div>
                <h2 className="text-xl">
                  Telus, Migrated Legacy Systems to Modern Tech Stack
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
