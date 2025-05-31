import React from "react";

const techStack = [
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "Vite", src: "https://vitejs.dev/logo.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Zustand", src: "https://avatars.githubusercontent.com/u/72518640?s=200&v=4" },
  { name: "ShadCN", src: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4" },
  { name: "Framer Motion", src: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },
];

const TechStackSlider = () => {
  const doubled = [...techStack, ...techStack]; // Duplicate for seamless looping

  return (
    <div className="w-full overflow-hidden py-6 bg-white">
      <div
        className="flex animate-[scrollLeft_25s_linear_infinite]"
        style={{ width: "max-content" }}
      >
        {doubled.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center min-w-[0px] px-4 flex-shrink-0"
          >
            <img
              src={tech.src}
              alt={tech.name}
              className="w-10 h-10 object-contain"
            />
            <p className="text-xs text-gray-600 mt-1">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackSlider;
