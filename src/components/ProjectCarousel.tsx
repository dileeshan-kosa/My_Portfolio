import Carousel from "./Carousel";
import Card from "./Card";
import projectsData from "@/data/projects.json";

interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
}

const ProjectCarousel = () => {
  const projects: Project[] = projectsData;

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm mb-2 tracking-wider">
            {"// MY WORK"}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient-cyber">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of cybersecurity tools, research projects, and security-focused applications.
          </p>
        </div>

        {/* Carousel */}
        <Carousel>
          {projects.map((project) => (
            <Card
              key={project.id}
              type="project"
              title={project.title}
              image={project.image}
              description={project.description}
              tech={project.tech}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectCarousel;
