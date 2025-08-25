'use client'

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { AuthProvider } from '@/contexts/AuthContext'

export default function AppProviders({ children }: { children: React.ReactNode }) {
  const theme = createTheme({})
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}


