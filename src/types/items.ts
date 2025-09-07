export interface ItemData {
  name: string
  description: string
  price: number
  image_url?: string
}

export interface ItemWithData {
  id: string
  name: string
  description: string
  price: number
  image_url: string | null
  created_at: string
  updated_at: string
}

export interface CreateItemData {
  name: string
  description: string
  price: number
  image_url?: string
}

export interface UpdateItemData {
  name?: string
  description?: string
  price?: number
  image_url?: string
}
