import { Shield, Server, Cloud, Code, Database, Lock, Wifi, Search } from "lucide-react";

const skills = [
  { name: "Threat Analysis", icon: Search },
  { name: "SIEM (Splunk, ELK)", icon: Server },
  { name: "Network Security", icon: Wifi },
  { name: "Python", icon: Code },
  { name: "SQL", icon: Database },
  { name: "Cloud Security (AWS)", icon: Cloud },
  { name: "Offensive Security", icon: Shield },
  { name: "Defensive Security", icon: Lock },
];

const timeline = [
  {
    year: "2024",
    title: "Security Research Intern",
    description: "Conducting vulnerability research and penetration testing",
  },
  {
    year: "2023",
    title: "Started Cybersecurity Degree",
    description: "Pursuing BSc in Cybersecurity at University",
  },
  {
    year: "2022",
    title: "First Bug Bounty",
    description: "Discovered and reported XSS vulnerability",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - About Text */}
          <div>
            <p className="text-primary font-mono text-sm mb-2 tracking-wider">
              {"// ABOUT ME"}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Who <span className="text-gradient-cyber">I Am</span>
            </h2>

            <div className="space-y-4 text-foreground/80">
              <p>
                I'm <span className="text-primary font-medium">Dileeshan Kosala</span>, 
                a passionate Cybersecurity undergraduate with a deep interest in protecting 
                digital assets and building secure systems.
              </p>
              <p>
                My focus areas include <span className="text-primary">threat detection</span>, 
                <span className="text-primary"> secure system design</span>, and 
                <span className="text-primary"> cloud security</span>. I combine theoretical 
                knowledge with hands-on experience in both offensive and defensive security.
              </p>
              <p>
                When I'm not hunting for vulnerabilities or building security tools, 
                you'll find me researching the latest cyber threats, contributing to 
                open-source security projects, or participating in CTF competitions.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h3 className="font-mono text-lg font-bold mb-4 text-foreground">
                {"<"} Skills {"/>"}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-tag flex items-center gap-2"
                  >
                    <skill.icon className="w-4 h-4 text-primary" />
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div>
            <h3 className="font-mono text-lg font-bold mb-8 text-foreground">
              {"<"} Journey {"/>"}
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-2 top-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>

                    <div className="cyber-card p-5">
                      <span className="text-primary font-mono text-sm">
                        {item.year}
                      </span>
                      <h4 className="font-bold text-lg mt-1 text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center cyber-card p-4">
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-xs text-muted-foreground mt-1">Projects</p>
              </div>
              <div className="text-center cyber-card p-4">
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-xs text-muted-foreground mt-1">Certificates</p>
              </div>
              <div className="text-center cyber-card p-4">
                <p className="text-3xl font-bold text-primary">3+</p>
                <p className="text-xs text-muted-foreground mt-1">Years Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
