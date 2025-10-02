-- Create landing_page table
CREATE TABLE public.landing_page (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  profile_name TEXT NOT NULL,
  bio TEXT NOT NULL,
  about TEXT NOT NULL,
  services TEXT NOT NULL,
  featured TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.landing_page ENABLE ROW LEVEL SECURITY;

-- Create policy to allow everyone to read content
CREATE POLICY "Anyone can read landing page content" 
ON public.landing_page 
FOR SELECT 
USING (true);

-- Create policy to allow anyone to update content (you may want to restrict this later)
CREATE POLICY "Anyone can update landing page content" 
ON public.landing_page 
FOR UPDATE 
USING (true);

-- Insert initial data
INSERT INTO public.landing_page (profile_name, bio, about, services, featured) 
VALUES (
  'Samarth',
  'Final Year B.Tech IT Student | Ex-Intern at Celebal Technologies, Airports Authority of India, Marksman Technologies, Essentia.dev | AI Enthusiast | Full Stack Developer',
  'I am a final-year B.Tech student at Amity University with a strong foundation in software development, full-stack engineering, frontend development, and artificial intelligence. My previous internships with Celebal Technologies, Airports Authority of India, Marksman Technologies, and Essentia.dev in AI, frontend, and full-stack development roles have equipped me with hands-on experience in building scalable applications and solving complex problems.',
  'Computer Networking • User Experience Design (UED) • Web Development • Custom Software Development',
  'https://drive.google.com/file/d/1yVTQ0t3ZWWvongPPTR-W7h1q_WgZbmB4/view;https://docs.google.com/document/d/example/certifications'
);