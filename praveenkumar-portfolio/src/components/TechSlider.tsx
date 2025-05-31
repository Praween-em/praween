import React from "react";

type TechItem = {
  name: string;
  src: string;
};

type TechSliderProps = {
  items: TechItem[];
  title: string;
};

const TechSlider: React.FC<TechSliderProps> = ({ items, title }) => {
  const doubled = [...items, ...items];

  return (
    <div className="w-full py-2 overflow-hidden p-5">
      <h2 className="text-lg md:text-xl py-5 font-semibold mb-2 text-center">{title}</h2>
      <div
        className="flex animate-[scrollLeft_25s_linear_infinite]"
        style={{ width: "max-content" }}
      >
        {doubled.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center min-w-[30px] px-1 flex-shrink-0"
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

export default TechSlider;
