import { ExternalLink, Github } from "lucide-react";

interface CardProps {
  type: "project" | "certificate";
  title: string;
  image: string;
  description?: string;
  tech?: string[];
  github?: string;
  demo?: string;
  issuer?: string;
  date?: string;
  link?: string;
}

const Card = ({
  type,
  title,
  image,
  description,
  tech,
  github,
  demo,
  issuer,
  date,
  link,
}: CardProps) => {
  const handleClick = () => {
    if (type === "certificate" && link) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else if (type === "project") {
      if (demo) {
        window.open(demo, "_blank", "noopener,noreferrer");
      } else if (github) {
        window.open(github, "_blank", "noopener,noreferrer");
      }
    }
  };

  return (
    <div
      onClick={handleClick}
      className="cyber-card group cursor-pointer w-72 md:w-80 flex-shrink-0 overflow-hidden"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }}
    >
      {/* Image */}
      <div className="relative h-40 md:h-48 overflow-hidden bg-secondary">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        <h3 className="font-mono text-lg font-bold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {type === "project" && (
          <>
            <p className="text-muted-foreground text-sm mb-3 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
              {description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tech?.slice(0, 4).map((item, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded border border-primary/20"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              )}
            </div>
          </>
        )}

        {type === "certificate" && (
          <>
            <p className="text-muted-foreground text-sm mb-1">{issuer}</p>
            <p className="text-primary font-mono text-xs">{date}</p>
            
            <div className="mt-3 flex items-center gap-1 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ExternalLink className="w-4 h-4" />
              View Certificate
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
