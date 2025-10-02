import { useState } from "react";
import { Pencil, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLandingPageData, useUpdateLandingPage } from "@/hooks/useLandingPageData";

export const ServicesSection = () => {
  const { data: landingPageData } = useLandingPageData();
  const updateMutation = useUpdateLandingPage();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editedServices, setEditedServices] = useState("");
  
  const servicesText = landingPageData?.services || "Computer Networking • User Experience Design (UED) • Web Development • Custom Software Development";

  const handleEditClick = () => {
    setEditedServices(servicesText);
    setIsEditOpen(true);
  };

  const handleSave = () => {
    updateMutation.mutate({ services: editedServices });
    setIsEditOpen(false);
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold">Services</h2>
        <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleEditClick} variant="ghost" size="sm" className="text-muted-foreground hover:bg-muted -mr-2">
              <Pencil className="w-5 h-5" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Services</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="services">Services (separate with •)</Label>
                <Textarea
                  id="services"
                  value={editedServices}
                  onChange={(e) => setEditedServices(e.target.value)}
                  rows={4}
                />
              </div>
              <Button onClick={handleSave} className="w-full">
                Save Changes
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      <p className="text-sm mb-4">
        {servicesText}
      </p>

      <button className="flex items-center text-sm text-muted-foreground hover:text-primary font-semibold">
        Show all <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
};
