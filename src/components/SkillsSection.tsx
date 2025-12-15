import { Code, Server, Database, Shield, Wrench, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS", "TypeScript", "Next.js"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express.js", "Python", "FastAPI", "REST APIs", "JWT Authentication", "Blockchain Integration (Basics)"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "Firebase", "MySQL", "Redis",],
  },
  {
    title: "Cyber Security",
    icon: Shield,
    skills: [
      "Ethical Hacking",
      "Application Security",
      "Network Security",
      "Fingerprint Authentication",
      "Threat Analysis",
    ],
  },
  {
    title: "IoT & Biometrics",
    icon: Cpu,
    skills: [
      "Fingerprint Authentication",
      "R307 Sensors",
      "UART Communication",
      "Biometric Template Handling",
    ],
  },
  {
    title: "Tools & Technology",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker (Basics)", "Linux", "Wireshark", "AWS", "Postman", "Figma"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-gradient-cyber">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build secure, scalable, and real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="cyber-card p-6 rounded-xl hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-background border border-border text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
