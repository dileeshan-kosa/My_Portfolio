import Carousel from "./Carousel";
import Card from "./Card";
import certificatesData from "@/data/certificates.json";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
}

const CertificateCarousel = () => {
  const certificates: Certificate[] = certificatesData;

  return (
    <section id="certificates" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm mb-2 tracking-wider">
            {"// CREDENTIALS"}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-cyber">Certificates</span> & Awards
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements in cybersecurity and cloud computing.
          </p>
        </div>

        {/* Carousel */}
        <Carousel autoplaySpeed={4000}>
          {certificates.map((cert) => (
            <Card
              key={cert.id}
              type="certificate"
              title={cert.title}
              image={cert.image}
              issuer={cert.issuer}
              date={cert.date}
              link={cert.link}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CertificateCarousel;
