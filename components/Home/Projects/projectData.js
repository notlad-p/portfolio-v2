import Image from "next/image";

const projectData = [
  {
    title: "Rent-a-Car",
    description:
      "Fictional car rental site built in React, using the Material UI component library.",
    image: (
      <Image
        src="/projects/rentacar.JPG"
        layout="fill"
        objectFit="cover"
      />
    ),
    tech: ["React", "SASS", "Material UI"],
    githubLink: "https://github.com/notlad-p/rent-a-car",
    projectLink: "https://notlad-p.github.io/rent-a-car/",
  },
  {
    title: "Dash - New Tab Page",
    description:
      "Chrome new tab page extension with current weather, time, and 3D backgrounds.",
    image: (
      <Image
        src="/projects/dash.JPG"
        layout="fill"
        objectFit="cover"
      />
    ),
    tech: ["VantaJS", "JSON", "JavaScript"],
    githubLink: "https://github.com/notlad-p/dash",
    projectLink: "https://dash-browser-extension.netlify.app/",
  },
  {
    title: "3D Logo",
    description:
      "3D version of my personal logo, originally the header of this portfolio. Beware it is very CPU and GPU intensive.",
    image: (
      <Image
        src="/projects/3d-logo.jpg"
        layout="fill"
        objectFit="cover"
      />
    ),
    tech: ["React", "React Three Fiber"],
    githubLink: "https://codesandbox.io/s/dp-logo-1d7cb",
    projectLink: "https://codesandbox.io/s/dp-logo-1d7cb",
  },
  {
    title: "Pair Matching Game",
    description:
      "Sea themed pair matching game using the Fisher Yates shuffle.",
    image: (
      <Image
        src="/projects/pairmatching.JPG"
        layout="fill"
        objectFit="cover"
      />
    ),
    tech: ["JavaScript", "CSS", "HTML"],
    githubLink: "https://github.com/notlad-p/pair-matching-game",
    projectLink: "https://notlad-p.github.io/pair-matching-game/",
  },
  {
    title: "iPhone Calculator Clone",
    description: "An iPhone calculator clone built in vanilla JavaScript.",
    image: (
      <Image
        src="/projects/iphone-calc.JPG"
        layout="fill"
        objectFit="cover"
      />
    ),
    tech: ["JavaScript", "CSS", "HTML"],
    githubLink: "https://github.com/notlad-p/iphone-calculator",
    projectLink: "https://notlad-p.github.io/iphone-calculator/",
  },
];

export default projectData;
