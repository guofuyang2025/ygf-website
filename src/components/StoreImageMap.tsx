'use client'

import { Box, Typography, Chip, Stack, Tooltip } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import ScheduleIcon from '@mui/icons-material/Schedule'
import LocationOnIcon from '@mui/icons-material/LocationOn'

interface Store {
  name: string
  address: string
  tag: string
  icon: React.ReactElement
  coordinates: [number, number]
  imagePosition: { x: number; y: number } // Percentage position on image
}

interface StoreImageMapProps {
  stores: Store[]
  selectedStoreIndex?: number
  onStoreSelect?: (index: number) => void
  imageSrc?: string
}

export default function StoreImageMap({ 
  stores, 
  selectedStoreIndex = 0, 
  onStoreSelect,
  imageSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Map_of_Australia_with_states.svg/1200px-Map_of_Australia_with_states.svg.png' // Australia map
}: StoreImageMapProps) {
  
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

  return (
    <Box sx={{ position: 'relative', width: '100%', mb: 4 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 3 }}>
        Our Store Locations
      </Typography>
      
      <Box sx={{ position: 'relative', width: '100%', maxWidth: '100%', mx: 'auto' }}>
        {/* Background Image - Australia Map */}
        <Box
          component="img"
          src={imageSrc}
          alt="Australia map with store locations"
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: '600px',
            objectFit: 'contain',
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: '#f5f5f5',
          }}
        />
        
        {/* Store Pins Overlay */}
        {stores.map((store, index) => {
          const isSelected = index === selectedStoreIndex
          const pinColor = getPinColor(store)
          const pinIcon = getPinIcon(store)
          
          return (
            <Tooltip
              key={store.name}
              title={
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                    {store.name}
                  </Typography>
                  <Typography variant="caption" display="block">
                    {store.address}
                  </Typography>
                  <Chip
                    icon={store.icon}
                    label={store.tag}
                    size="small"
                    color={store.tag === 'Flagship' ? 'primary' : 'default'}
                    sx={{ mt: 1 }}
                  />
                </Box>
              }
              placement="top"
              arrow
            >
              <Box
                onClick={() => onStoreSelect?.(index)}
                sx={{
                  position: 'absolute',
                  left: `${store.imagePosition.x}%`,
                  top: `${store.imagePosition.y}%`,
                  transform: 'translate(-50%, -100%)',
                  cursor: 'pointer',
                  zIndex: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translate(-50%, -100%) scale(1.2)',
                    zIndex: 3,
                  },
                }}
              >
                {/* Pin */}
                <Box
                  sx={{
                    position: 'relative',
                    width: 40,
                    height: 40,
                    borderRadius: '50% 50% 50% 0',
                    backgroundColor: pinColor,
                    transform: 'rotate(-45deg)',
                    border: `3px solid ${isSelected ? '#fff' : '#f5f5f5'}`,
                    boxShadow: isSelected 
                      ? '0 0 20px rgba(0,0,0,0.5), 0 0 0 3px rgba(25, 118, 210, 0.3)'
                      : '0 4px 8px rgba(0,0,0,0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 0 25px rgba(0,0,0,0.6), 0 0 0 4px rgba(25, 118, 210, 0.4)',
                    },
                  }}
                >
                  {/* Pin Icon */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%) rotate(45deg)',
                      fontSize: '18px',
                      color: 'white',
                      fontWeight: 'bold',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                    }}
                  >
                    {pinIcon}
                  </Box>
                </Box>
                
                {/* Pulse Animation for Selected Store */}
                {isSelected && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      backgroundColor: pinColor,
                      opacity: 0.3,
                      animation: 'pulse 2s infinite',
                      '@keyframes pulse': {
                        '0%': {
                          transform: 'translate(-50%, -50%) scale(0.8)',
                          opacity: 0.3,
                        },
                        '50%': {
                          transform: 'translate(-50%, -50%) scale(1.2)',
                          opacity: 0.1,
                        },
                        '100%': {
                          transform: 'translate(-50%, -50%) scale(1.5)',
                          opacity: 0,
                        },
                      },
                    }}
                  />
                )}
              </Box>
            </Tooltip>
          )
        })}
      </Box>
      
      {/* Legend */}
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Box sx={{ width: 16, height: 16, borderRadius: '50% 50% 50% 0', backgroundColor: '#ff9800', transform: 'rotate(-45deg)' }} />
          <Typography variant="caption">Flagship Store</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <Box sx={{ width: 16, height: 16, borderRadius: '50% 50% 50% 0', backgroundColor: '#4caf50', transform: 'rotate(-45deg)' }} />
          <Typography variant="caption">Opening Soon</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <Box sx={{ width: 16, height: 16, borderRadius: '50% 50% 50% 0', backgroundColor: '#9c27b0', transform: 'rotate(-45deg)' }} />
          <Typography variant="caption">Coming Soon</Typography>
        </Stack>
      </Box>
    </Box>
  )
}

