import { Shield, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-mono text-sm font-bold">
              DK<span className="text-primary">_</span>SEC
            </span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Dileeshan Kosala. Built with{" "}
            <Heart className="w-4 h-4 text-primary inline" /> and security in mind.
          </p>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
