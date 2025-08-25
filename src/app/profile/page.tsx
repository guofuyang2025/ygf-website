'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import UserProfile from '@/components/auth/UserProfile'
import { Container, Box, Typography } from '@mui/material'
import { useI18n } from '@/contexts/LanguageContent'

export default function ProfilePage() {
  const t = useI18n()
  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Box sx={{ py: 6 }}>
          <Typography variant="h4" gutterBottom>{t.profilePage.title}</Typography>
          <UserProfile />
        </Box>
      </Container>
      <Footer />
    </>
  )
}
