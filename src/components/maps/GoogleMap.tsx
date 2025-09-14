'use client'

import { useEffect, useRef, useState } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import { Box, Typography, Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import { Store } from '@/app/store/data'

interface GoogleMapProps {
    stores: Store[]
    height?: string
}

export default function GoogleMap({ stores, height = '500px' }: GoogleMapProps) {
    const mapRef = useRef<HTMLDivElement>(null)
    const mapInstanceRef = useRef<google.maps.Map | null>(null)
    const markersRef = useRef<google.maps.Marker[]>([])
    const infoWindowsRef = useRef<google.maps.InfoWindow[]>([])
    const router = useRouter()
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const initMap = async () => {
            if (!mapRef.current) return

            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
                version: 'weekly',
                libraries: ['places']
            })

            try {
                const { Map } = await loader.importLibrary('maps')
                
                // 计算澳大利亚的中心点和边界
                const australiaBounds = {
                    north: -10.0,
                    south: -44.0,
                    east: 154.0,
                    west: 113.0
                }

                const map = new Map(mapRef.current, {
                    center: { lat: -25.0, lng: 133.0 }, // 澳大利亚中心
                    zoom: 4,
                    styles: [
                        {
                            featureType: 'poi',
                            elementType: 'labels',
                            stylers: [{ visibility: 'off' }]
                        }
                    ],
                    restriction: {
                        latLngBounds: australiaBounds,
                        strictBounds: false
                    }
                })

                mapInstanceRef.current = map

                // 创建标记和信息窗口
                stores.forEach((store) => {
                    const marker = new google.maps.Marker({
                        position: store.coordinates,
                        map: map,
                        title: store.name,
                        icon: getMarkerIcon(store.status)
                    })

                    const infoWindow = new google.maps.InfoWindow({
                        content: createInfoWindowContent(store)
                    })

                    // 点击标记显示信息窗口
                    marker.addListener('click', () => {
                        // 关闭其他信息窗口
                        infoWindowsRef.current.forEach(window => window.close())
                        
                        infoWindow.open(map, marker)
                    })

                    // 点击信息窗口中的按钮跳转到详情页
                    google.maps.event.addListener(infoWindow, 'domready', () => {
                        const button = document.getElementById(`store-button-${store.id}`)
                        if (button) {
                            button.addEventListener('click', () => {
                                if (store.status === 'open') {
                                    router.push(`/stores/${store.id}`)
                                } else {
                                    // 对于即将开业或即将到来的门店，显示说明
                                    alert(`${store.name} 正在筹备中，敬请期待！`)
                                }
                            })
                        }
                    })

                    markersRef.current.push(marker)
                    infoWindowsRef.current.push(infoWindow)
                })

                // 自动调整地图视图以包含所有标记
                if (stores.length > 0) {
                    if (stores.length === 1) {
                        // 单个门店时，直接设置中心点和缩放级别
                        map.setCenter(stores[0].coordinates)
                        map.setZoom(15)
                    } else {
                        // 多个门店时，使用边界调整
                        const bounds = new google.maps.LatLngBounds()
                        stores.forEach(store => {
                            bounds.extend(store.coordinates)
                        })
                        map.fitBounds(bounds)
                        
                        // 如果标记太集中，设置最小缩放级别
                        google.maps.event.addListenerOnce(map, 'bounds_changed', () => {
                            if (map.getZoom()! > 8) {
                                map.setZoom(8)
                            }
                        })
                    }
                }

                setIsLoaded(true)
            } catch (error) {
                console.error('Error loading Google Maps:', error)
            }
        }

        initMap()

        return () => {
            // 清理标记和信息窗口
            markersRef.current.forEach(marker => marker.setMap(null))
            infoWindowsRef.current.forEach(window => window.close())
            markersRef.current = []
            infoWindowsRef.current = []
        }
    }, [stores, router])

    const getMarkerIcon = (status: string) => {
        const baseIcon = {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 12,
            fillColor: status === 'open' ? '#4CAF50' : status === 'opening' ? '#FF9800' : '#9E9E9E',
            fillOpacity: 1,
            strokeColor: '#FFFFFF',
            strokeWeight: 2
        }
        return baseIcon
    }

    const createInfoWindowContent = (store: Store) => {
        const buttonText = store.status === 'open' ? 'View Details' : 'Opening Soon'
        const buttonDisabled = store.status !== 'open'
        
        return `
            <div style="padding: 10px; min-width: 200px;">
                <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">${store.name}</h3>
                <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">${store.address}</p>
                
                <button id="store-button-${store.id}" 
                        style="background: ${buttonDisabled ? '#ccc' : '#1976d2'}; 
                               color: white; 
                               border: none; 
                               padding: 8px 16px; 
                               border-radius: 4px; 
                               cursor: ${buttonDisabled ? 'not-allowed' : 'pointer'};
                               font-size: 14px;
                               margin-top: 8px;">
                    ${buttonText}
                </button>
            </div>
        `
    }

    if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
        return (
            <Box sx={{ height, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'grey.100' }}>
                <Typography color="text.secondary">
                    Google Maps API key not configured
                </Typography>
            </Box>
        )
    }

    return (
        <Box sx={{ height, position: 'relative' }}>
            <div ref={mapRef} style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
            {!isLoaded && (
                <Box sx={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    right: 0, 
                    bottom: 0, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    bgcolor: 'grey.100',
                    borderRadius: '8px'
                }}>
                    <Typography color="text.secondary">Loading map...</Typography>
                </Box>
            )}
        </Box>
    )
}
