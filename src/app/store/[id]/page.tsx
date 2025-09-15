'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Header from '@/components/layout/public-header'
import Footer from '@/components/layout/Footer'
import { useI18n } from '@/lib/contexts/LanguageContent'
import PageBanner from '@/components/layout/PageBanner'
import GoogleMap from '@/components/maps/GoogleMap'
import {
    Box,
    Typography,
    Card,
    CardContent,
    Chip,
    Stack,
    Button,
    Divider,
    Paper
} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useRouter } from 'next/navigation'
import { getStoreById, Store, getStoreIcon } from '../data'

export default function StoreDetailPage() {
    const params = useParams()
    const router = useRouter()
    const t = useI18n()
    const [store, setStore] = useState<Store | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const storeId = params.id as string
        const foundStore = getStoreById(storeId)
        
        if (foundStore) {
            setStore(foundStore)
        } else {
            // 如果找不到门店，重定向到门店列表页
            router.push('/store')
        }
        setLoading(false)
    }, [params.id, router])

    if (loading) {
        return (
            <>
                <Header />
                <main className="min-h-screen bg-background">
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
                        <Typography>Loading...</Typography>
                    </Box>
                </main>
                <Footer />
            </>
        )
    }

    if (!store) {
        return (
            <>
                <Header />
                <main className="min-h-screen bg-background">
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
                        <Typography>Store not found</Typography>
                    </Box>
                </main>
                <Footer />
            </>
        )
    }

    const backgroundImage = {
        src: "/about/title.png",
        alt: "Background Image"
    }

    return (
        <>
            <Header />
            <main className="min-h-screen bg-background">
                <PageBanner 
                    title={store.name} 
                    subtitle={store.address} 
                    backgroundImage={backgroundImage} 
                />

                <div className="container mx-auto px-4 lg:px-8 xl:px-16 py-10">
                    <Button
                        startIcon={<ArrowBackIcon />}
                        onClick={() => router.back()}
                        sx={{ mb: 3 }}
                    >
                        Back to Store List
                    </Button>

                    <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}>
                        {/* 左侧信息 */}
                        <Box sx={{ flex: 1 }}>
                            <Stack spacing={3}>
                                {/* 基本信息 */}
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" gutterBottom>
                                            {store.name}
                                        </Typography>
                                        
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                            <LocationOnIcon sx={{ mr: 1, color: 'text.secondary' }} />
                                            <Typography variant="body1" color="text.secondary">
                                                {store.address}
                                            </Typography>
                                        </Box>

                                        <Box sx={{ mb: 2 }}>
                                            <Chip
                                                icon={React.createElement(getStoreIcon(store.iconType), { fontSize: "small" })}
                                                label={store.tag}
                                                color={store.status === 'open' ? 'primary' : 'default'}
                                                sx={{ mb: 1 }}
                                            />
                                        </Box>

                                        {store.description && (
                                            <Typography variant="body2" sx={{ mb: 2 }}>
                                                {store.description}
                                            </Typography>
                                        )}

                                        {store.phone && (
                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                                <PhoneIcon sx={{ mr: 1, color: 'text.secondary' }} />
                                                <Typography variant="body2">
                                                    {store.phone}
                                                </Typography>
                                            </Box>
                                        )}

                                        {store.hours && (
                                            <Box sx={{ mt: 2 }}>
                                                <Typography variant="h6" gutterBottom>
                                                    Opening Hours
                                                </Typography>
                                                {store.hours.map((hour, index) => (
                                                    <Typography key={index} variant="body2" sx={{ mb: 0.5 }}>
                                                        {hour}
                                                    </Typography>
                                                ))}
                                            </Box>
                                        )}
                                    </CardContent>
                                </Card>

                                {/* 特色功能 */}
                                {store.features && (
                                    <Card>
                                        <CardContent>
                                            <Typography variant="h6" gutterBottom>
                                                Store Features
                                            </Typography>
                                            <Stack direction="row" spacing={1} flexWrap="wrap">
                                                {store.features.map((feature, index) => (
                                                    <Chip
                                                        key={index}
                                                        label={feature}
                                                        variant="outlined"
                                                        size="small"
                                                    />
                                                ))}
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                )}
                            </Stack>
                        </Box>

                        {/* 右侧地图 */}
                        <Box sx={{ flex: 1 }}>
                            <Card sx={{ height: '100%' }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Location
                                    </Typography>
                                    <GoogleMap 
                                        stores={[store]} 
                                        height="500px"
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
