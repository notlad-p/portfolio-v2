import data from "./projectData";
import Project from "./Project";
import Heading from "../../Heading/Heading";
import SectionContainer from "../SectionContainer";

const Projects = () => {
  return (
    <SectionContainer id='projects' >
      <Heading text="Projects" />
      {data.map(
        ({ title, description, image, tech, codeLink, projectLink }, i) => (
          <Project
            key={i}
            title={title}
            description={description}
            image={image}
            tech={tech}
            codeLink={codeLink}
            projectLink={projectLink}
            flip={i % 2 === 0}
            last={i === data.length - 1}
          />
        )
      )}
    </SectionContainer>
  );
};

export default Projects;
