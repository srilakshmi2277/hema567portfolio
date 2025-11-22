import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FocusAreasParts = () => {
  const navigate = useNavigate();

  const parts = [
    { id: 1, title: "Part Design 1", description: "Placeholder for mechanical component design and modeling" },
    { id: 2, title: "Assembly 2", description: "Placeholder for mechanical component design and modeling" },
    { id: 3, title: "Part Design 3", description: "Placeholder for mechanical component design and modeling" },
    { id: 4, title: "Part Design 4", description: "Placeholder for mechanical component design and modeling" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate('/focus-areas')}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Focus Areas
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Parts <span className="gradient-text">Gallery</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              3D modeling of mechanical components, parametric design, and design for manufacturability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {parts.map((part) => (
              <Card
                key={part.id}
                className="p-6 border-border bg-card hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video bg-secondary/50 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center space-y-2">
                    <Upload className="h-12 w-12 mx-auto text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Image Placeholder {part.id}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{part.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {part.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FocusAreasParts;
