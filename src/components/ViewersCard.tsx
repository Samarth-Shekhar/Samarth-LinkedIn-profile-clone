import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

export const ViewersCard = () => {
  const viewers = [
    { id: 1, name: "Someone at Amity University" },
    { id: 2, name: "Someone at Amity University" },
    { id: 3, name: "Someone at Amity University" },
  ];

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-base font-semibold">Who your viewers also viewed</h2>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
          <Eye className="w-4 h-4" />
          <span>Private to you</span>
        </div>

        <div className="space-y-3">
          {viewers.map((viewer) => (
            <div key={viewer.id} className="flex items-center gap-3 py-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-muted to-muted-foreground/20 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{viewer.name}</p>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                className="rounded-full border-muted-foreground/30 text-muted-foreground hover:bg-muted flex-shrink-0"
              >
                View
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
