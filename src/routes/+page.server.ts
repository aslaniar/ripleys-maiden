import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

type Barber = {
  id: number;
  name: string;
};

export const load: PageServerLoad = async () => {
  const { data, error } = await supabase.from('barbers').select<'barber', Barber>();

  if (error) {
    console.error('Error loading barbers:', error.message);
    return { barbers: [] };
  }

  return {
    barbers: data ?? [],
  };
};