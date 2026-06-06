# Portfolio Website with Contact Form

A modern portfolio website with an automated contact form that sends emails to your inbox.

## 📋 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Gmail (One-time Setup)

To send emails from your portfolio, you need to:

1. **Enable 2-Factor Authentication on your Gmail account**
   - Go to [myaccount.google.com/security](https://myaccount.google.com/security)
   - Click "2-Step Verification"
   - Follow the steps to enable it

2. **Generate an App Password**
   - Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Windows Computer" (or your device)
   - Click "Generate"
   - Copy the 16-character password

3. **Add to .env file**
   - Copy `.env.example` to `.env`
   - Replace `your_app_password_here` with the 16-character password you just copied
   - Save the file

Example `.env`:
```
EMAIL_USER=suyashverma61@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
PORT=3000
```

### 3. Run the Server

**Development (with auto-reload):**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

The server will run on `http://localhost:3000`

### 4. Test the Form

1. Open `http://localhost:3000` in your browser
2. Scroll to the Contact section
3. Fill in the form and submit
4. Check your email at `suyashverma61@gmail.com` for the message!

## 📁 Project Structure

```
portfolio/
├── index.html          # Main portfolio page
├── server.js           # Node.js/Express backend
├── package.json        # Dependencies
├── .env                # Environment variables (create from .env.example)
├── .env.example        # Template for .env
└── .gitignore          # Git ignore rules
```

## 🚀 Deployment

### Deploy to Heroku
```bash
heroku create your-portfolio-name
git push heroku main
```

### Deploy to Railway
1. Push to GitHub
2. Go to [railway.app](https://railway.app)
3. Connect your GitHub repo
4. Add environment variables in the dashboard
5. Deploy!

### Deploy to Vercel (Serverless)
The contact form will work with Vercel's serverless functions with minimal changes.

## 📧 Email Features

- ✅ Receives emails at `suyashverma61@gmail.com`
- ✅ Beautiful HTML email formatting
- ✅ Shows sender's email for easy replies
- ✅ Includes message and subject
- ✅ Error handling with user feedback

## 🔒 Security Notes

- Never commit `.env` file to GitHub
- Use App Passwords, not your Gmail password
- The `.gitignore` file prevents accidents

## 🐛 Troubleshooting

**"Failed to send email" error:**
- Check if Gmail App Password is correct
- Verify 2FA is enabled on your Gmail account
- Check that `.env` file is in the project root

**Form not submitting:**
- Make sure server is running on port 3000
- Check browser console for error messages
- Ensure CORS is enabled (it is by default)

## 📝 License

Personal project. Feel free to customize and use as your own portfolio!
