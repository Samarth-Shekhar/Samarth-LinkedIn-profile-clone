import { useState } from "react";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLandingPageData, useUpdateLandingPage } from "@/hooks/useLandingPageData";

export const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { data: landingPageData } = useLandingPageData();
  const updateMutation = useUpdateLandingPage();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editedAbout, setEditedAbout] = useState("");
  
  const fullText = landingPageData?.about || `I am a final-year B.Tech student at Amity University with a strong foundation in software development, full-stack engineering, frontend development, and artificial intelligence. My previous internships with Celebal Technologies, Airports Authority of India, Marksman Technologies, and Essentia.dev in AI, frontend, and full-stack development roles have equipped me with hands-on experience in building scalable applications and solving complex problems.`;
  
  const shortText = fullText.slice(0, 200);

  const handleEditClick = () => {
    setEditedAbout(fullText);
    setIsEditOpen(true);
  };

  const handleSave = () => {
    updateMutation.mutate({ about: editedAbout });
    setIsEditOpen(false);
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold">About</h2>
        <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleEditClick} variant="ghost" size="sm" className="text-muted-foreground hover:bg-muted -mr-2">
              <Pencil className="w-5 h-5" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit About</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="about">About</Label>
                <Textarea
                  id="about"
                  value={editedAbout}
                  onChange={(e) => setEditedAbout(e.target.value)}
                  rows={6}
                />
              </div>
              <Button onClick={handleSave} className="w-full">
                Save Changes
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      <p className="text-sm leading-relaxed">
        {isExpanded ? fullText : shortText}
        {!isExpanded && "... "}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-muted-foreground hover:text-primary font-semibold"
        >
          {isExpanded ? "show less" : "more"}
        </button>
      </p>
    </div>
  );
};
