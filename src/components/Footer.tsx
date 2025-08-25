'use client'

import { Box, Container, Typography } from '@mui/material'
import { useI18n } from '@/contexts/LanguageContent'

export default function Footer() {
  const t = useI18n()
  return (
    <Box component="footer" sx={{ py: 4, bgcolor: 'grey.100', mt: 8 }}>
      <Container maxWidth="lg">
        <Typography color="text.secondary" align="center">{t.footer.text}</Typography>
      </Container>
    </Box>
  )
}


