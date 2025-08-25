'use client'

import LoginForm from '@/components/auth/LoginForm'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Container, Box, Typography } from '@mui/material'
import { useI18n } from '@/contexts/LanguageContent'

export default function LoginPage() {
  const t = useI18n()
  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Box sx={{ py: 6 }}>
          <Typography variant="h4" gutterBottom>{t.loginPage.title}</Typography>
          <LoginForm />
        </Box>
      </Container>
      <Footer />
    </>
  )
}


