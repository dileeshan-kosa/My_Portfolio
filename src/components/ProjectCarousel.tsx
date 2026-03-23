// import Carousel from "./Carousel";
// import Card from "./Card";
// import projectsData from "@/data/projects.json";

// interface Project {
//   id: string;
//   title: string;
//   image: string;
//   description: string;
//   tech: string[];
//   github: string;
//   demo: string;
// }

// const ProjectCarousel = () => {
//   const projects: Project[] = projectsData;

//   return (
//     <section id="projects" className="section-padding">
//       <div className="container-custom">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <p className="text-primary font-mono text-sm mb-2 tracking-wider">
//             {"// MY WORK"}
//           </p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
//             Featured <span className="text-gradient-cyber">Projects</span>
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             A collection of cybersecurity tools, research projects, and security-focused applications.
//           </p>
//         </div>

//         {/* Carousel */}
//         <Carousel>
//           {projects.map((project) => (
//             <div key={project.id} className="[&>div]:h-[460px] md:[&>div]:h-[470px]">
//               <Card
//                 key={project.id}
//                 type="project"
//                 title={project.title}
//                 image={project.image}
//                 description={project.description}
//                 tech={project.tech}
//                 github={project.github}
//                 demo={project.demo}
//               />
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </section>
//   );
// };

// export default ProjectCarousel;


import Carousel from "./Carousel";
import Card from "./Card";
import projectsData from "@/data/projects.json";
import { Github, Star } from "lucide-react";

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

  // Separate the first project (Final Year Project) from the rest
  const featuredProject = projects[0];
  const remainingProjects = projects.slice(1);

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
            A collection of full-stack web applications, machine learning systems, and software engineering projects.
          </p>
        </div>

        {/* --- SPECIAL ITEM: Final Year Project --- */}
        {featuredProject && (
          /* Added max-w-5xl and mx-auto to prevent it from getting too wide */
          <div className="mb-16 max-w-5xl mx-auto cyber-card rounded-2xl overflow-hidden border border-primary/40 bg-card/50 relative group shadow-[0_0_30px_rgba(0,255,136,0.1)]">
            {/* Special Badge */}
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] md:text-xs font-bold px-3 py-1 rounded-bl-lg z-10 flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" /> FINAL YEAR PROJECT
            </div>

            {/* Changed grid to 40% image / 60% text for a sleeker look */}
            <div className="grid md:grid-cols-[40%_60%] gap-0">
              {/* Featured Image */}
              <div className="relative h-48 md:h-full min-h-[220px] overflow-hidden bg-secondary">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card via-card/80 md:via-card/20 to-transparent opacity-90 md:opacity-100" />
              </div>

              {/* Featured Content (Reduced padding from p-12 to p-6/p-8) */}
              <div className="p-6 md:p-8 flex flex-col justify-center relative z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {featuredProject.title}
                </h3>
                <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                  {featuredProject.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tech.map((item, index) => (
                    <span
                      key={index}
                      className="text-[11px] font-mono px-2.5 py-1 bg-secondary text-secondary-foreground rounded border border-primary/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-auto">
                  {featuredProject.github && (
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-medium hover:text-primary transition-colors border border-primary/50 px-4 py-2 rounded hover:bg-primary/10"
                    >
                      <Github className="w-3.5 h-3.5" />
                      View Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- CAROUSEL: Remaining Projects --- */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold font-mono text-foreground/80">
            {"<"} Other Notable Projects {"/>"}
          </h3>
        </div>

        <Carousel>
          {remainingProjects.map((project) => (
            <div key={project.id} className="[&>div]:h-[460px] md:[&>div]:h-[470px]">
              <Card
                type="project"
                title={project.title}
                image={project.image}
                description={project.description}
                tech={project.tech}
                github={project.github}
                demo={project.demo}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectCarousel;