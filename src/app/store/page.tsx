'use client'

import Header from '@/components/layout/public-header'
import Footer from '@/components/layout/Footer'
import { useI18n } from '@/lib/contexts/LanguageContent'
import PageBanner from '@/components/layout/PageBanner'
import StoreMap from '@/components/StoreMap'
import LeafletStoreMap from '@/components/LeafletStoreMap'
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
            coordinates: [-34.9285, 138.6007] as [number, number], // Adelaide CBD
            imagePosition: { x: 45, y: 60 }, // Position on image (percentage)
        },
        {
            name: 'Marion Westfield (Opening Nov 2025)',
            address: 'Westfield Marion, Adelaide',
            tag: 'Opening Nov 2025',
            icon: <ScheduleIcon fontSize="small" />,
            coordinates: [-35.0189, 138.5708] as [number, number], // Marion area
            imagePosition: { x: 50, y: 65 }, // Position on image (percentage)
        },
        {
            name: 'Brisbane CBD (Opening late 2025)',
            address: 'Brisbane CBD',
            tag: 'Opening late 2025',
            icon: <ScheduleIcon fontSize="small" />,
            coordinates: [-27.4698, 153.0251] as [number, number], // Brisbane CBD
            imagePosition: { x: 75, y: 25 }, // Position on image (percentage)
        },
        {
            name: 'More locations coming soon',
            address: 'Australia',
            tag: 'Coming soon',
            icon: <ScheduleIcon fontSize="small" />,
            coordinates: [-25.2744, 133.7751] as [number, number], // Center of Australia
            imagePosition: { x: 50, y: 50 }, // Position on image (percentage)
        },
    ]

    const [selectedIndex, setSelectedIndex] = useState(0)
    const selected = stores[selectedIndex]
    return (
        <>
            <Header />
            <main className="min-h-screen bg-background">
                <PageBanner title={t.storePage.hero.title} subtitle={t.storePage.hero.subtitle} />

                <div className="container mx-auto px-4 py-10">
                    {/* Leaflet Map Section */}
                    <LeafletStoreMap 
                        stores={stores}
                        selectedStoreIndex={selectedIndex}
                        onStoreSelect={setSelectedIndex}
                    />
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
                                    <StoreMap 
                                        stores={stores}
                                        selectedStoreIndex={selectedIndex}
                                        onStoreSelect={setSelectedIndex}
                                    />
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