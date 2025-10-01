import { ProfileHeader } from "@/components/ProfileHeader";
import { ProfileActions } from "@/components/ProfileActions";
import { ViewersCard } from "@/components/ViewersCard";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FeaturedSection } from "@/components/FeaturedSection";
import { ActivitySection } from "@/components/ActivitySection";
import { PeopleYouMayKnow } from "@/components/PeopleYouMayKnow";
import { YouMightLike } from "@/components/YouMightLike";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* LinkedIn-style Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">in</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left/Main Column */}
          <div className="lg:col-span-8">
            <ProfileHeader
              name="SAMARTH SHEKHAR"
              tagline="Final Year B.Tech IT Student | Ex-Intern at Celebal Technologies, AAI, Marksman Technologies & Essentia.dev | Specialized in Full Stack Development, AI/ML & Data Analytics | Certified by NVIDIA, Cisco, Microsoft & Oracle"
              location="Ghaziabad, Uttar Pradesh, India"
              connections="500+ connections"
            />
            
            <ProfileActions />

            {/* Info Cards */}
            <div className="mt-4 space-y-2">
              <div className="bg-card rounded-lg border border-border p-4 flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm mb-1">
                    <span className="font-semibold">Show recruiters you're open to work</span> — you control who sees this.
                  </p>
                  <a href="#" className="text-sm text-primary font-semibold hover:underline">
                    Get started
                  </a>
                </div>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:bg-muted -mt-1 -mr-2">
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="bg-card rounded-lg border border-border p-4 flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm mb-1">
                    <span className="font-semibold">Tell non-profits</span> you are interested in getting involved with your time and skills
                  </p>
                  <a href="#" className="text-sm text-primary font-semibold hover:underline">
                    Get started
                  </a>
                </div>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:bg-muted -mt-1 -mr-2">
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* About Section */}
            <div className="mt-4">
              <AboutSection />
            </div>

            {/* Services Section */}
            <div className="mt-4">
              <ServicesSection />
            </div>

            {/* Featured Section */}
            <div className="mt-4">
              <FeaturedSection />
            </div>

            {/* Activity Section */}
            <div className="mt-4">
              <ActivitySection />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4">
            <div className="space-y-4">
              {/* Profile Language Card */}
              <div className="bg-card rounded-lg border border-border p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-semibold">Profile language</h3>
                  <button className="text-muted-foreground hover:bg-muted rounded-full p-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                </div>
                <p className="text-sm text-foreground">English</p>
              </div>

              {/* Public Profile URL Card */}
              <div className="bg-card rounded-lg border border-border p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-semibold">Public profile & URL</h3>
                  <button className="text-muted-foreground hover:bg-muted rounded-full p-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                </div>
                <p className="text-sm text-muted-foreground">
                  www.linkedin.com/in/samarth-shekhar-185ba311a
                </p>
              </div>

              {/* Viewers Card */}
              <ViewersCard />

              {/* People You May Know */}
              <PeopleYouMayKnow />

              {/* You Might Like */}
              <YouMightLike />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
