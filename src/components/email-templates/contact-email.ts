export type ContactEmailData = {
    firstName: string
    lastName: string
    email: string
    phone: string
    enquiryType: string
    subject?: string
    message: string
    source?: string
}

export function generateContactEmailHtml(data: ContactEmailData): string {
    return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                New Contact Form Submission
            </h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
                <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                <p><strong>Enquiry Type:</strong> ${data.enquiryType}</p>
                ${data.subject ? `<p><strong>Subject:</strong> ${data.subject}</p>` : ''}
                ${data.source ? `<p><strong>Source:</strong> ${data.source}</p>` : ''}
            </div>
            
            <div style="background-color: #fff; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px;">
                <h3 style="color: #495057; margin-top: 0;">Message:</h3>
                <div style="white-space: pre-wrap; line-height: 1.6; color: #333;">
                    ${data.message}
                </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; font-size: 12px; color: #6c757d;">
                <p>This message was sent from your website contact form.</p>
                <p>Reply directly to this email to respond to ${data.firstName}.</p>
            </div>
        </div>
    `
}