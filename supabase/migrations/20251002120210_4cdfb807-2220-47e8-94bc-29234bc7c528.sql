-- Create page_content table
CREATE TABLE public.page_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.page_content ENABLE ROW LEVEL SECURITY;

-- Create policy to allow everyone to read content
CREATE POLICY "Anyone can read page content" 
ON public.page_content 
FOR SELECT 
USING (true);

-- Insert initial tagline data
INSERT INTO public.page_content (content) 
VALUES ('Final Year B.Tech IT Student | Ex-Intern at Celebal Technologies, Airports Authority of India, Marksman Technologies, Essentia.dev | AI Enthusiast | Full Stack Developer');