// Google Apps Script for Portmile Contact Form
// Deploy this script as a web app to get your URL

// Configuration - Change this to customize the sheet name
const SHEET_NAME = "Contact Form Submissions";

// Sanitize input to prevent XSS and malicious content
function sanitizeInput(input) {
  if (!input) return "";
  // Convert to string and strip HTML tags
  let sanitized = Utilities.htmlToText(String(input));
  // Trim whitespace
  sanitized = sanitized.trim();
  // Limit length to prevent excessively long inputs
  if (sanitized.length > 1000) {
    sanitized = sanitized.substring(0, 1000);
  }
  return sanitized;
}

function doPost(e) {
  try {
    // Get the form data
    const params = e.parameter;
    
    // Get or create the spreadsheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      // Add headers
      sheet.appendRow([
        "Timestamp",
        "Name",
        "Company",
        "Phone",
        "Email",
        "Cargo Type",
        "Origin",
        "Destination",
        "Details"
      ]);
      // Format header row
      sheet.getRange(1, 1, 1, 9).setFontWeight("bold").setBackground("#06111F").setFontColor("#FFFFFF");
      sheet.setColumnWidth(1, 180); // Timestamp
      sheet.setColumnWidth(2, 200); // Name
      sheet.setColumnWidth(3, 200); // Company
      sheet.setColumnWidth(4, 150); // Phone
      sheet.setColumnWidth(5, 250); // Email
      sheet.setColumnWidth(6, 250); // Cargo Type
      sheet.setColumnWidth(7, 200); // Origin
      sheet.setColumnWidth(8, 200); // Destination
      sheet.setColumnWidth(9, 400); // Details
    }
    
    // Sanitize and append the form data
    sheet.appendRow([
      new Date(),
      sanitizeInput(params.name),
      sanitizeInput(params.company),
      sanitizeInput(params.phone),
      sanitizeInput(params.email),
      sanitizeInput(params.cargoType),
      sanitizeInput(params.origin),
      sanitizeInput(params.destination),
      sanitizeInput(params.details)
    ]);
    
    // Send email notification
    sendEmailNotification(
      sanitizeInput(params.name),
      sanitizeInput(params.company),
      sanitizeInput(params.email),
      sanitizeInput(params.phone),
      sanitizeInput(params.cargoType)
    );
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to set up the sheet (run this once manually)
function setupSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  
  if (sheet) {
    sheet.clear();
  } else {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  
  // Add headers
  sheet.appendRow([
    "Timestamp",
    "Name",
    "Company",
    "Phone",
    "Email",
    "Cargo Type",
    "Origin",
    "Destination",
    "Details"
  ]);
  
  // Format header row
  sheet.getRange(1, 1, 1, 9)
    .setFontWeight("bold")
    .setBackground("#06111F")
    .setFontColor("#FFFFFF")
    .setFontSize(11);
  
  // Set column widths
  sheet.setColumnWidth(1, 180); // Timestamp
  sheet.setColumnWidth(2, 200); // Name
  sheet.setColumnWidth(3, 200); // Company
  sheet.setColumnWidth(4, 150); // Phone
  sheet.setColumnWidth(5, 250); // Email
  sheet.setColumnWidth(6, 250); // Cargo Type
  sheet.setColumnWidth(7, 200); // Origin
  sheet.setColumnWidth(8, 200); // Destination
  sheet.setColumnWidth(9, 400); // Details
  
  // Freeze header row
  sheet.setFrozenRows(1);
  
  // Add data validation for cargo type
  const cargoTypes = [
    "Wind turbine tower sections",
    "Nacelle / turbine components",
    "Transformer / substation equipment",
    "Wind turbine blades (enquiry)",
    "Other ODC / heavy cargo"
  ];
  
  const rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(cargoTypes)
    .setAllowInvalid(false)
    .build();
  
  sheet.getRange(2, 6, sheet.getMaxRows(), 1).setDataValidation(rule);
}

// Optional: Send email notification on new submission
function sendEmailNotification(name, company, email, phone, cargoType) {
  const recipient = "oneekamedh@gmail.com";
  const subject = `New Enquiry from ${name} - ${company}`;
  
  const body = `
    New contact form submission:
    
    Name: ${name}
    Company: ${company}
    Email: ${email}
    Phone: ${phone}
    Cargo Type: ${cargoType}
    
    Check the Google Sheet for full details.
  `;
  
  MailApp.sendEmail(recipient, subject, body);
}
