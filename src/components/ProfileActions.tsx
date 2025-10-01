import { Button } from "@/components/ui/button";

export const ProfileActions = () => {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      <Button 
        className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6"
      >
        Open to
      </Button>
      <Button 
        variant="outline" 
        className="border-primary text-primary hover:bg-primary/5 font-semibold rounded-full px-6"
      >
        Add section
      </Button>
      <Button 
        variant="outline"
        className="border-muted-foreground/30 text-foreground hover:bg-muted font-semibold rounded-full px-6"
      >
        Enhance profile
      </Button>
      <Button 
        variant="ghost"
        className="text-muted-foreground hover:bg-muted rounded-full w-10 h-10 p-0"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="6" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="12" cy="18" r="1.5" />
        </svg>
      </Button>
    </div>
  );
};
