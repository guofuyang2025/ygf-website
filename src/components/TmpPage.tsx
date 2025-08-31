'use client'

import { useState, useEffect } from 'react'
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Chip, 
  CircularProgress,
  Alert,
  Button
} from '@mui/material'
import { Refresh as RefreshIcon } from '@mui/icons-material'
import { supabase } from '@/lib/supabase'

interface Profile {
  id: string
  role: 'expert' | 'visitor' | 'enterprise'
  email: string
}

export default function TmpPage() {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchProfiles = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('email')

      if (error) {
        throw error
      }

      setProfiles(data || [])
    } catch (err) {
      console.error('Error fetching profiles:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch profiles')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProfiles()
  }, [])

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'expert':
        return 'success'
      case 'enterprise':
        return 'primary'
      case 'visitor':
        return 'default'
      default:
        return 'default'
    }
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <Typography variant="h5" component="h2">
          Supabase Database Test - Profiles Table
        </Typography>
        <Button
          variant="outlined"
          startIcon={<RefreshIcon />}
          onClick={fetchProfiles}
          disabled={loading}
        >
          Refresh
        </Button>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress />
        </Box>
      ) : profiles.length === 0 ? (
        <Alert severity="info">
          No profiles found in the database. The table might be empty or there might be an issue with the connection.
        </Alert>
      ) : (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Found {profiles.length} profile(s)
          </Typography>
          
          <Grid container spacing={2}>
            {profiles.map((profile) => (
                <Card>
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {profile.email}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        Role:
                      </Typography>
                      <Chip 
                        label={profile.role} 
                        color={getRoleColor(profile.role)}
                        size="small"
                      />
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                      ID: {profile.id}
                    </Typography>
                  </CardContent>
                </Card>
            ))}
          </Grid>
        </>
      )}
    </Box>
  )
}
