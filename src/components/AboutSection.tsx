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

const academicJourney = {
  year: "2022 – Present",
  title: "BSc (Hons) in Cyber Security Engineering",
  institute: "Sri Lanka Technology Campus (SLTC)",
  location: "Padukka, Sri Lanka",
  description:
    "Currently a final-year undergraduate specializing in cyber security, secure systems, and applied software development. Engaged in academic projects, hands-on security labs, and real-world system design.",
};


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
                a final-year Cyber Security undergraduate and aspiring Full Stack Developer
                with a strong interest in building secure, scalable, and real-world applications.
              </p>

              <p>
                I focus on <span className="text-primary">application security</span>,
                <span className="text-primary"> full stack development</span>, and
                <span className="text-primary"> secure system design</span>.
                I enjoy combining security principles with modern development practices
                to create robust and efficient software solutions.
              </p>

              <p>
                I’m always eager to learn new technologies, stay updated with industry trends,
                and explore areas like ethical hacking, reverse engineering, and application
                security engineering. I actively look for opportunities where I can grow,
                solve challenges, and contribute to meaningful projects.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h3 className="font-mono text-lg font-bold mb-4 text-foreground">
                {"<"} Favorite {"/>"}
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
              {"<"} Academic Journey {"/>"}
            </h3>

            <div className="relative pl-12">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent" />

              {/* Timeline dot */}
              <div className="absolute left-2 top-2 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              <div className="cyber-card p-6">
                <span className="text-primary font-mono text-sm">
                  {academicJourney.year}
                </span>

                <h4 className="font-bold text-lg mt-2 text-foreground">
                🎓 {academicJourney.title}
                </h4>

                <p className="text-sm text-muted-foreground mt-1">
                  {academicJourney.institute} — 📍 {academicJourney.location}
                </p>

                <p className="text-muted-foreground text-sm mt-3">
                  {academicJourney.description}
                </p>
              </div>
            </div>

            {/* Career Focus */}
            <div className="mt-10">
              <h3 className="font-mono text-lg font-bold mb-4 text-foreground">
                {"<"} Career Focus {"/>"}
              </h3>

              <div className="cyber-card p-5 space-y-3 text-sm text-muted-foreground">
                <p>
                  🔐 Cyber Security Engineering & Application Security
                </p>

                <p>
                  💻 Full Stack Development with security-first design
                </p>

                <p>
                  🧠 Interested in secure authentication systems, blockchain-based solutions,
                  and real-world cyber defense mechanisms
                </p>

                <p>
                  🎯 Seeking internship opportunities to apply academic knowledge in
                  real-world environments and grow as a security-focused engineer
                </p>
              </div>
            </div>

            {/* Stats (UNCHANGED) */}
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
