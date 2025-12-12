import { Github, Mail, Download, Shield, Lock, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-placeholder.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 text-primary/10">
          <Shield className="w-32 h-32 icon-float" />
        </div>
        <div className="absolute top-1/3 right-10 text-primary/10 animation-delay-1000">
          <Lock className="w-24 h-24 icon-float" style={{ animationDelay: "1s" }} />
        </div>
        <div className="absolute bottom-1/4 left-1/4 text-primary/10">
          <Server className="w-20 h-20 icon-float" style={{ animationDelay: "2s" }} />
        </div>
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="opacity-0 animate-slide-in-up">
              <p className="text-primary font-mono text-sm md:text-base mb-2 tracking-wider">
                {"<"} Hello, I'm {"/>"}
              </p>
            </div>

            <h1 className="opacity-0 animate-slide-in-up animate-delay-100 text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Dileeshan <span className="text-gradient-cyber">Kosala</span>
            </h1>

            <div className="opacity-0 animate-slide-in-up animate-delay-200">
              <p className="font-mono text-muted-foreground text-sm md:text-base mb-6">
                Cybersecurity Undergraduate | Security Researcher | Developer
              </p>
            </div>

            <div className="opacity-0 animate-slide-in-up animate-delay-300">
              <p className="text-foreground/80 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Cybersecurity Undergraduate focused on{" "}
                <span className="text-primary font-medium">Threat Detection</span>,{" "}
                <span className="text-primary font-medium">Secure System Design</span> &{" "}
                <span className="text-primary font-medium">Cloud Security</span>.
              </p>
            </div>

            <div className="opacity-0 animate-slide-in-up animate-delay-400 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <Button variant="cyber" size="lg">
                <Download className="w-5 h-5" />
                Download CV
              </Button>
              <Button variant="cyberOutline" size="lg" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="cyberOutline"
                size="lg"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Mail className="w-5 h-5" />
                Contact
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-110" />
              
              {/* Rotating border */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: "20s" }} />
                <div className="absolute inset-4 rounded-full border border-primary/50" />
                <div className="absolute inset-8 rounded-full overflow-hidden cyber-glow">
                  <img
                    src={profileImage}
                    alt="Dileeshan Kosala - Cybersecurity Professional"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-card border border-primary/30 rounded-lg px-3 py-2 shadow-lg">
                <p className="font-mono text-xs text-primary">Security+</p>
              </div>
              {/* <div className="absolute -bottom-4 -left-4 bg-card border border-primary/30 rounded-lg px-3 py-2 shadow-lg">
                <p className="font-mono text-xs text-primary">AWS</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-xs font-mono text-muted-foreground">Scroll</span>
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
