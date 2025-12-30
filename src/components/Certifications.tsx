import { Award, BadgeCheck, Medal } from "lucide-react";
import solidworksCertificate from "@/assets/solidworks-certificate.png";
import solidworksDesignCertificate from "@/assets/solidworks-design-certificate.png";
import solidworksProfessionalCertificate from "@/assets/solidworks-professional-certificate.png";

const Certifications = () => {
  const certifications = [
    {
      title: "SOLIDWORKS Additive Manufacturing Associate",
      issuer: "Dassault Systèmes",
      date: "December 2025",
      icon: Award,
      pdfUrl: "/certificates/solidworks-additive-manufacturing-certificate.pdf",
      image: solidworksCertificate,
    },
    {
      title: "SOLIDWORKS Design Associate (CSWA)",
      issuer: "Dassault Systèmes",
      date: "October 2025",
      icon: BadgeCheck,
      pdfUrl: null,
      image: solidworksDesignCertificate,
    },
    {
      title: "SOLIDWORKS Design Professional (CSWP)",
      issuer: "Dassault Systèmes",
      date: "December 2025",
      icon: Medal,
      pdfUrl: null,
      image: solidworksProfessionalCertificate,
    },
  ];

  return (
    <section id="certifications" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={index}
                className="group bg-card/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-border/50 
                           transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10
                           hover:border-primary/30"
              >
              <div className="flex flex-col items-center text-center space-y-4">
                  {cert.image ? (
                    <div className="w-full h-32 rounded-lg overflow-hidden mb-2">
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 
                                    flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30
                                    transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  )}
                  <div>
                    {cert.pdfUrl ? (
                      <a
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-primary hover:text-primary/80 text-lg mb-1 cursor-pointer transition-colors duration-200 hover:underline"
                      >
                        {cert.title}
                      </a>
                    ) : (
                      <h3 className="font-bold text-foreground text-lg mb-1">{cert.title}</h3>
                    )}
                    <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                    {cert.date && (
                      <p className="text-muted-foreground/70 text-xs mt-1">{cert.date}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
