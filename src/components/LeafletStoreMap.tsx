'use client'

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { Box, Typography, Chip } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import ScheduleIcon from '@mui/icons-material/Schedule'
import 'leaflet/dist/leaflet.css'

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

interface Store {
  name: string
  address: string
  tag: string
  icon: React.ReactElement
  coordinates: [number, number]
  imagePosition: { x: number; y: number }
}

interface LeafletStoreMapProps {
  stores: Store[]
  selectedStoreIndex?: number
  onStoreSelect?: (index: number) => void
}

// Custom marker icons
const createCustomIcon = (color: string, icon: string) => {
  return L.divIcon({
    className: 'custom-div-icon',
    html: `
      <div style="
        background-color: ${color};
        width: 30px;
        height: 30px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid white;
        box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: white;
        font-weight: bold;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
      ">
        <span style="transform: rotate(45deg);">${icon}</span>
      </div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  })
}

// Component to handle map updates when selected store changes
function MapUpdater({ selectedStoreIndex, stores }: { selectedStoreIndex: number; stores: Store[] }) {
  const map = useMap()
  
  useEffect(() => {
    if (stores[selectedStoreIndex]) {
      const store = stores[selectedStoreIndex]
      map.setView(store.coordinates, 4)
    }
  }, [selectedStoreIndex, stores, map])
  
  return null
}

export default function LeafletStoreMap({ 
  stores, 
  selectedStoreIndex = 0, 
  onStoreSelect 
}: LeafletStoreMapProps) {
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    setMapLoaded(true)
  }, [])

  const getPinColor = (store: Store) => {
    if (store.tag === 'Flagship') return '#ff9800' // Orange
    if (store.tag.includes('Opening')) return '#4caf50' // Green
    return '#9c27b0' // Purple
  }

  const getPinIcon = (store: Store) => {
    if (store.tag === 'Flagship') return '⭐'
    if (store.tag.includes('Opening')) return '🕒'
    return '📍'
  }

  if (!mapLoaded) {
    return (
      <Box sx={{ height: 500, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography>Loading map...</Typography>
      </Box>
    )
  }

  return (
    <Box sx={{ position: 'relative', width: '100%', mb: 4 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 3 }}>
        Our Store Locations
      </Typography>
      
      <Box sx={{ height: 500, borderRadius: 2, overflow: 'hidden', boxShadow: 3 }}>
        <MapContainer
          center={[-25.2744, 133.7751]} // Center of Australia
          zoom={3}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={true}
        >
          {/* Australia-focused tile layer */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {/* Update map view when selected store changes */}
          <MapUpdater selectedStoreIndex={selectedStoreIndex} stores={stores} />
          
          {/* Store markers */}
          {stores.map((store, index) => {
            const isSelected = index === selectedStoreIndex
            const pinColor = getPinColor(store)
            const pinIcon = getPinIcon(store)
            
            return (
              <Marker
                key={store.name}
                position={store.coordinates}
                icon={createCustomIcon(pinColor, pinIcon)}
                eventHandlers={{
                  click: () => onStoreSelect?.(index),
                }}
              >
                <Popup>
                  <Box sx={{ minWidth: 200 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {store.name}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      {store.address}
                    </Typography>
                    <Chip
                      icon={store.icon}
                      label={store.tag}
                      size="small"
                      color={store.tag === 'Flagship' ? 'primary' : 'default'}
                    />
                  </Box>
                </Popup>
              </Marker>
            )
          })}
        </MapContainer>
      </Box>
      
      {/* Legend */}
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ 
            width: 16, 
            height: 16, 
            borderRadius: '50% 50% 50% 0', 
            backgroundColor: '#ff9800', 
            transform: 'rotate(-45deg)' 
          }} />
          <Typography variant="caption">Flagship Store</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ 
            width: 16, 
            height: 16, 
            borderRadius: '50% 50% 50% 0', 
            backgroundColor: '#4caf50', 
            transform: 'rotate(-45deg)' 
          }} />
          <Typography variant="caption">Opening Soon</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ 
            width: 16, 
            height: 16, 
            borderRadius: '50% 50% 50% 0', 
            backgroundColor: '#9c27b0', 
            transform: 'rotate(-45deg)' 
          }} />
          <Typography variant="caption">Coming Soon</Typography>
        </Box>
      </Box>
    </Box>
  )
}
