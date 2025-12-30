const Skills = () => {
  const skillSections = [{
    category: "3D CAD and Product Design",
    skills: "SolidWorks (CSWA), Fusion 360, Autodesk Inventor, AutoCAD, Fusion 360, GD&T, Design for Manufacturing (DFM), Tool & Fixture Design, Mechanism Design"
  }, {
    category: "Simulation and Analysis",
    skills: "ANSYS Workbench (Static, Modal, Fatigue), SolidWorks Motion Simulation, Thermal analysis fundamentals"
  }, {
    category: "Manufacturing and Prototyping",
    skills: "3D Printing, CNC Machining, Welding, Casting, Sheet Metal, Assembly Operations, Rapid prototyping"
  }, {
    category: "Energy and Thermal Systems",
    skills: "Heat transfer, Thermal behavior of materials, Energy storage fundamentals"
  }, {
    category: "Programming",
    skills: "Python, MATLAB"
  }, {
    category: "Soft Skills",
    skills: "Time Management, Team Collaboration, Problem Solving, Technical Communication"
  }];
  return <section id="skills" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
        </p>
        </div>

        <div className="bg-background/80 backdrop-blur-sm rounded-xl p-8 md:p-10 space-y-4 shadow-sm border border-border/50">
          {skillSections.map(section => <div key={section.category}>
              <p className="text-foreground/90 leading-relaxed text-base">
                <span className="font-semibold text-foreground">{section.category}</span> — {section.skills}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Skills;