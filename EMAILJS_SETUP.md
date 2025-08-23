# EmailJS Setup Guide

This guide will help you set up EmailJS to receive contact form submissions from your portfolio website.

## Step 1: Sign Up for EmailJS

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create an account
3. Verify your email address

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps for your chosen provider
5. Note down your **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Design your email template with these variables:
   - `{{from_name}}` - The sender's name
   - `{{from_email}}` - The sender's email
   - `{{message}}` - The message content
   - `{{to_email}}` - Your email address
4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys" in your dashboard
2. Copy your **Public Key**

## Step 5: Update Your Configuration

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: "your_actual_public_key_here",
  TEMPLATE_ID: "your_actual_template_id_here",
  SERVICE_ID: "your_actual_service_id_here",
  TO_EMAIL: "lidetadmassu217@outlook.com", // Your email address
};
```

## Step 6: Test Your Setup

1. Start your development server: `npm run dev`
2. Go to the contact section of your website
3. Fill out and submit the contact form
4. Check your email to see if the message was received

## Troubleshooting

- **"Failed to send message" error**: Double-check your credentials in the config file
- **No emails received**: Check your spam folder and verify your email service is properly configured
- **Template variables not working**: Make sure your template uses the exact variable names: `{{from_name}}`, `{{from_email}}`, `{{message}}`

## Security Notes

- Your public key is safe to use in frontend code
- Never expose your private keys or service credentials
- EmailJS handles the security of your email service credentials

## Support

If you encounter issues:

1. Check the EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
2. Visit the EmailJS community forum
3. Contact EmailJS support
