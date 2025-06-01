// src/utils/fileUploader.js
import { supabase } from '@/composables/useSupabase' // ✅ correct path

/**
 * Uploads an image to the Supabase Storage bucket.
 * 
 * @param {File} file - The image file to upload
 * @param {string} slug - A unique identifier for the work (used in the path)
 * @param {string} type - 'thumbnail' or 'featured' (used in the path)
 * @returns {Promise<string>} - Public URL of the uploaded image
 */
export async function uploadWorkImage(file, slug, type) {
  if (!file || !slug || !type) {
    throw new Error('Missing required parameters for image upload')
  }

  const fileExt = file.name.split('.').pop()
  const fileName = `${type}.${fileExt}`
  const filePath = `works/${slug}/${fileName}`

  const { error: uploadError } = await supabase.storage
    .from('content-bucket') // 🛑 Replace this with your actual bucket name
    .upload(filePath, file, {
      upsert: true,
      contentType: file.type
    })

  if (uploadError) {
    throw uploadError
  }

  // Get public URL
  const { data } = supabase.storage
    .from('content-bucket') // 🛑 Again, same bucket
    .getPublicUrl(filePath)

  return data.publicUrl
}
