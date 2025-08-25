'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const { signInWithGoogle, signInWithEmail } = useAuth()

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    try {
      await signInWithGoogle()
    } catch (error) {
      setMessage('Google sign in failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    try {
      await signInWithEmail(email)
      setMessage('Check your email for the magic link!')
      setEmail('')
    } catch (error) {
      setMessage('Email sign in failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
      
      {/* Google Sign In */}
      <button
        onClick={handleGoogleSignIn}
        disabled={isLoading}
        className="w-full mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {isLoading ? 'Signing in...' : 'Sign in with Google'}
      </button>

      <div className="text-center mb-4">
        <span className="text-gray-500">or</span>
      </div>

      {/* Email Sign In */}
      <form onSubmit={handleEmailSignIn}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-3 py-2 border border-gray-300 rounded mb-4"
          required
        />
        <button
          type="submit"
          disabled={isLoading || !email}
          className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
        >
          {isLoading ? 'Sending...' : 'Send Magic Link'}
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-sm text-gray-600">
          {message}
        </p>
      )}
    </div>
  )
}
