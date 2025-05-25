import React from "react";
import Particles from "react-tsparticles";
import { particlesConfig } from "../utils/particles";

export const ParticlesBackground = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
    <Particles options={particlesConfig} />
  </div>
);

