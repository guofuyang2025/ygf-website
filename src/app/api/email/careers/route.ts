import { NextRequest, NextResponse } from 'next/server'
import { toAddress, fromAddress } from '@/config/email'
import { generateCareersEmailHtml, type CareerApplicationData } from '@/components/email-templates/careers-email'

export async function POST(request: NextRequest) {
    try {
        const apiKey = process.env.RESEND_API_KEY
        if (!apiKey) {
            console.error('Missing RESEND_API_KEY environment variable')
            // In development, return success to allow testing
            if (process.env.NODE_ENV === 'development') {
                console.log('Development mode: Simulating careers email send')
                return NextResponse.json({ 
                    success: true, 
                    id: 'dev-simulated',
                    message: 'Careers email would be sent in production (RESEND_API_KEY not set)'
                })
            }
            return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
        }

        const formData = await request.formData()

        // Extract form fields
        const firstName = formData.get('firstName') as string
        const lastName = formData.get('lastName') as string
        const email = formData.get('email') as string
        const position = formData.get('position') as string
        const coverLetter = formData.get('coverLetter') as string
        const phone = formData.get('phone') as string
        const linkedin = formData.get('linkedin') as string
        const portfolio = formData.get('portfolio') as string
        const experience = formData.get('experience') as string
        const education = formData.get('education') as string
        const skills = formData.get('skills') as string
        const availability = formData.get('availability') as string
        const salary = formData.get('salary') as string
        const source = formData.get('source') as string

        // Handle resume file
        const resumeFile = formData.get('resume') as File | null
        let resumeData = null

        if (resumeFile) {
            // Convert file to base64 for storage/transmission
            const arrayBuffer = await resumeFile.arrayBuffer()
            const base64 = Buffer.from(arrayBuffer).toString('base64')
            resumeData = {
                fileName: resumeFile.name,
                fileType: resumeFile.type,
                fileSize: resumeFile.size,
                base64: base64
            }
        }

        // Validate required fields
        if (!firstName || !lastName || !email || !position || !coverLetter) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            )
        }

        // Prepare application data
        const applicationData: CareerApplicationData = {
            firstName,
            lastName,
            email,
            position,
            coverLetter,
            phone: phone || undefined,
            linkedin: linkedin || undefined,
            portfolio: portfolio || undefined,
            experience: experience || undefined,
            education: education || undefined,
            skills: skills ? skills.split(',').map(s => s.trim()) : undefined,
            availability: availability || undefined,
            salary: salary || undefined,
            source: source || undefined,
            hasResume: !!resumeData,
            resumeFileName: resumeData?.fileName,
        }

        // Log application (for development/debugging)
        console.log('Career application received:', {
            name: `${applicationData.firstName} ${applicationData.lastName}`,
            email: applicationData.email,
            position: applicationData.position,
            hasResume: !!resumeData,
            timestamp: new Date().toISOString()
        })

        const html = generateCareersEmailHtml(applicationData)

        const attachments = resumeData
            ? [
                  {
                      filename: resumeData.fileName,
                      content: resumeData.base64,
                      content_type: resumeData.fileType,
                  },
              ]
            : undefined

        console.log('Sending careers email via Resend:', { from: fromAddress, to: toAddress, position })

        const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: fromAddress,
                to: [toAddress],
                subject: `[Website] Career Application: ${applicationData.position}`,
                html,
                reply_to: applicationData.email,
                attachments,
            }),
        })

        if (!resendResponse.ok) {
            const err = await resendResponse.text()
            console.error('Resend API error:', { status: resendResponse.status, error: err })
            return NextResponse.json({ 
                error: 'Failed to send email', 
                details: err,
                status: resendResponse.status
            }, { status: 502 })
        }

        const data = await resendResponse.json()
        console.log('Careers email sent successfully:', { id: data?.id })
        return NextResponse.json({
            success: true,
            message: 'Application submitted successfully',
            applicationId: `APP-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
        })

    } catch (error) {
        console.error('Error processing career application:', error)

        return NextResponse.json(
            {
                error: 'Internal server error',
                message: 'Failed to process application. Please try again later.'
            },
            { status: 500 }
        )
    }
}

export async function GET() {
    // TODO: Implement if you want to retrieve applications (admin only)
    return NextResponse.json(
        { error: 'Method not allowed' },
        { status: 405 }
    )
}
