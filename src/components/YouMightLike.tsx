import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const YouMightLike = () => {
  const pages = [
    {
      name: "Apna College",
      type: "E-Learning Providers",
      followers: "134,681 followers"
    },
    {
      name: "E-learning",
      type: "E-learning",
      followers: "394,139 followers"
    }
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-4">
      <h3 className="text-base font-semibold mb-4">You might like</h3>
      <p className="text-xs text-muted-foreground mb-4">Pages for you</p>

      <div className="space-y-4">
        {pages.map((page, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-12 h-12 rounded bg-muted flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-muted-foreground">
                {page.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold mb-0.5">{page.name}</h4>
              <p className="text-xs text-muted-foreground mb-1">{page.type}</p>
              <p className="text-xs text-muted-foreground mb-2">{page.followers}</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full text-muted-foreground hover:bg-muted hover:border-foreground"
              >
                + Follow
              </Button>
            </div>
          </div>
        ))}
      </div>

      <button className="flex items-center text-sm text-muted-foreground hover:text-primary font-semibold mt-4 w-full justify-center">
        Show all <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
};
