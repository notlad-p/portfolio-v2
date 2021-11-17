import Image from "next/image";

const projectData = [
  {
    title: "Peak Paw Sitting",
    description:
      "Site for local pet sitter to display her services and brand image to customers.",
    image: (
      <Image
        src="/projects/peakpawsitting.JPG"
        layout="fill"
        objectFit="cover"
      />
    ),
    tech: ["Next.js", "Strapi", "Material UI"],
    codeLink: null,
    projectLink: "https://peakpawsitting.com",
  },
  {
    title: "Rent-a-Car",
    description:
      "Fictional car rental site built with React, using the Material UI component library.",
    image: (
      <Image
        src="/projects/rentacar.JPG"
        layout="fill"
        objectFit="cover"
      />
    ),
    tech: ["React", "SASS", "Material UI"],
    codeLink: "https://github.com/notlad-p/rent-a-car",
    projectLink: "https://notlad-p.github.io/rent-a-car/",
  },
  {
    title: "RC Bell Carpentry",
    description:
      "UI design for a local carpenter to display his portfolio and have an easy way to contact him.",
    image: (
      <Image
        src="/projects/rc-bell.jpg"
        layout="fill"
        objectFit="cover"
      />
    ),
    tech: ["InVision Studio"],
    codeLink: null,
    projectLink: "https://dalton364671.invisionapp.com/prototype/ckrch1m6e008ne101s041nldl/play",
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
    codeLink: "https://github.com/notlad-p/dash",
    projectLink: "https://dash-browser-extension.netlify.app/",
  },
  {
    title: "3D Logo",
    description:
      "3D version of my original logo, beware it is very CPU and GPU intensive.",
    image: (
      <Image
        src="/projects/3d-logo.jpg"
        layout="fill"
        objectFit="cover"
      />
    ),
    tech: ["React", "React Three Fiber"],
    codeLink: "https://codesandbox.io/s/dp-logo-1d7cb",
    projectLink: "https://codesandbox.io/s/dp-logo-1d7cb",
  },
  {
    title: "Neumorphic Calculator",
    description: "A calculator I built for a Free Code Camp project, using neumorphic design.",
    image: (
      <Image
        src="/projects/neumorphic-calc.JPG"
        layout="fill"
        objectFit="cover"
      />
    ),
    tech: ["React", "Styled Components"],
    codeLink: "https://codepen.io/daltronp/pen/ZELVprN",
    projectLink: "https://codepen.io/daltronp/full/ZELVprN",
  },
];

export default projectData;
