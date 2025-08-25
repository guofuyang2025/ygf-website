'use client'

import { Container, Typography, Box } from '@mui/material'
import { useI18n } from '@/contexts/LanguageContent'

export default function Introduction() {
  const t = useI18n()
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        {t.introduction.title}
      </Typography>
      <Box>
        <Typography color="text.secondary">{t.introduction.body}</Typography>
      </Box>
    </Container>
  )
}


