'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Box, Typography, Chip, Stack } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import ScheduleIcon from '@mui/icons-material/Schedule'
import LocationOnIcon from '@mui/icons-material/LocationOn'

// Fix for default markers in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

// Custom icons for different store types
const createCustomIcon = (color: string) => {
  return L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="
      background-color: ${color};
      width: 30px;
      height: 30px;
      border-radius: 50% 50% 50% 0;
      position: relative;
      transform: rotate(-45deg);
      border: 2px solid white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    ">
      <div style="
        color: white;
        transform: rotate(45deg);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        font-size: 16px;
        font-weight: bold;
      ">📍</div>
    </div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  })
}

interface Store {
  name: string
  address: string
  tag: string
  icon: React.ReactElement
  coordinates: [number, number] // [lat, lng]
}

interface StoreMapProps {
  stores: Store[]
  selectedStoreIndex?: number
  onStoreSelect?: (index: number) => void
}

export default function StoreMap({ stores, selectedStoreIndex = 0, onStoreSelect }: StoreMapProps) {
  const selectedStore = stores[selectedStoreIndex]

  // Default center (Adelaide CBD)
  const defaultCenter: [number, number] = [-34.9285, 138.6007]
  
  // Calculate map center based on all store locations
  const mapCenter: [number, number] = selectedStore ? selectedStore.coordinates : defaultCenter

  return (
    <Box sx={{ height: 400, width: '100%', position: 'relative', borderRadius: 1, overflow: 'hidden' }}>
      <MapContainer
        center={mapCenter}
        zoom={selectedStore ? 15 : 10}
        style={{ height: '100%', width: '100%' }}
        key={`${selectedStoreIndex}-${mapCenter[0]}-${mapCenter[1]}`} // Force re-render when selection changes
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {stores.map((store, index) => {
          const isSelected = index === selectedStoreIndex
          const isFlagship = store.tag === 'Flagship'
          const isOpening = store.tag.includes('Opening')
          
          let iconColor = '#1976d2' // Default blue
          if (isFlagship) iconColor = '#ff9800' // Orange for flagship
          else if (isOpening) iconColor = '#4caf50' // Green for opening soon
          else iconColor = '#9c27b0' // Purple for coming soon

          return (
            <Marker
              key={store.name}
              position={store.coordinates}
              icon={createCustomIcon(iconColor)}
              eventHandlers={{
                click: () => {
                  if (onStoreSelect) {
                    onStoreSelect(index)
                  }
                },
              }}
            >
              <Popup>
                <Box sx={{ minWidth: 200 }}>
                  <Typography variant="h6" gutterBottom>
                    {store.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {store.address}
                  </Typography>
                  
                  <Stack direction="row" spacing={1} mt={1}>
                    <Chip
                      icon={store.icon}
                      label={store.tag}
                      size="small"
                      color={isFlagship ? 'primary' : 'default'}
                    />
                  </Stack>
                  
                  <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
                    <Chip label="Modern dine-in" variant="outlined" size="small" />
                    <Chip label="Takeaway" variant="outlined" size="small" />
                    <Chip label="Student deals" variant="outlined" size="small" />
                  </Stack>
                </Box>
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </Box>
  )
}

