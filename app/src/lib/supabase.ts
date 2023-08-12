import { createClient } from '@supabase/supabase-js'

export const supabase = createClient("https://tkfyepmvhyrgyizqferr.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrZnllcG12aHlyZ3lpenFmZXJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE4NzA4ODMsImV4cCI6MjAwNzQ0Njg4M30.mcz12CAeb8iR3UygVXRiySs1Qch0Ipgq2gz_64uOi-0")



export async function signout() {
    const { error } = await supabase.auth.signOut()
}
