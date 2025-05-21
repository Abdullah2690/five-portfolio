export function handleSupabaseError(error) {
  console.error('Supabase Error:', error.message)
  // You can add more sophisticated handling here
  return {
    error: true,
    message: error.message || 'Failed to fetch data'
  }
}

export function displayErrorToUser(message) {
  // You could use a toast notification system here
  alert(`Error: ${message}`) // Temporary - replace with proper UI
}