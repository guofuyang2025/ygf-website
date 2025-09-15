'use client'

import React from 'react'
import Header from '@/components/layout/public-header'
import Footer from '@/components/layout/Footer'
import { useI18n } from '@/lib/contexts/LanguageContent'
import PageBanner from '@/components/layout/PageBanner'
import GoogleMap from '@/components/maps/GoogleMap'
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
    CardContent,
    Button,
    TextField,
    InputAdornment
} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import SearchIcon from '@mui/icons-material/Search'
import { useRouter } from 'next/navigation'
import { stores, getStoreIcon } from './data'

export default function StorePage() {
    const t = useI18n()
    const router = useRouter()

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [searchQuery, setSearchQuery] = useState('')
    
    // Filter stores based on search query
    const filteredStores = stores.filter(store => 
        store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.address.toLowerCase().includes(searchQuery.toLowerCase())
    )
    
    const selected = filteredStores[selectedIndex] || filteredStores[0]
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
                <PageBanner title={t.storePage.hero.title} backgroundImage={backgroundImage[0]} />

                <div className="container mx-auto px-16 lg:px-16 xl:px-16 py-10">
                    {/* Search Bar */}
                    <Box sx={{ mb: 4 }}>
                        <TextField
                            fullWidth
                            placeholder="Search stores by name or location..."
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value)
                                setSelectedIndex(0) // Reset selection when searching
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon sx={{ color: '#1976d2', fontSize: '24px' }} />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ 
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 3,
                                    backgroundColor: '#ffffff',
                                    border: '3px solid',
                                    borderColor: '#e0e0e0',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        borderColor: '#1976d2',
                                        boxShadow: '0 4px 12px rgba(25,118,210,0.2)',
                                        transform: 'translateY(-1px)',
                                    },
                                    '&.Mui-focused': {
                                        borderColor: '#1976d2',
                                        backgroundColor: '#ffffff',
                                        boxShadow: '0 4px 16px rgba(25,118,210,0.3)',
                                        transform: 'translateY(-1px)',
                                    },
                                    '& .MuiOutlinedInput-input': {
                                        padding: '16px 18px',
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        color: '#333333',
                                    }
                                },
                                '& .MuiInputBase-input::placeholder': {
                                    color: '#666666',
                                    opacity: 1,
                                    fontSize: '18px',
                                    fontWeight: 400,
                                }
                            }}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}>
                        {/* 左侧门店列表 */}
                        <Box sx={{ flex: { xs: 1, md: '0 0 400px' } }}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        Find a Store Near You
                                        {searchQuery && (
                                            <Typography variant="body2" color="text.secondary" component="span">
                                                {' '}({filteredStores.length} result{filteredStores.length !== 1 ? 's' : ''})
                                            </Typography>
                                        )}
                                    </Typography>

                                    <List>
                                        {filteredStores.map((s, idx) => (
                                            <ListItemButton
                                                key={s.id}
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
                                                        icon={React.createElement(getStoreIcon(s.iconType), { fontSize: "small" })}
                                                        label={s.tag}
                                                        size="small"
                                                        color={s.status === 'open' ? 'primary' : 'default'}
                                                        sx={{ ml: 1 }}
                                                    />
                                                )}
                                            </ListItemButton>
                                        ))}
                                    </List>

                                    {/* 查看详情按钮 */}
                                    {selected && (
                                        <Box sx={{ mt: 3 }}>
                                            <Button
                                                variant="contained"
                                                fullWidth
                                                onClick={() => router.push(`/store/${selected.id}`)}
                                                disabled={selected.status !== 'open'}
                                            >
                                                {selected.status === 'open' ? 'View Store Details' : 'Coming Soon'}
                                            </Button>
                                        </Box>
                                    )}

                                    {/* No results message */}
                                    {filteredStores.length === 0 && (
                                        <Box sx={{ mt: 3, textAlign: 'center' }}>
                                            <Typography variant="body2" color="text.secondary">
                                                No stores found matching "{searchQuery}"
                                            </Typography>
                                        </Box>
                                    )}
                                </CardContent>
                            </Card>
                        </Box>

                        {/* 右侧地图 */}
                        <Box sx={{ flex: 1 }}>
                            <Card sx={{ height: '100%' }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Store Locations
                                    </Typography>
                                    <GoogleMap stores={filteredStores} height="600px" />
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