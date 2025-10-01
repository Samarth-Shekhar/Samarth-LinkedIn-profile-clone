import { Pencil, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ServicesSection = () => {
  const services = [
    "Computer Networking",
    "User Experience Design (UED)",
    "Web Development",
    "Custom Software Development"
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold">Services</h2>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:bg-muted -mr-2">
          <Pencil className="w-5 h-5" />
        </Button>
      </div>
      
      <p className="text-sm mb-4">
        {services.join(" • ")}
      </p>

      <button className="flex items-center text-sm text-muted-foreground hover:text-primary font-semibold">
        Show all <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
};
