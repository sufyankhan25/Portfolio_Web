// src/components/ParticleBackground.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          color: { value: "#ffffff" },
          links: { enable: true, color: "#ffffff", distance: 150 },
          move: { enable: true, speed: 1 },
          size: { value: 2 },
          opacity: { value: 0.5 },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticleBackground;
