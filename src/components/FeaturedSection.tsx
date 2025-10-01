import { Plus, Pencil, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FeaturedSection = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Featured</h2>
        <div className="flex gap-1">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:bg-muted -mr-2">
            <Plus className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:bg-muted -mr-2">
            <Pencil className="w-5 h-5" />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <a href="#" className="border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors group">
          <div className="text-xs text-muted-foreground mb-2">Link</div>
          <div className="bg-muted rounded h-32 mb-3 flex items-center justify-center">
            <FileText className="w-12 h-12 text-muted-foreground" />
          </div>
          <h3 className="text-sm font-semibold mb-1 group-hover:underline">Samarth Resume Latest 2026.pdf</h3>
          <p className="text-xs text-muted-foreground">Google Docs</p>
        </a>

        <a href="#" className="border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors group">
          <div className="text-xs text-muted-foreground mb-2">Link</div>
          <div className="bg-muted rounded h-32 mb-3 flex items-center justify-center">
            <FileText className="w-12 h-12 text-muted-foreground" />
          </div>
          <h3 className="text-sm font-semibold mb-1 group-hover:underline">Certifications List</h3>
          <p className="text-xs text-muted-foreground">Google Docs</p>
        </a>
      </div>
    </div>
  );
};
