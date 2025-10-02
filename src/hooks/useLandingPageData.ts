import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface LandingPageData {
  id: string;
  profile_name: string;
  bio: string;
  about: string;
  services: string;
  featured: string | null;
  created_at: string;
  updated_at: string;
}

export const useLandingPageData = () => {
  return useQuery({
    queryKey: ['landing-page'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('landing_page')
        .select('*')
        .limit(1)
        .single();
      
      if (error) throw error;
      return data as LandingPageData;
    },
  });
};

export const useUpdateLandingPage = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (updates: Partial<LandingPageData>) => {
      const { data: currentData } = await supabase
        .from('landing_page')
        .select('id')
        .limit(1)
        .single();

      if (!currentData) throw new Error('No data found');

      const { data, error } = await supabase
        .from('landing_page')
        .update(updates)
        .eq('id', currentData.id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['landing-page'] });
      toast({
        title: "Success",
        description: "Content updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to update: ${error.message}`,
        variant: "destructive",
      });
    },
  });
};
