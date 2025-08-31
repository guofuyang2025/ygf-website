'use client'

import { useAuth } from '@/contexts/AuthContext'

export default function UserProfile() {
  const { user, signOut, session } = useAuth()

  if (!user) return null

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p><strong>Session:</strong> {session?.access_token}</p>
        <p>Session expires at: {session?.expires_at ? new Date(session.expires_at * 1000).toLocaleString() : 'No expires at'}</p>
        <p>Session expires in: {session?.expires_in}</p>
        <p>Session token type: {session?.token_type}</p>
        <p>Session user: {session?.user.id}</p>
        <p>Session user email: {session?.user.email || 'No email'}</p>
        <p>Session user provider: {session?.user.app_metadata?.provider || 'No provider'}</p>
        <p>Session user last sign in at: {session?.user.last_sign_in_at || 'No last sign in at'}</p>
        <p>Session user created at: {session?.user.created_at || 'No created at'}</p>
      <p><strong>User:</strong> {user.id}</p>
      <div className="mb-4">
        <p>Email: {user.email}</p>
        <p>Provider: {user.app_metadata?.provider || 'email'}</p>
        <p>Last Sign In: {new Date(user.last_sign_in_at || '').toLocaleString()}</p>
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
