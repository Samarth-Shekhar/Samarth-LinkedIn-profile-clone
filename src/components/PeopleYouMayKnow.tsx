import { BadgeCheck, UserPlus, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PeopleYouMayKnow = () => {
  const people = [
    {
      name: "John Paul Amuzu",
      role: "Cisco CyberOps Associate & Instructor || Passionate IT Professional",
      time: "2nd",
      verified: true
    },
    {
      name: "Gilberto Sudre",
      role: "Professor e Perito em Computacao Forense. Especialista em Seguranca",
      time: "2nd",
      verified: true
    },
    {
      name: "Rahul Kumar",
      role: "Java | Android Studio | IoT | DSA | MYSQLi Generative AI & Cybersecurity",
      time: "2nd",
      verified: true
    }
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold">People you may know</h3>
      </div>

      <div className="space-y-4">
        {people.map((person, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-semibold text-muted-foreground">
                {person.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 mb-0.5">
                <h4 className="text-sm font-semibold truncate">{person.name}</h4>
                {person.verified && (
                  <BadgeCheck className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" />
                )}
                <span className="text-xs text-muted-foreground ml-1">• {person.time}</span>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                {person.role}
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full text-muted-foreground hover:bg-muted hover:border-foreground"
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Connect
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
