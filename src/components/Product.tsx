'use client'

import { Container, Grid, Card, CardContent, Typography } from '@mui/material'
import { useI18n } from '@/contexts/LanguageContent'

export default function Product() {
  const t = useI18n()
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        {t.product.title}
      </Typography>
      <Grid container spacing={2}>
        {[1, 2, 3].map((id) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">{t.product.cardTitle(id)}</Typography>
                <Typography color="text.secondary">{t.product.cardBody}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}


