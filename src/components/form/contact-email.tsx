'use client'

import { Button, TextField, FormControl, InputLabel, Select, MenuItem, Box, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import * as React from 'react'

type EnquiryTypeOption = {
    value: string
    label: string
}

export type ContactEmailProps = {
    enquiryTypeOptions?: EnquiryTypeOption[]
    buttonLabel?: string
    messagePlaceholder?: string
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
    className?: string
}

export default function ContactEmail(props: ContactEmailProps) {
    const {
        enquiryTypeOptions = [
            { value: 'general', label: 'General enquiry' },
            { value: 'contact', label: 'Contact request' },
            { value: 'complaint', label: 'Complaint / Feedback' }
        ],
        buttonLabel = 'Send Message',
        messagePlaceholder,
        onSubmit,
        className
    } = props

    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle')
    const [submitMessage, setSubmitMessage] = React.useState('')

    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        enquiryType: '',
        subject: '',
        message: ''
    })

    const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [field]: event.target.value
        }))
    }

    const handleEnquiryTypeChange = (event: any) => {
        setFormData(prev => ({
            ...prev,
            enquiryType: event.target.value
        }))
    }

    const resetForm = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            enquiryType: '',
            subject: '',
            message: ''
        })
    }

    const handleSubmit = React.useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            if (onSubmit) return onSubmit(e)
            e.preventDefault()
            setIsSubmitting(true)
            setSubmitStatus('idle')
            setSubmitMessage('')

            try {
                const payload = {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    enquiryType: formData.enquiryType,
                    subject: formData.subject,
                    message: formData.message,
                }

                const response = await fetch('/api/email/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                })

                const result = await response.json()

                if (response.ok) {
                    setSubmitStatus('success')
                    setSubmitMessage('Enquiry sent successfully!')
                    resetForm()
                } else {
                    setSubmitStatus('error')
                    const errorMessage = result.error || result.message || 'Failed to send enquiry'
                    setSubmitMessage(errorMessage)
                    console.error('API Error:', result)
                }
            } catch (error) {
                console.error('Error making  Enquiry:', error)
                setSubmitStatus('error')
                setSubmitMessage('An unexpected error occurred. Please try again.')
            } finally {
                setIsSubmitting(false)
            }
        },
        [onSubmit, formData]
    )

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                <TextField
                    name="firstName"
                    label="First Name"
                    placeholder="Enter your first name"
                    required
                    fullWidth
                    value={formData.firstName}
                    onChange={handleInputChange('firstName')}
                />
                <TextField
                    name="lastName"
                    label="Last Name"
                    placeholder="Enter your last name"
                    required
                    fullWidth
                    value={formData.lastName}
                    onChange={handleInputChange('lastName')}
                />
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
            <TextField
                name="email"
                label="Email Address"
                type="email"
                placeholder="Enter your email address"
                required
                fullWidth
                value={formData.email}
                onChange={handleInputChange('email')}
            />

            <TextField
                name="phone"
                label="Phone Number"
                type="tel"
                placeholder="Enter your phone number"
                required
                fullWidth
                value={formData.phone}
                onChange={handleInputChange('phone')}
            />
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>

            <FormControl>
                <InputLabel>Enquiry Type</InputLabel>
                <Select
                    name="enquiryType"
                    label="Enquiry Type"
                    required
                    value={formData.enquiryType}
                    onChange={handleEnquiryTypeChange}
                >
                    {enquiryTypeOptions.map((opt) => (
                        <MenuItem key={opt.value} value={opt.value}>
                            {opt.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <TextField
                name="subject"
                label="Subject"
                placeholder="Enter subject (optional)"
                fullWidth
                value={formData.subject}
                onChange={handleInputChange('subject')}
            />
            </Box>
            <TextField
                name="message"
                label="Message"
                multiline
                rows={4}
                placeholder={messagePlaceholder ?? 'Tell us more about your inquiry...'}
                required
                fullWidth
                value={formData.message}
                onChange={handleInputChange('message')}
            />

            {/* Submit Status Messages */}
            {submitStatus === 'success' && (
                <Typography color="success.main" variant="body2">
                    {submitMessage}
                </Typography>
            )}

            {submitStatus === 'error' && (
                <Typography color="error.main" variant="body2">
                    {submitMessage}
                </Typography>
            )}

            <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isSubmitting}
                startIcon={<SendIcon />}
                sx={{ width: '100%' }}
            >
                {isSubmitting ? 'Sending...' : buttonLabel}
            </Button>
        </Box>
    )
}