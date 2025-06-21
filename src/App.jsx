import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Navbar from "./components/NavBar";
import { Canvas } from "@react-three/fiber";
import Particles from "./components/models/hero_models/Particles";

const App = () => (
  <div>
    <div className="fixed top-0 left-0 w-full h-full z-[1]">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <Particles count={800} />
      </Canvas>
    </div>

    <Navbar />
    <Hero />
    <ShowcaseSection />
    <Experience />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
);

export default App;
