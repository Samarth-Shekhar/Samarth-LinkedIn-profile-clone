import { BadgeCheck, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import bannerImage from "@/assets/banner.png";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface ProfileHeaderProps {
  name: string;
  tagline: string;
  location: string;
  connections: string;
}

export const ProfileHeader = ({ name, tagline, location, connections }: ProfileHeaderProps) => {
  const { data: pageContent } = useQuery({
    queryKey: ['page-content'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('page_content')
        .select('content')
        .limit(1)
        .single();
      
      if (error) throw error;
      return data;
    },
  });

  const displayTagline = pageContent?.content || tagline;

  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border">
      {/* Banner */}
      <div className="relative h-48 md:h-52">
        <img 
          src={bannerImage} 
          alt="Profile banner" 
          className="w-full h-full object-cover"
        />
        <button className="absolute top-4 right-4 w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-muted transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
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
            <h1 className="text-2xl font-semibold tracking-tight">{name}</h1>
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
        <p className="text-base mb-2 leading-snug">{displayTagline}</p>

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
