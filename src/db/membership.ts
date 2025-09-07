import { createServerSupabaseClient } from '@/lib/supabase-server'
import { Membership } from '@/types/database'

export async function getMemberships(): Promise<Membership[]> {
    const supabase = await createServerSupabaseClient()

    const { data, error } = await supabase
        .from('ygf_membership')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching memberships:', error)
        return []
    }

    return data || []
}

export async function getMembershipById(id: string): Promise<Membership | null> {
    const supabase = await createServerSupabaseClient()

    const { data, error } = await supabase
        .from('ygf_membership')
        .select('*')
        .eq('id', id)
        .single()

    if (error) {
        console.error('Error fetching membership:', error)
        return null
    }

    return data
}

export async function createMembership(membershipData: {
    point?: number
    description?: string
    verify?: boolean
    reviewed?: boolean
}): Promise<Membership | null> {
    const supabase = await createServerSupabaseClient()

    const { data, error } = await supabase
        .from('ygf_membership')
        .insert(membershipData)
        .select()
        .single()

    if (error) {
        console.error('Error creating membership:', error)
        return null
    }

    return data
}

export async function updateMembership(id: string, updates: {
    point?: number
    description?: string
    verify?: boolean
    reviewed?: boolean
}): Promise<Membership | null> {
    const supabase = await createServerSupabaseClient()

    const { data, error } = await supabase
        .from('ygf_membership')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

    if (error) {
        console.error('Error updating membership:', error)
        return null
    }

    return data
}

export async function deleteMembership(id: string): Promise<boolean> {
    const supabase = await createServerSupabaseClient()

    const { error } = await supabase
        .from('ygf_membership')
        .delete()
        .eq('id', id)

    if (error) {
        console.error('Error deleting membership:', error)
        return false
    }

    return true
}

export async function acceptMembership(id: string): Promise<Membership | null> {
    return updateMembership(id, { verify: true, reviewed: true })
}

export async function denyMembership(id: string): Promise<Membership | null> {
    return updateMembership(id, { reviewed: true })
}

export async function getPendingMemberships(): Promise<Membership[]> {
    const supabase = await createServerSupabaseClient()

    const { data, error } = await supabase
        .from('ygf_membership')
        .select('*')
        .eq('reviewed', false)
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching pending memberships:', error)
        return []
    }

    return data || []
}
