'use client'

import { Container, Grid, Card, CardContent, Typography } from '@mui/material'
import { useI18n } from '@/lib/contexts/LanguageContent'

export default function Product() {
  const t = useI18n()
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        {t.product.title}
      </Typography>
      <Grid container spacing={2}>
        {[1, 2, 3].map((id) => (
          <Grid component="div" key={id} className='mx-auto w-full'>
            <Card className='mx-auto w-full'>
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


