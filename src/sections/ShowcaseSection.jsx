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
      <div className="mt-24 sm:mt-32">
        <TitleHeader
          title="Recent Projects"
          sub="🛠️ Successfully Launched Products"
        />
      </div>

      <div id="work" ref={sectionRef} className="app-showcase relative z-1">
        <div className="w-full">
          <div className="showcaselayout">
            <div ref={rydeRef} className="first-project-wrapper">
              <div className="image-wrapper">
                <img src="/images/project1.png" alt="Ryde App Interface" />
              </div>
              <div className="text-content">
                <h2>
                  BankSocial, A Multi-Chain Crypto Wallet Embedded Right Into
                  Your Bank App
                </h2>
                <p className="text-white-50 md:text-xl">
                  A self-custody wallet built using Next.js, Laravel, and
                  TypeScript with seamless crypto transactions directly from
                  bank accounts.
                </p>
              </div>
            </div>

            <div className="project-list-wrapper overflow-hidden mt-4">
              <div className="project" ref={libraryRef}>
                <div className="image-wrapper bg-[#becbe7]">
                  <img
                    src="/images/project2.webp"
                    alt="Library Management Platform"
                  />
                </div>

                <h2>Symphona, AI-driven no‑code CRM & BPA platform</h2>
              </div>

              <div className="project xl:mt-4" ref={ycDirectoryRef}>
                <div className="image-wrapper bg-[#becbe7]">
                  <img src="/images/project3.png" alt="YC Directory App" />
                </div>
                <h2>Telus, Migrated Legacy Systems to Modern Tech Stack</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
