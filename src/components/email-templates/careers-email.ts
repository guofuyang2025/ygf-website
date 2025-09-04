export type CareerApplicationData = {
    firstName: string
    lastName: string
    email: string
    position: string
    coverLetter: string
    phone?: string
    linkedin?: string
    portfolio?: string
    experience?: string
    education?: string
    skills?: string[]
    availability?: string
    salary?: string
    source?: string
    hasResume?: boolean
    resumeFileName?: string
}

export function generateCareersEmailHtml(data: CareerApplicationData): string {
    return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #333; border-bottom: 2px solid #28a745; padding-bottom: 10px;">
                New Career Application
            </h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #495057; margin-top: 0;">Applicant Information</h3>
                <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
                <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
                <p><strong>Position:</strong> ${data.position}</p>
                ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
                ${data.linkedin ? `<p><strong>LinkedIn:</strong> <a href="${data.linkedin}" target="_blank">${data.linkedin}</a></p>` : ''}
                ${data.portfolio ? `<p><strong>Portfolio:</strong> <a href="${data.portfolio}" target="_blank">${data.portfolio}</a></p>` : ''}
                ${data.source ? `<p><strong>Source:</strong> ${data.source}</p>` : ''}
            </div>
            
            ${data.experience ? `
                <div style="background-color: #fff; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px; margin: 20px 0;">
                    <h3 style="color: #495057; margin-top: 0;">Experience</h3>
                    <div style="white-space: pre-wrap; line-height: 1.6; color: #333;">
                        ${data.experience}
                    </div>
                </div>
            ` : ''}
            
            ${data.education ? `
                <div style="background-color: #fff; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px; margin: 20px 0;">
                    <h3 style="color: #495057; margin-top: 0;">Education</h3>
                    <div style="white-space: pre-wrap; line-height: 1.6; color: #333;">
                        ${data.education}
                    </div>
                </div>
            ` : ''}
            
            ${data.skills && data.skills.length > 0 ? `
                <div style="background-color: #fff; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px; margin: 20px 0;">
                    <h3 style="color: #495057; margin-top: 0;">Skills</h3>
                    <p style="color: #333;">${data.skills.join(', ')}</p>
                </div>
            ` : ''}
            
            <div style="background-color: #fff; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px; margin: 20px 0;">
                <h3 style="color: #495057; margin-top: 0;">Cover Letter</h3>
                <div style="white-space: pre-wrap; line-height: 1.6; color: #333;">
                    ${data.coverLetter}
                </div>
            </div>
            
            ${data.availability ? `
                <div style="background-color: #fff; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px; margin: 20px 0;">
                    <h3 style="color: #495057; margin-top: 0;">Availability</h3>
                    <p style="color: #333;">${data.availability}</p>
                </div>
            ` : ''}
            
            ${data.salary ? `
                <div style="background-color: #fff; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px; margin: 20px 0;">
                    <h3 style="color: #495057; margin-top: 0;">Salary Expectations</h3>
                    <p style="color: #333;">${data.salary}</p>
                </div>
            ` : ''}
            
            ${data.hasResume ? `
                <div style="background-color: #e7f3ff; border: 1px solid #b3d9ff; border-radius: 8px; padding: 20px; margin: 20px 0;">
                    <h3 style="color: #0066cc; margin-top: 0;">📎 Resume Attached</h3>
                    <p style="color: #333;">${data.resumeFileName || 'Resume file'}</p>
                </div>
            ` : ''}
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; font-size: 12px; color: #6c757d;">
                <p>This application was submitted through your careers portal.</p>
                <p>Reply directly to this email to contact ${data.firstName}.</p>
            </div>
        </div>
    `
}
