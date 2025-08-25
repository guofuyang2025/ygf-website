'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Container, Box, Typography } from '@mui/material'
import { useI18n } from '@/contexts/LanguageContent'

export default function AboutPage() {
  const t = useI18n()
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Box sx={{ py: 6 }}>
          <Typography variant="h4" gutterBottom>{t.aboutPage.title}</Typography>
          <Typography color="text.secondary">{t.aboutPage.body}</Typography>
        </Box>
      </Container>
      <Footer />
    </>
  )
}



