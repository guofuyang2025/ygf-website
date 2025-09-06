export interface Profile {
  id: string
  role: 'admin' | 'membership' | 'visitor'
  email: string
  points: number
  full_name: string | null
  birthday: string | null
}

export interface ProfileUpdateData {
  role?: 'admin' | 'membership' | 'visitor'
  email?: string
  points?: number
  full_name?: string
  birthday?: string
}

export interface Item {
  id: string // uuid
  name: string
  price: number
  description: string
  image_url: string | null
  created_at: string
  updated_at: string
}

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: Profile
        Insert: Omit<Profile, 'id'> & { id?: string }
        Update: Partial<ProfileUpdateData>
      }
      ygf_products: {
        Row: Item
        Insert: Omit<Item, 'id' | 'created_at' | 'updated_at'> & {
          id?: string
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Omit<Item, 'id' | 'created_at' | 'updated_at'>>
      }
    }
  }
}
