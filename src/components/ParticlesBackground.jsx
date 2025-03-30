import React from "react";
import Particles from "react-tsparticles";
import { particlesConfig } from "@/utils/particles";

export const ParticlesBackground = () => {
  return <Particles params={particlesConfig} />;
};

