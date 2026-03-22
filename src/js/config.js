// Configuration File for Portmile Website
// This file contains all dynamic content that can be easily modified

// ============== CREDENTIALS & SENSITIVE DATA ==============
// Define all phone numbers and emails as variables for easy maintenance
const PHONE_NUMBER = "+91 7977180414";
const WHATSAPP_NUMBER = "917977180414"; // Format: country code + number without +
const EMAIL_ADDRESS = "info@portmile.com";

const CONFIG = {
  // Company Information
  company: {
    name: "Portmile",
    parentCompany: "Bipin Transport",
    tagline: "Specialized Logistics for Renewable Energy & Heavy Cargo",
    description: "Expert logistics for renewable energy infrastructure. From wind turbine blades to heavy industrial cargo, we deliver with precision across India.",
    logoPath: "assets/icons/portmile-logo.svg",
    faviconPath: "assets/icons/favicon.svg"
  },

  // Contact Information - Uses variables defined above
  contact: {
    email: EMAIL_ADDRESS,
    phone: PHONE_NUMBER,
    whatsappNumber: WHATSAPP_NUMBER,
    address: "India",
    location: "Across India"
  },

  // Navigation Items
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Our Work", href: "#work" },
    { name: "Track Shipment", href: "#track" }
  ],

  // Key Industries - Now supports both SVG paths and image assets
  industries: [
    {
      icon: "M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6-4a2 2 0 100-4 2 2 0 000 4z",
      iconType: "path", // 'path' for SVG path, 'image' for asset path
      name: "Renewable Energy"
    },
    {
      icon: "M10.5 1.5H5.75A2.25 2.25 0 003.5 3.75v12.5A2.25 2.25 0 005.75 18.5h8.5a2.25 2.25 0 002.25-2.25V8M10.5 1.5v5.25h5.25M10.5 11h4m-4 2.5h4",
      iconType: "path",
      name: "Automotive & Engineering"
    },
    {
      icon: "M8 2a1 1 0 000 2h.01a1 1 0 000-2H8zm0 4a1 1 0 000 2h.01a1 1 0 000-2H8zm0 4a1 1 0 000 2h.01a1 1 0 000-2H8zm0 4a1 1 0 000 2h.01a1 1 0 000-2H8zm4-14a1 1 0 000 2h.01a1 1 0 000-2h-.01zm0 4a1 1 0 000 2h.01a1 1 0 000-2h-.01zm0 4a1 1 0 000 2h.01a1 1 0 000-2h-.01zm0 4a1 1 0 000 2h.01a1 1 0 000-2h-.01z",
      iconType: "path",
      name: "Chemical & Petrochemical"
    },
    {
      icon: "M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 11.894 1.789l-1.33.665 2.331 2.331a1 1 0 11-1.414 1.414L15.88 9.07l1.33.665a1 1 0 11-.894 1.789l-1.599-.8-3.954 1.582V17a1 1 0 11-2 0v-1.323l-3.954-1.582-1.599.8a1 1 0 11-.894-1.789l1.33-.665-2.331-2.331a1 1 0 111.414-1.414L4.12 10.93l-1.33-.665a1 1 0 11.894-1.789l1.599.8 3.954-1.582V3a1 1 0 011-1z",
      iconType: "path",
      name: "Heavy Industries"
    }
  ],

  // Service Cards
  services: [
    {
      id: 1,
      emoji: "⚡",
      category: "Renewable Energy",
      title: "Wind Turbine Blade Transport",
      description: "ODC transport of 60+ meter wind turbine blades across challenging terrain",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      id: 2,
      emoji: "🏭",
      category: "Manufacturing",
      title: "Heavy Industrial Machinery",
      description: "Heavy lift operations for factory equipment and industrial gearboxes",
      gradient: "from-gray-400 to-gray-600"
    },
    {
      id: 3,
      emoji: "🏗️",
      category: "Chemical & Petrochemical",
      title: "Chemical Plant Equipment",
      description: "Specialized handling of chemical processing equipment and storage tanks",
      gradient: "from-gray-800 to-black"
    },
    {
      id: 4,
      emoji: "🚗",
      category: "Automotive",
      title: "Automotive Components Transport",
      description: "Manufacturing equipment and assembly line machinery for automotive sector",
      gradient: "from-red-400 to-red-600"
    },
    {
      id: 5,
      emoji: "📦",
      category: "Import-Export",
      title: "Container Logistics",
      description: "20FT and 40FT container transport with full tracking capabilities",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      id: 6,
      emoji: "🚚",
      category: "ODC Transport",
      title: "Heavy Haul Operations",
      description: "Over-dimensional cargo transport with specialized permits and routing",
      gradient: "from-orange-400 to-orange-600"
    }
  ],

  // Capabilities
  capabilities: [
    {
      icon: "M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
      title: "Full Truck Load (FTL)"
    },
    {
      icon: "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z",
      title: "Import-Export Containers (20FT/40FT)"
    },
    {
      icon: "M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 6H6.28l-.31-1.243A1 1 0 005 4H3z",
      title: "Over Dimensional Cargo (ODC)"
    },
    {
      icon: "M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V5a1 1 0 10-2 0v2.586L8.707 7.293z",
      title: "Heavy Lift Cargo (5+ Tons)"
    },
    {
      icon: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z",
      title: "Project Transportation"
    }
  ],

  // Demo Tracking Data
  trackingData: {
    "PM2024001": {
      id: "PM2024001",
      status: "In Transit",
      statusColor: "yellow",
      origin: "Mumbai Port",
      destination: "Chennai Industrial Hub",
      cargoType: "Wind Turbine Blade Components",
      expectedDelivery: "2026-03-28",
      timeline: [
        { date: "2026-03-20", location: "Picked up from Mumbai", completed: true },
        { date: "2026-03-22", location: "Currently in Transit (Gujarat)", completed: true },
        { date: "2026-03-25", location: "Expected in Madhya Pradesh", completed: false },
        { date: "2026-03-28", location: "Expected Delivery at Chennai", completed: false }
      ]
    },
    "PM2024002": {
      id: "PM2024002",
      status: "Delivered",
      statusColor: "green",
      origin: "Delhi Warehouse",
      destination: "Bangalore Tech Park",
      cargoType: "Heavy Industrial Machinery",
      expectedDelivery: "2026-03-18",
      timeline: [
        { date: "2026-03-10", location: "Picked up from Delhi", completed: true },
        { date: "2026-03-14", location: "Reached Jaipur (Checkpoint 1)", completed: true },
        { date: "2026-03-17", location: "Reached Indore (Checkpoint 2)", completed: true },
        { date: "2026-03-18", location: "Delivered at Bangalore", completed: true }
      ]
    }
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}