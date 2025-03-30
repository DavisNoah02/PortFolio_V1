export const particlesConfig = {
  fullScreen: false,
  particles: {
    number: {
      value: 50, // Number of particles
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#00ff00", // Particle color
    },
    shape: {
      type: "circle", // Shape of particles
    },
    opacity: {
      value: 0.5,
      random: true,
    },
    size: {
      value: 5,
      random: true,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      outModes: {
        default: "out",
      },
    },
  },
};

