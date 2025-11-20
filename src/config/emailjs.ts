/**
 * EmailJS Configuration
 *
 * Replace these placeholder values with your actual EmailJS credentials:
 * 1. Go to https://www.emailjs.com/ and sign up
 * 2. Create an email service (Gmail, Outlook, etc.)
 * 3. Create an email template
 * 4. Copy your credentials from the dashboard
 */

export const EMAILJS_CONFIG = {
  PUBLIC_KEY: "LVLZAU7yRWUgjLTmv", // Replace with your EmailJS public key
  TEMPLATE_ID: "template_feqc99u", // Replace with your EmailJS template ID
  SERVICE_ID: "service_anlabpi", // Replace with your EmailJS service ID
  TO_EMAIL: "lidetadmassu217@outlook.com", // Your email address where you want to receive messages
};

// Example template parameters that will be sent to EmailJS
export const getTemplateParams = (
  name: string,
  email: string,
  message: string
) => ({
  from_name: name,
  from_email: email,
  message: message,
  to_email: EMAILJS_CONFIG.TO_EMAIL,
  timestamp: new Date().toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  }),
});
