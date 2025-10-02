import { useState } from "react";
import { Plus, Pencil, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLandingPageData, useUpdateLandingPage } from "@/hooks/useLandingPageData";

export const FeaturedSection = () => {
  const { data: landingPageData } = useLandingPageData();
  const updateMutation = useUpdateLandingPage();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editedFeatured, setEditedFeatured] = useState("");

  const featuredLinks = landingPageData?.featured 
    ? landingPageData.featured.split(';').filter(link => link.trim())
    : [
        'https://drive.google.com/file/d/1yVTQ0t3ZWWvongPPTR-W7h1q_WgZbmB4/view',
        'https://docs.google.com/document/d/example/certifications'
      ];

  const handleEditClick = () => {
    setEditedFeatured(featuredLinks.join(';'));
    setIsEditOpen(true);
  };

  const handleSave = () => {
    updateMutation.mutate({ featured: editedFeatured });
    setIsEditOpen(false);
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Featured</h2>
        <div className="flex gap-1">
          <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
            <DialogTrigger asChild>
              <Button onClick={handleEditClick} variant="ghost" size="sm" className="text-muted-foreground hover:bg-muted -mr-2">
                <Pencil className="w-5 h-5" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Featured Links</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="featured">Links (separate with semicolon ;)</Label>
                  <Textarea
                    id="featured"
                    value={editedFeatured}
                    onChange={(e) => setEditedFeatured(e.target.value)}
                    rows={4}
                    placeholder="https://example.com;https://example2.com"
                  />
                </div>
                <Button onClick={handleSave} className="w-full">
                  Save Changes
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {featuredLinks.map((link, index) => (
          <a 
            key={index} 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors group"
          >
            <div className="text-xs text-muted-foreground mb-2">Link</div>
            <div className="bg-muted rounded h-32 mb-3 flex items-center justify-center">
              <FileText className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-sm font-semibold mb-1 group-hover:underline break-all">
              {link.split('/').pop() || 'Link'}
            </h3>
            <p className="text-xs text-muted-foreground">External Link</p>
          </a>
        ))}
      </div>
    </div>
  );
};
