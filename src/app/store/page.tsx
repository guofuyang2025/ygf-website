'use client'

import Header from '@/components/layout/public-header'
import Footer from '@/components/layout/Footer'
import { useI18n } from '@/lib/contexts/LanguageContent'
import PageBanner from '@/components/layout/PageBanner'
import { useState } from 'react'
import {
    Box,
    Typography,
    List,
    ListItemButton,
    ListItemText,
    Chip,
    Stack,
    Card,
    CardContent
} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import StarIcon from '@mui/icons-material/Star'
import ScheduleIcon from '@mui/icons-material/Schedule'

export default function StorePage() {
    const t = useI18n()
    const stores = [
        {
            name: 'Adelaide CBD Chinatown – Flagship',
            address: 'Adelaide Chinatown',
            tag: 'Flagship',
            icon: <StarIcon fontSize="small" />,
        },
        {
            name: 'Marion Westfield (Opening Nov 2025)',
            address: 'Westfield Marion, Adelaide',
            tag: 'Opening Nov 2025',
            icon: <ScheduleIcon fontSize="small" />,
        },
        {
            name: 'Brisbane CBD (Opening late 2025)',
            address: 'Brisbane CBD',
            tag: 'Opening late 2025',
            icon: <ScheduleIcon fontSize="small" />,
        },
        {
            name: 'More locations coming soon',
            address: 'Australia',
            tag: 'Coming soon',
            icon: <ScheduleIcon fontSize="small" />,
        },
    ]

    const [selectedIndex, setSelectedIndex] = useState(0)
    const selected = stores[selectedIndex]
    const backgroundImage = [
        {
            src: "/about/title.png",
            alt: "Background Image"
        },
    ]
    return (
        <>
            <Header />
            <main className="min-h-screen bg-background">
                <PageBanner title={t.storePage.hero.title} subtitle={t.storePage.hero.subtitle} backgroundImage={backgroundImage[0]} />

                <div className="container mx-auto px-4 py-10">
                    <Box sx={{ display: 'grid', gap: 4, gridTemplateColumns: '1fr' }}>
                        <Box>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        Find a Store Near You
                                    </Typography>

                                    <List>
                                        {stores.map((s, idx) => (
                                            <ListItemButton
                                                key={s.name}
                                                selected={idx === selectedIndex}
                                                onClick={() => setSelectedIndex(idx)}
                                                sx={{ borderRadius: 1, mb: 1 }}
                                            >
                                                <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
                                                <ListItemText
                                                    primary={s.name}
                                                    secondary={s.address}
                                                />
                                                {s.tag && (
                                                    <Chip
                                                        icon={s.icon}
                                                        label={s.tag}
                                                        size="small"
                                                        color={idx === 0 ? 'primary' : 'default'}
                                                        sx={{ ml: 1 }}
                                                    />
                                                )}
                                            </ListItemButton>
                                        ))}
                                    </List>

                                    <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
                                        <Chip label="Modern dine-in experience" variant="outlined" />
                                        <Chip label="Convenient takeaway options" variant="outlined" />
                                        <Chip label="Student-friendly promotions" variant="outlined" />
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Box>

                        <Box>
                            <Card sx={{ height: '100%' }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {selected.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        {selected.address}
                                    </Typography>
                                    <Box sx={{ height: 400, position: 'relative', borderRadius: 1, overflow: 'hidden' }}>
                                        <iframe
                                            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}&q=${encodeURIComponent(selected.address)}`}
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Box>
                </div>
            </main>
            <Footer />  
        </>
    )
}