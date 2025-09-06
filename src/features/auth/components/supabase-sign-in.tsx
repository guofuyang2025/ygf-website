'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createClient } from '@/lib/supabase'
import { useState } from 'react'
import { toast } from 'sonner'
import { GoogleIcon, FacebookIcon, XIcon } from '@/components/icons/social-providers'

export function SupabaseSignIn() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [facebookLoading, setFacebookLoading] = useState(false)
  const [xLoading, setXLoading] = useState(false)
  const supabase = createClient()

  const handleMagicLinkSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      toast.error(error.message)
    } else {
      toast.success('Check your email for the magic link!')
    }

    setLoading(false)
  }

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true)

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      toast.error(error.message)
      setGoogleLoading(false)
    }
  }

  const handleFacebookSignIn = async () => {
    setFacebookLoading(true)
    // TODO: Implement Facebook OAuth when configured
    toast.info('Facebook sign-in coming soon!')
    setFacebookLoading(false)
  }

  const handleXSignIn = async () => {
    setXLoading(true)
    // TODO: Implement X/Twitter OAuth when configured
    toast.info('X sign-in coming soon!')
    setXLoading(false)
  }

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <p className="text-muted-foreground">Enter your email to receive a magic link</p>
      </div>

      <form onSubmit={handleMagicLinkSignIn} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Sending magic link...' : 'Send Magic Link'}
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>

      <div className="space-y-3">
        <Button
          variant="outline"
          type="button"
          className="w-full"
          onClick={handleGoogleSignIn}
          disabled={googleLoading}
        >
          {googleLoading ? (
            'Signing in...'
          ) : (
            <>
              <GoogleIcon />
              <span className="ml-2">Sign in with Google</span>
            </>
          )}
        </Button>

        <Button
          variant="outline"
          type="button"
          className="w-full"
          onClick={handleFacebookSignIn}
          disabled={facebookLoading}
        >
          {facebookLoading ? (
            'Signing in...'
          ) : (
            <>
              <FacebookIcon />
              <span className="ml-2">Sign in with Facebook</span>
            </>
          )}
        </Button>

        <Button
          variant="outline"
          type="button"
          className="w-full"
          onClick={handleXSignIn}
          disabled={xLoading}
        >
          {xLoading ? (
            'Signing in...'
          ) : (
            <>
              <XIcon />
              <span className="ml-2">Sign in with X</span>
            </>
          )}
        </Button>
      </div>

      {/* <p className="text-center text-sm text-muted-foreground">
        Don't have an account?{' '}
        <a href="/auth/sign-up" className="underline underline-offset-4 hover:text-primary">
          Sign up
        </a>
      </p> */}
    </div>
  )
}
