'use client'

import { Button, TextField, FormControl, InputLabel, Select, MenuItem, Box, Typography, Paper } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import * as React from 'react'

export type CareersEmailProps = {
    buttonLabel?: string
    positions?: { value: string; label: string }[]
    isSubmitting?: boolean
    className?: string
}

export type CareersEmailRef = {
    getResumeFile: () => File | null
    resetForm: () => void
}

const CareersEmail = React.forwardRef<CareersEmailRef, CareersEmailProps>((props, ref) => {
    const { buttonLabel = 'Submit Application', positions, isSubmitting = false, className } = props
    const [resumeFile, setResumeFile] = React.useState<File | null>(null)
    const [selectedPosition, setSelectedPosition] = React.useState('')

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            setResumeFile(file)
        }
    }

    const handleFileRemove = () => {
        setResumeFile(null)
    }

    const handlePositionChange = (event: any) => {
        setSelectedPosition(event.target.value)
    }

    // Expose resumeFile to parent component
    React.useImperativeHandle(ref, () => ({
        getResumeFile: () => resumeFile,
        resetForm: () => {
            setResumeFile(null)
            setSelectedPosition('')
        }
    }), [resumeFile, selectedPosition])

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                <TextField
                    name="firstName"
                    label="First Name"
                    placeholder="Enter your first name"
                    required
                    fullWidth
                />
                <TextField
                    name="lastName"
                    label="Last Name"
                    placeholder="Enter your last name"
                    required
                    fullWidth
                />
            </Box>

            <TextField
                name="email"
                label="Email Address"
                type="email"
                placeholder="Enter your email address"
                required
                fullWidth
            />

            <FormControl fullWidth>
                <InputLabel>Position</InputLabel>
                <Select 
                    name="position" 
                    label="Position" 
                    required
                    value={selectedPosition}
                    onChange={handlePositionChange}
                >
                    {(positions && positions.length > 0
                        ? positions
                        : [
                              { value: 'frontend-developer', label: 'Senior Frontend Developer' },
                              { value: 'product-manager', label: 'Product Manager' },
                              { value: 'ux-designer', label: 'UX/UI Designer' },
                              { value: 'devops-engineer', label: 'DevOps Engineer' },
                              { value: 'other', label: 'Other' },
                          ]
                    ).map((opt) => (
                        <MenuItem key={opt.value} value={opt.value}>
                            {opt.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <TextField
                name="coverLetter"
                label="Cover Letter"
                multiline
                rows={4}
                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                required
                fullWidth
            />

            {/* File Upload Section */}
            <Box>
                <Typography variant="subtitle2" gutterBottom>
                    Resume/CV
                </Typography>
                <Paper
                    variant="outlined"
                    sx={{
                        p: 2,
                        textAlign: 'center',
                        cursor: 'pointer',
                        '&:hover': { backgroundColor: 'action.hover' },
                    }}
                    onClick={() => document.getElementById('resume-upload')?.click()}
                >
                    <input
                        id="resume-upload"
                        type="file"
                        accept=".pdf,.doc,.docx,.txt"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                    {resumeFile ? (
                        <Box>
                            <Typography variant="body2" color="primary">
                                {resumeFile.name}
                            </Typography>
                            <Button
                                size="small"
                                color="error"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handleFileRemove()
                                }}
                            >
                                Remove
                            </Button>
                        </Box>
                    ) : (
                        <Box>
                            <CloudUploadIcon sx={{ fontSize: 40, color: 'text.secondary', mb: 1 }} />
                            <Typography variant="body2" color="text.secondary">
                                Drag and drop your resume here, or click to browse
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                Accepted formats: PDF, DOC, DOCX, TXT (max 10MB)
                            </Typography>
                        </Box>
                    )}
                </Paper>
            </Box>

            <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isSubmitting}
                startIcon={<SendIcon />}
                sx={{ width: '100%' }}
            >
                {isSubmitting ? 'Submitting...' : buttonLabel}
            </Button>
        </Box>
    )
})

CareersEmail.displayName = 'CareersEmail'

export default CareersEmail

