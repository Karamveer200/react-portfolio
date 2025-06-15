import { Canvas, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function CircularImage({
  url,
  radius = 3,
  basePosition = [0, 0, 0],
  amplitude = 0.3,
  speed = 0.7,
}) {
  const texture = useLoader(TextureLoader, url);
  const ref = useRef();
  const clock = new THREE.Clock();

  useFrame(() => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      ref.current.position.x =
        basePosition[0] + Math.sin(t * speed) * amplitude;
      ref.current.position.y =
        basePosition[1] + Math.cos(t * speed) * amplitude;
    }
  });

  return (
    <mesh ref={ref}>
      <circleGeometry args={[radius, 64]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
}

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 968px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1400px)" });

  const getScale = () => {
    if (isMobile) return 0.6;
    if (isTablet) return 0.8;

    return 1;
  };

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <Particles count={1000} />

      {/* deep blue ambient */}
      <ambientLight intensity={0.2} color="#1a1a40" />

      <Suspense fallback={null}>
        <HeroLights />
        <group scale={getScale()}>
          <CircularImage
            url="/images/myFace.jpg"
            scale={[7, 7]}
            position={[0, 0, 0]}
            cl
          />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
