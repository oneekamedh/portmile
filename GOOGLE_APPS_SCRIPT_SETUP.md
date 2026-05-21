# Google Apps Script Setup Instructions

This guide will help you set up the Google Apps Script to handle contact form submissions and save them to Google Sheets.

## Prerequisites
- A Google account
- Access to Google Sheets and Google Apps Script

## Step 1: Create a Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "Portmile Contact Form" (or any name you prefer)
4. Keep this sheet open - you'll need it for the next step

## Step 2: Add the Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. This will open the Apps Script editor in a new tab
3. Delete any existing code in the editor
4. Copy the contents of `GoogleAppsScript.gs` from this project
5. Paste it into the Apps Script editor
6. Save the script (Ctrl+S or Cmd+S)

## Step 3: Run the Setup Function

1. In the Apps Script editor, select `setupSheet` from the function dropdown (top toolbar)
2. Click the **Run** button
3. Authorize the script when prompted (you'll need to grant permissions)
4. This will create the "Contact Form Submissions" sheet with headers and formatting

## Step 4: Deploy as Web App

1. Click **Deploy** → **New deployment** in the Apps Script editor
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: "Contact Form Handler"
   - **Execute as**: "Me" (your email address)
   - **Who has access**: "Anyone" (important for form submissions to work)
5. Click **Deploy**
6. Copy the **Web app URL** that appears (it will look like: `https://script.google.com/macros/s/.../exec`)

## Step 5: Update Your HTML

1. Open `index.html` in your project
2. Find line 641: `const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';`
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your actual Web app URL from Step 4
4. Save the file

## Step 6: Test the Form

1. Open your website in a browser
2. Navigate to the Contact section
3. Fill out the form with test data
4. Click "Send Enquiry"
5. Check your Google Sheet - you should see a new row with the form data

## Form Fields

The form captures the following fields:
- **Name**: Full name of the contact
- **Company**: Company name
- **Phone**: Phone number
- **Email**: Email address
- **Cargo Type**: Type of cargo (dropdown selection)
- **Origin**: Starting location
- **Destination**: Destination location
- **Details**: Additional project details

## Optional: Email Notifications

To receive email notifications when a new form is submitted:

1. In the Apps Script editor, find the `sendEmailNotification` function
2. Change `your-email@example.com` to your actual email address
3. Uncomment the call to `sendEmailNotification` in the `doPost` function
4. Redeploy the web app (Deploy → Manage deployments → Edit → Redeploy)

## Troubleshooting

**Form not submitting:**
- Make sure the Web app URL is correct in your HTML
- Verify "Who has access" is set to "Anyone" when deploying
- Check browser console for errors (F12 → Console)

**No data in Google Sheet:**
- Run the `setupSheet` function again
- Check the Apps Script execution log (View → Executions)
- Verify the sheet name matches in the code

**Authorization errors:**
- Make sure you're logged into the correct Google account
- Try redeploying the web app

## Security Notes

- The form accepts submissions from anyone with the URL
- Consider adding CAPTCHA or rate limiting for production use
- Regularly review your Google Sheet for spam submissions
- Never share your Web app URL publicly if you want to restrict access
