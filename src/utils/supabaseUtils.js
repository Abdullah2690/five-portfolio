import { supabase } from '@/composables/useSupabase'

export async function addWork(workData) {
  const { data, error } = await supabase
    .from('images')
    .insert([workData])  // ensure it's an array
    .select()
    
  if (error) throw error
  return data
}
