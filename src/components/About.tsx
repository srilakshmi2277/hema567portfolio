import { Card } from "@/components/ui/card";
import { GraduationCap, Lightbulb, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Master's in Mechanical Engineering at Northeastern University",
    },
    {
      icon: Target,
      title: "Focus Areas",
      description: "SOLIDWORKS and Other Software",
      isClickable: true,
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Passionate about creating mechanisms and sustainable solutions",
    },
  ];


  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            I'm a Mechanical Engineer passionate about design, robotics, and manufacturing.
            I enjoy creating mechanisms such as parallel jaw grippers, robotic arms, and CAD-based assemblies.
            Currently pursuing my Master's at Northeastern University and actively involved in research and projects
            focused on advancing mechanical systems and renewable energy solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <Card
              key={item.title}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                {item.isClickable ? (
                  <button
                    onClick={() => navigate('/focus-areas')}
                    className="text-xl font-semibold text-blue-600 hover:underline cursor-pointer transition-all"
                  >
                    {item.title}
                  </button>
                ) : (
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                )}
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
