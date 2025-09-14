'use client'

import { Button, TextField, FormControl, InputLabel, Select, MenuItem, Box, Typography, Paper } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import * as React from 'react'

export type FranchiseFormProps = {
    buttonLabel?: string
    isSubmitting?: boolean
    className?: string
}

export type FranchiseFormRef = {
    getResumeFile: () => File | null
    getReceiptFile: () => File | null
    resetForm: () => void
}

const FranchiseForm = React.forwardRef<FranchiseFormRef, FranchiseFormProps>((props, ref) => {
    const { buttonLabel = 'Submit Franchise Application', isSubmitting = false, className } = props
    const [resumeFile, setResumeFile] = React.useState<File | null>(null)
    const [receiptFile, setReceiptFile] = React.useState<File | null>(null)
    const [selectedHearAbout, setSelectedHearAbout] = React.useState('')
    const [selectedFunding, setSelectedFunding] = React.useState('')

    const handleResumeFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            setResumeFile(file)
        }
    }

    const handleReceiptFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            setReceiptFile(file)
        }
    }

    const handleResumeFileRemove = () => {
        setResumeFile(null)
    }

    const handleReceiptFileRemove = () => {
        setReceiptFile(null)
    }

    const handleHearAboutChange = (event: any) => {
        setSelectedHearAbout(event.target.value)
    }

    const handleFundingChange = (event: any) => {
        setSelectedFunding(event.target.value)
    }

    // Expose files to parent component
    React.useImperativeHandle(ref, () => ({
        getResumeFile: () => resumeFile,
        getReceiptFile: () => receiptFile,
        resetForm: () => {
            setResumeFile(null)
            setReceiptFile(null)
            setSelectedHearAbout('')
            setSelectedFunding('')
        }
    }), [resumeFile, receiptFile, selectedHearAbout, selectedFunding])

    const hearAboutOptions = [
        { value: 'online', label: 'Online' },
        { value: 'offline', label: 'Offline' },
        { value: 'friend-referral', label: 'Friend Referral' },
        { value: 'other', label: 'Other' }
    ]

    const fundingOptions = [
        { value: 'under-50k', label: 'Under $50,000' },
        { value: '50k-100k', label: '$50,000 - $100,000' },
        { value: '100k-200k', label: '$100,000 - $200,000' },
        { value: '200k-500k', label: '$200,000 - $500,000' },
        { value: 'over-500k', label: 'Over $500,000' }
    ]

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

            <TextField
                name="phone"
                label="Phone Number"
                placeholder="Enter your phone number"
                required
                fullWidth
            />

            <TextField
                name="address"
                label="Address"
                placeholder="Enter your address"
                required
                fullWidth
            />

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                <TextField
                    name="city"
                    label="City"
                    placeholder="Enter your city"
                    required
                    fullWidth
                />
                <TextField
                    name="state"
                    label="State"
                    placeholder="Enter your state"
                    required
                    fullWidth
                />
            </Box>

            <TextField
                name="postalCode"
                label="Postal Code"
                placeholder="Enter your postal code"
                required
                fullWidth
            />

            <FormControl fullWidth>
                <InputLabel>How did you hear about YGF Australia?</InputLabel>
                <Select
                    name="hearAbout"
                    label="How did you hear about YGF Australia?"
                    required
                    value={selectedHearAbout}
                    onChange={handleHearAboutChange}
                >
                    {hearAboutOptions.map((opt) => (
                        <MenuItem key={opt.value} value={opt.value}>
                            {opt.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel>Level of Funding</InputLabel>
                <Select
                    name="funding"
                    label="Level of Funding"
                    required
                    value={selectedFunding}
                    onChange={handleFundingChange}
                >
                    {fundingOptions.map((opt) => (
                        <MenuItem key={opt.value} value={opt.value}>
                            {opt.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <TextField
                name="message"
                label="Message"
                multiline
                rows={4}
                placeholder="Tell us about your interest in franchising with YGF Australia..."
                required
                fullWidth
            />

            {/* File Upload Section */}
            <Box>
                <Typography variant="subtitle2" gutterBottom>
                    Required Documents
                </Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                    {/* Application Fee Receipt Upload */}
                    <Box>
                        <Typography variant="body2" gutterBottom sx={{ fontWeight: 'medium' }}>
                            Upload Application Fee Receipt
                        </Typography>
                        <Paper
                            variant="outlined"
                            sx={{
                                p: 2,
                                textAlign: 'center',
                                cursor: 'pointer',
                                '&:hover': { backgroundColor: 'action.hover' },
                            }}
                            onClick={() => document.getElementById('receipt-upload')?.click()}
                        >
                            <input
                                id="receipt-upload"
                                type="file"
                                accept=".pdf,.jpg,.jpeg,.png"
                                onChange={handleReceiptFileChange}
                                style={{ display: 'none' }}
                            />
                            {receiptFile ? (
                                <Box>
                                    <Typography variant="body2" color="primary">
                                        {receiptFile.name}
                                    </Typography>
                                    <Button
                                        size="small"
                                        color="error"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleReceiptFileRemove()
                                        }}
                                    >
                                        Remove
                                    </Button>
                                </Box>
                            ) : (
                                <Box>
                                    <CloudUploadIcon sx={{ fontSize: 40, color: 'text.secondary', mb: 1 }} />
                                    <Typography variant="body2" color="text.secondary">
                                        Upload receipt
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        PDF, JPG, PNG (max 10MB)
                                    </Typography>
                                </Box>
                            )}
                        </Paper>
                    </Box>

                    {/* Resume/CV Upload */}
                    <Box>
                        <Typography variant="body2" gutterBottom sx={{ fontWeight: 'medium' }}>
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
                                onChange={handleResumeFileChange}
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
                                            handleResumeFileRemove()
                                        }}
                                    >
                                        Remove
                                    </Button>
                                </Box>
                            ) : (
                                <Box>
                                    <CloudUploadIcon sx={{ fontSize: 40, color: 'text.secondary', mb: 1 }} />
                                    <Typography variant="body2" color="text.secondary">
                                        Upload resume/CV
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        PDF, DOC, DOCX, TXT (max 10MB)
                                    </Typography>
                                </Box>
                            )}
                        </Paper>
                    </Box>
                </Box>
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

FranchiseForm.displayName = 'FranchiseForm'

export default FranchiseForm
