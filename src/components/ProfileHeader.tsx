import { BadgeCheck, Pencil } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import bannerImage from "@/assets/banner.png";
import { useLandingPageData, useUpdateLandingPage } from "@/hooks/useLandingPageData";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface ProfileHeaderProps {
  name: string;
  tagline: string;
  location: string;
  connections: string;
}

export const ProfileHeader = ({ name, tagline, location, connections }: ProfileHeaderProps) => {
  const { data: landingPageData } = useLandingPageData();
  const updateMutation = useUpdateLandingPage();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedBio, setEditedBio] = useState("");

  const displayName = landingPageData?.profile_name || name;
  const displayBio = landingPageData?.bio || tagline;

  const handleEditClick = () => {
    setEditedName(displayName);
    setEditedBio(displayBio);
    setIsEditOpen(true);
  };

  const handleSave = () => {
    updateMutation.mutate({
      profile_name: editedName,
      bio: editedBio,
    });
    setIsEditOpen(false);
  };

  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border">
      {/* Banner */}
      <div className="relative h-48 md:h-52">
        <img 
          src={bannerImage} 
          alt="Profile banner" 
          className="w-full h-full object-cover"
        />
        <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={handleEditClick}
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 w-10 h-10 bg-card rounded-full hover:bg-muted"
            >
              <Pencil className="w-5 h-5" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={editedBio}
                  onChange={(e) => setEditedBio(e.target.value)}
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

      {/* Profile Content */}
      <div className="px-6 pb-4">
        {/* Profile Photo - overlapping banner */}
        <div className="relative -mt-20 md:-mt-24 mb-4">
          <div className="w-40 h-40 rounded-full border-4 border-card overflow-hidden bg-card">
            <img 
              src={profilePhoto} 
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name and Badge */}
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold tracking-tight">{displayName}</h1>
            <BadgeCheck className="w-5 h-5 text-primary" fill="currentColor" />
          </div>
          
          {/* University Badge */}
          <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-md">
            <div className="w-8 h-8 bg-[#FFD700] rounded flex items-center justify-center text-xs font-bold">
              AU
            </div>
            <span className="text-sm font-medium hidden md:block">Amity University</span>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-base mb-2 leading-snug">{displayBio}</p>

        {/* Location and Connections */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-1">
          <span>{location}</span>
          <span>·</span>
          <a href="#" className="text-primary font-semibold hover:underline">
            Contact info
          </a>
        </div>
        
        <a href="#" className="text-sm text-primary font-semibold hover:underline">
          {connections}
        </a>
      </div>
    </div>
  );
};
