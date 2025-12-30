const Certifications = () => {
  const certifications = [
    {
      title: "Certified SolidWorks Associate (CSWA)",
      issuer: "Dassault Systèmes",
      date: "2024"
    }
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

        <div className="bg-secondary/30 backdrop-blur-sm rounded-xl p-8 md:p-10 space-y-4 shadow-sm border border-border/50">
          {certifications.map((cert, index) => (
            <div key={index}>
              <p className="text-foreground/90 leading-relaxed text-base">
                <span className="font-semibold text-foreground">{cert.title}</span>
                {cert.issuer && <span> — {cert.issuer}</span>}
                {cert.date && <span className="text-muted-foreground"> ({cert.date})</span>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
