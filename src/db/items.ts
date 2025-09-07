import { createServerSupabaseClient } from '@/lib/supabase-server'
import { Item } from '@/types/database'
import { ItemData, ItemWithData, CreateItemData, UpdateItemData } from '@/types/items'

export async function getItems(): Promise<Item[]> {
  const supabase = await createServerSupabaseClient()

  const { data, error } = await supabase
    .from('ygf_products')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching items:', error)
    return []
  }

  return data || []
}

export async function getItemById(id: string): Promise<Item | null> {
  const supabase = await createServerSupabaseClient()

  const { data, error } = await supabase
    .from('ygf_products')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching item:', error)
    return null
  }

  return data
}

export async function createItem(itemData: CreateItemData): Promise<Item | null> {
  const supabase = await createServerSupabaseClient()

  const { data, error } = await supabase
    .from('ygf_products')
    .insert(itemData)
    .select()
    .single()

  if (error) {
    console.error('Error creating item:', error)
    return null
  }

  return data
}

export async function updateItem(id: string, updates: UpdateItemData): Promise<Item | null> {
  const supabase = await createServerSupabaseClient()

  const { data, error } = await supabase
    .from('ygf_products')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating item:', error)
    return null
  }

  return data
}

export async function deleteItem(id: string): Promise<boolean> {
  const supabase = await createServerSupabaseClient()

  const { error } = await supabase
    .from('ygf_products')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting item:', error)
    return false
  }

  return true
}

export async function searchItems(query: string): Promise<Item[]> {
  const supabase = await createServerSupabaseClient()

  const { data, error } = await supabase
    .from('ygf_products')
    .select('*')
    .or(`name.ilike.%${query}%,description.ilike.%${query}%`)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error searching items:', error)
    return []
  }

  return data || []
}

// Helper function to get items with parsed data (now just returns items directly since data is no longer JSONB)
export async function getItemsWithParsedData(): Promise<ItemWithData[]> {
  const items = await getItems()

  return items.map(item => ({
    id: item.id,
    name: item.name,
    description: item.description,
    price: item.price,
    image_url: item.image_url,
    created_at: item.created_at,
    updated_at: item.updated_at
  }))
}

// Helper function to get item by ID with parsed data (now just returns item directly since data is no longer JSONB)
export async function getItemByIdWithParsedData(id: string): Promise<ItemWithData | null> {
  const item = await getItemById(id)

  if (!item) return null

  return {
    id: item.id,
    name: item.name,
    description: item.description,
    price: item.price,
    image_url: item.image_url,
    created_at: item.created_at,
    updated_at: item.updated_at
  }
}
