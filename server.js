const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('.'));

// Configure Nodemailer with Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'suyashverma61@gmail.com',
        pass: process.env.EMAIL_PASSWORD || 'your_app_password_here' // Use App Password, not Gmail password
    }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { subject, email, message } = req.body;

        // Validate input
        if (!subject || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Send email to your inbox
        const mailOptions = {
            from: process.env.EMAIL_USER || 'suyashverma61@gmail.com',
            to: 'suyashverma61@gmail.com',
            subject: `Portfolio Contact: ${subject}`,
            html: `
                <h2>New Message from Portfolio Contact Form</h2>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>From Email:</strong> ${email}</p>
                <hr>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <hr>
                <p><small>This email was sent from your portfolio contact form</small></p>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email: ' + error.message });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running' });
});

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
    console.log('📧 Email service ready to receive contact form submissions');
});
