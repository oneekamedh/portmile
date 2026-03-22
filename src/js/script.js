// Portmile Website - Main JavaScript File
// Uses CONFIG from config.js for dynamic content

// ============== DYNAMIC CONTENT RENDERING ==============

// Render Navigation Menu from CONFIG
function renderNavigation() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.innerHTML = CONFIG.navigation.map(item => 
            `<a href="${item.href}" class="text-gray-700 hover:text-gray-900">${item.name}</a>`
        ).join('');
        // Update first link to be blue
        const firstLink = navMenu.querySelector('a');
        if (firstLink) {
            firstLink.className = 'text-blue-600 font-medium hover:text-blue-700';
        }
    }
}

// Render Services from CONFIG
function renderServices() {
    const servicesContainer = document.querySelector('[id="work"] .grid');
    if (servicesContainer) {
        servicesContainer.innerHTML = CONFIG.services.map(service => `
            <div class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div class="h-48 bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white text-4xl font-bold">
                    ${service.emoji}
                </div>
                <div class="p-6">
                    <span class="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">${service.category}</span>
                    <h3 class="text-xl font-bold mb-2">${service.title}</h3>
                    <p class="text-gray-600">${service.description}</p>
                </div>
            </div>
        `).join('');
    }
}

// Render Capabilities from CONFIG
function renderCapabilities() {
    const capsContainer = document.querySelector('[id="About"] .grid.md\\:grid-cols-2, [class*="capabilities"] .grid');
    // Find the capabilities section more reliably
    const allSections = document.querySelectorAll('section');
    let capsSection = null;
    
    for (let section of allSections) {
        if (section.textContent.includes('Our Capabilities')) {
            capsSection = section.querySelector('.grid.md\\:grid-cols-2');
            break;
        }
    }
    
    if (capsSection) {
        capsSection.innerHTML = CONFIG.capabilities.map(cap => `
            <div class="bg-white p-6 rounded-lg border border-blue-100 hover:shadow-lg transition">
                <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="${cap.icon}"/>
                        </svg>
                    </div>
                    <h4 class="font-bold text-gray-900">${cap.title}</h4>
                </div>
            </div>
        `).join('');
    }
}

// Render Contact Information from CONFIG
function renderContactInfo() {
    // Replace template variables in HTML with actual values from config
    const htmlContent = document.documentElement.innerHTML;
    const updatedContent = htmlContent
        .replace(/\$\{PHONE_NUMBER\}/g, CONFIG.contact.phone)
        .replace(/\$\{EMAIL_ADDRESS\}/g, CONFIG.contact.email);
    document.documentElement.innerHTML = updatedContent;
    
    // Update WhatsApp link
    const whatsappLink = document.querySelector('[data-config="whatsapp-link"]');
    if (whatsappLink) {
        whatsappLink.href = `https://wa.me/${CONFIG.contact.whatsappNumber}?text=Hello%20Portmile%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services`;
    }
    
    // Update Email link
    const emailLink = document.querySelector('[data-config="email-link"]');
    if (emailLink) {
        emailLink.href = `mailto:${CONFIG.contact.email}?subject=Inquiry%20about%20Portmile%20Services&body=Hello%20Portmile%2C%0A%0AI%20would%20like%20to%20inquire%20about%20your%20services.`;
    }
    
    // Update Phone link
    const phoneLink = document.querySelector('[data-config="phone-link"]');
    if (phoneLink) {
        phoneLink.href = `tel:${CONFIG.contact.phone}`;
    }
    
    // Update all display text elements with data-config="email-display"
    document.querySelectorAll('[data-config="email-display"]').forEach(el => {
        el.textContent = CONFIG.contact.email;
    });
    
    // Update all display text elements with data-config="phone-display"
    document.querySelectorAll('[data-config="phone-display"]').forEach(el => {
        el.textContent = CONFIG.contact.phone;
    });
    
    // Update all display text elements with data-config="whatsapp-display"
    document.querySelectorAll('[data-config="whatsapp-display"]').forEach(el => {
        el.textContent = CONFIG.contact.phone;
    });
}

// ============== CONTACT FUNCTIONALITY ==============

// Create Contact Us Modal
function createContactModal() {
    const modal = document.createElement('div');
    modal.id = 'contactModal';
    modal.className = 'hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center';
    
    modal.innerHTML = `
        <div class="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-xl">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold text-gray-900">Contact Us</h2>
                <button class="closeModal text-gray-500 hover:text-gray-900 text-2xl">×</button>
            </div>
            
            <div class="space-y-4">
                <!-- WhatsApp Button -->
                <a href="https://wa.me/${CONFIG.contact.whatsappNumber}?text=Hello%20Portmile%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services" 
                   target="_blank" 
                   class="flex items-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.951 1.263.978.978 0 00-.399 1.33c.176.308.549.527.913.569 1.321.155 2.641-.379 3.887-1.29.232-.172.443-.357.648-.552.273-.25.536-.516.788-.789.098-.1.188-.205.273-.318a.977.977 0 00.063-1.21.978.978 0 00-1.219-.063zM12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"/>
                    </svg>
                    <span>Chat on WhatsApp</span>
                </a>
                
                <!-- Email Button -->
                <a href="mailto:${CONFIG.contact.email}?subject=Inquiry%20about%20Portmile%20Services&body=Hello%20Portmile%2C%0A%0AI%20would%20like%20to%20inquire%20about%20your%20services." 
                   class="flex items-center gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <span>Send Email</span>
                </a>
                
                <!-- Phone Button -->
                <a href="tel:${CONFIG.contact.phone}" 
                   class="flex items-center gap-3 w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.8c.164.99.738 2.946 1.959 4.167l-2.332 2.332c-.604-.604-1.42-1.551-1.921-2.721C5.09 6.75 5 5.468 5 4a2 2 0 012-2h2m0 0a1 1 0 001-1V2a1 1 0 10-2 0v1a1 1 0 001 1h2m9-1a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1h-2a1 1 0 01-1-1V2a1 1 0 112 0v1a1 1 0 001 1h2z"/>
                    </svg>
                    <span>Call Us</span>
                </a>
            </div>
            
            <!-- Contact Details -->
            <div class="mt-6 pt-6 border-t border-gray-200">
                <h3 class="font-semibold text-gray-900 mb-3">Contact Details</h3>
                <div class="space-y-2 text-sm text-gray-600">
                    <p><strong>Email:</strong> ${CONFIG.contact.email}</p>
                    <p><strong>Phone:</strong> ${CONFIG.contact.phone}</p>
                    <p><strong>Location:</strong> ${CONFIG.contact.location}</p>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    modal.querySelector('.closeModal').addEventListener('click', () => {
        modal.classList.add('hidden');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
    
    return modal;
}

// Initialize all dynamic content on page load
window.addEventListener('DOMContentLoaded', () => {
    renderNavigation();
    renderCapabilities();
    renderServices();
    renderContactInfo();
    
    // Create and setup contact modal
    const contactModal = createContactModal();
    
    // Create floating contact button
    const floatingButton = document.createElement('button');
    floatingButton.id = 'floatingContactBtn';
    floatingButton.className = 'fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg z-40 transition transform hover:scale-110';
    floatingButton.innerHTML = `
        <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.8c.164.99.738 2.946 1.959 4.167l-2.332 2.332c-.604-.604-1.42-1.551-1.921-2.721C5.09 6.75 5 5.468 5 4a2 2 0 012-2h2m0 0a1 1 0 001-1V2a1 1 0 10-2 0v1a1 1 0 001 1h2m9-1a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1h-2a1 1 0 01-1-1V2a1 1 0 112 0v1a1 1 0 001 1h2z"/>
        </svg>
    `;
    floatingButton.title = 'Contact Us';
    document.body.appendChild(floatingButton);
    
    // Add click handler to floating button
    floatingButton.addEventListener('click', (e) => {
        e.preventDefault();
        contactModal.classList.toggle('hidden');
    });
});

// DOM Elements
const trackingInput = document.getElementById('trackingInput');
const trackBtn = document.getElementById('trackBtn');
const trackingResults = document.getElementById('trackingResults');
const trackingStatus = document.getElementById('trackingStatus');
const trackingTimeline = document.getElementById('trackingTimeline');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');

// ============== TRACKING FUNCTIONALITY ==============
trackBtn.addEventListener('click', handleTracking);

trackingInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleTracking();
    }
});

function handleTracking() {
    const trackingId = trackingInput.value.trim().toUpperCase();
    
    if (!trackingId) {
        alert('Please enter a tracking ID');
        return;
    }
    
    if (CONFIG.trackingData[trackingId]) {
        displayTrackingResults(trackingId);
    } else {
        alert('Tracking ID not found. Try PM2024001 or PM2024002');
    }
}

function displayTrackingResults(trackingId) {
    const data = CONFIG.trackingData[trackingId];
    
    const statusColorMap = {
        'green': 'green',
        'yellow': 'yellow',
        'blue': 'blue'
    };
    
    const colorClass = statusColorMap[data.statusColor] || 'blue';
    
    // Display status
    const statusHTML = `
        <div class="p-6 rounded-lg border-2 border-${colorClass}-200 bg-${colorClass}-50">
            <div class="flex items-center justify-between mb-4">
                <div>
                    <h3 class="text-2xl font-bold text-gray-900">Tracking ID: ${trackingId}</h3>
                    <p class="text-gray-600 mt-1">${data.cargoType}</p>
                </div>
                <div class="text-right">
                    <span class="inline-block bg-${colorClass}-600 text-white px-4 py-2 rounded-full font-semibold">
                        ${data.status}
                    </span>
                </div>
            </div>
            <div class="grid md:grid-cols-4 gap-4 mt-4">
                <div>
                    <p class="text-sm text-gray-600">Origin</p>
                    <p class="font-semibold text-gray-900">${data.origin}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-600">Destination</p>
                    <p class="font-semibold text-gray-900">${data.destination}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-600">Expected Delivery</p>
                    <p class="font-semibold text-gray-900">${formatDate(data.expectedDelivery)}</p>
                </div>
                <div>
                    <p class="text-sm text-gray-600">Status</p>
                    <p class="font-semibold text-${colorClass}-600">${data.status}</p>
                </div>
            </div>
        </div>
    `;
    
    trackingStatus.innerHTML = statusHTML;
    
    // Display timeline
    const timelineHTML = data.timeline.map((event) => `
        <div class="mb-8 relative">
            <div class="absolute -left-10 w-6 h-6 rounded-full border-4 border-white ${event.completed ? 'bg-blue-600' : 'bg-gray-300'}"></div>
            <div>
                <h4 class="font-bold text-gray-900">${event.location}</h4>
                <p class="text-gray-600">${event.date}</p>
            </div>
        </div>
    `).join('');
    
    trackingTimeline.innerHTML = timelineHTML;
    
    // Show results
    trackingResults.classList.remove('hidden');
    trackingResults.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// ============== NAVIGATION & SMOOTH SCROLLING ==============

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============== ANIMATIONS ==============

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards on page load
window.addEventListener('load', () => {
    document.querySelectorAll('.grid > div').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

console.log('✅ Portmile tracking & contact system loaded successfully!');
console.log('Contact: ' + CONFIG.contact.email + ' | ' + CONFIG.contact.phone);
