'use client'

import { useAuth } from '@/contexts/AuthContext'

export default function UserProfile() {
  const { user, signOut } = useAuth()

  if (!user) return null

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      
      <div className="mb-4">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Provider:</strong> {user.app_metadata?.provider || 'email'}</p>
        <p><strong>Last Sign In:</strong> {new Date(user.last_sign_in_at || '').toLocaleString()}</p>
      </div>

      <button
        onClick={signOut}
        className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Sign Out
      </button>
    </div>
  )
}
