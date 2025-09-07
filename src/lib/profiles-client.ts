import { createClient } from './supabase'
import { Profile } from '@/types/database'

// Client-side version of getUserProfile
export async function getUserProfileClient(userId: string): Promise<Profile | null> {
    const supabase = createClient()

    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

    if (error) {
        console.error('Error fetching profile:', error)
        // Create default profile if it doesn't exist
        const defaultProfile = {
            id: userId,
            role: 'visitor' as const,
            email: '', // This will be filled from auth user
            points: 0,
            full_name: null,
            birthday: null
        }

        const { data: newProfile, error: createError } = await supabase
            .from('profiles')
            .insert(defaultProfile)
            .select()
            .single()

        if (createError) {
            console.error('Failed to create profile:', createError)
            return null
        }

        return newProfile
    }

    return data
}
