import { NextRequest, NextResponse } from 'next/server'
import { toAddress, fromAddress } from '@/config/email'

export async function POST(request: NextRequest) {
    try {
        const apiKey = process.env.RESEND_API_KEY
        if (!apiKey) {
            console.error('Missing RESEND_API_KEY environment variable')
            // In development, return success to allow testing
            if (process.env.NODE_ENV === 'development') {
                return NextResponse.json({
                    success: true,
                    id: 'dev-simulated',
                    message: 'Franchise email would be sent in production (RESEND_API_KEY not set)'
                })
            }
            return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
        }

        const formData = await request.formData()

        // Extract form fields
        const firstName = formData.get('firstName') as string
        const lastName = formData.get('lastName') as string
        const email = formData.get('email') as string
        const phone = formData.get('phone') as string
        const address = formData.get('address') as string
        const city = formData.get('city') as string
        const state = formData.get('state') as string
        const postalCode = formData.get('postalCode') as string
        const hearAbout = formData.get('hearAbout') as string
        const funding = formData.get('funding') as string
        const message = formData.get('message') as string

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
        if (!firstName || !lastName || !email || !phone || !address || !city || !state || !postalCode || !hearAbout || !funding || !message) {
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

        // Generate HTML email content
        const html = generateFranchiseEmailHtml({
            firstName,
            lastName,
            email,
            phone,
            address,
            city,
            state,
            postalCode,
            hearAbout,
            funding,
            message,
            hasResume: !!resumeData,
            resumeFileName: resumeData?.fileName,
        })

        const attachments = resumeData
            ? [
                {
                    filename: resumeData.fileName,
                    content: resumeData.base64,
                    content_type: resumeData.fileType,
                },
            ]
            : undefined

        const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: fromAddress,
                to: [toAddress],
                subject: `[Website] Franchise Application: ${firstName} ${lastName}`,
                html,
                reply_to: email,
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
        return NextResponse.json({
            success: true,
            message: 'Franchise application submitted successfully',
            applicationId: `FRAN-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
        })

    } catch (error) {
        console.error('Error processing franchise application:', error)

        return NextResponse.json(
            {
                error: 'Internal server error',
                message: 'Failed to process application. Please try again later.'
            },
            { status: 500 }
        )
    }
}

function generateFranchiseEmailHtml(data: {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
    city: string
    state: string
    postalCode: string
    hearAbout: string
    funding: string
    message: string
    hasResume: boolean
    resumeFileName?: string
}) {
    const fundingLabels: { [key: string]: string } = {
        'under-50k': 'Under $50,000',
        '50k-100k': '$50,000 - $100,000',
        '100k-200k': '$100,000 - $200,000',
        '200k-500k': '$200,000 - $500,000',
        'over-500k': 'Over $500,000'
    }

    const hearAboutLabels: { [key: string]: string } = {
        'online': 'Online',
        'offline': 'Offline',
        'friend-referral': 'Friend Referral',
        'other': 'Other'
    }

    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Franchise Application</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
                .section { margin-bottom: 20px; }
                .label { font-weight: bold; color: #555; }
                .value { margin-bottom: 10px; }
                .resume { background-color: #e9ecef; padding: 10px; border-radius: 4px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>New Franchise Application</h1>
                    <p>Application ID: FRAN-${Date.now()}-${Math.random().toString(36).substr(2, 9)}</p>
                </div>

                <div class="section">
                    <h2>Personal Information</h2>
                    <div class="value">
                        <span class="label">Name:</span> ${data.firstName} ${data.lastName}
                    </div>
                    <div class="value">
                        <span class="label">Email:</span> ${data.email}
                    </div>
                    <div class="value">
                        <span class="label">Phone:</span> ${data.phone}
                    </div>
                </div>

                <div class="section">
                    <h2>Address Information</h2>
                    <div class="value">
                        <span class="label">Address:</span> ${data.address}
                    </div>
                    <div class="value">
                        <span class="label">City:</span> ${data.city}
                    </div>
                    <div class="value">
                        <span class="label">State:</span> ${data.state}
                    </div>
                    <div class="value">
                        <span class="label">Postal Code:</span> ${data.postalCode}
                    </div>
                </div>

                <div class="section">
                    <h2>Franchise Information</h2>
                    <div class="value">
                        <span class="label">How did you hear about YGF Australia:</span> ${hearAboutLabels[data.hearAbout] || data.hearAbout}
                    </div>
                    <div class="value">
                        <span class="label">Level of Funding:</span> ${fundingLabels[data.funding] || data.funding}
                    </div>
                </div>

                <div class="section">
                    <h2>Message</h2>
                    <div class="value">
                        ${data.message.replace(/\n/g, '<br>')}
                    </div>
                </div>

                ${data.hasResume ? `
                <div class="section">
                    <h2>Resume/CV</h2>
                    <div class="resume">
                        <span class="label">File:</span> ${data.resumeFileName}
                        <br><em>Resume attached to this email</em>
                    </div>
                </div>
                ` : ''}

                <div class="section">
                    <p><em>This application was submitted through the YGF Australia website franchise form.</em></p>
                </div>
            </div>
        </body>
        </html>
    `
}

export async function GET() {
    return NextResponse.json(
        { error: 'Method not allowed' },
        { status: 405 }
    )
}
