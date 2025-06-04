import { supabase } from '@/composables/useSupabase'

export async function getSkills(limit = null) {
  let query = supabase
    .from('skills')
    .select('*')
    .order('created_at', { ascending: false })

  if (limit) query = query.limit(limit)

  const { data, error } = await query
  
  if (error) throw error
  return data
}

export async function getSkillBySlug(slug) {
  const { data, error } = await supabase
    .from('skills')
    .select('*')
    .eq('slug', slug)
    .single()
  
  if (error) throw error
  return data
}

export async function addSkill(skillData) {
  const { data, error } = await supabase
    .from('skills')
    .insert(skillData)
    .select()
    .single()
  
  if (error) throw error
  return data
}