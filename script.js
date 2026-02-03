// ====================================
// Greater Purpose Foundation Website
// Main JavaScript File
// ====================================

// ====================================
// MOBILE MENU TOGGLE
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});

// ====================================
// GALLERY LIGHTBOX
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    
    if (galleryItems.length > 0 && lightbox) {
        // Open lightbox when clicking on gallery item
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                const img = this.querySelector('img');
                const overlay = this.querySelector('.gallery-overlay');
                
                if (img) {
                    lightbox.style.display = 'block';
                    lightboxImg.src = img.src;
                    
                    if (overlay) {
                        const title = overlay.querySelector('h3');
                        const description = overlay.querySelector('p');
                        if (title && description) {
                            lightboxCaption.textContent = title.textContent + ' - ' + description.textContent;
                        }
                    }
                    
                    // Prevent body scroll when lightbox is open
                    document.body.style.overflow = 'hidden';
                }
            });
        });
        
        // Close lightbox
        function closeLightbox() {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        if (lightboxClose) {
            lightboxClose.addEventListener('click', closeLightbox);
        }
        
        // Close on background click
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && lightbox.style.display === 'block') {
                closeLightbox();
            }
        });
    }
});

// ====================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#" or empty
            if (targetId === '#' || !targetId) return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Get the navbar height for offset
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                
                // Calculate position with offset
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                // Smooth scroll
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ====================================
// FORM VALIDATION
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Basic validation
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            let isValid = true;
            
            // Name validation
            if (name && name.value.trim() === '') {
                alert('Please enter your name.');
                name.focus();
                e.preventDefault();
                isValid = false;
                return;
            }
            
            // Email validation
            if (email && email.value.trim() === '') {
                alert('Please enter your email address.');
                email.focus();
                e.preventDefault();
                isValid = false;
                return;
            }
            
            // Simple email format check
            if (email) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email.value)) {
                    alert('Please enter a valid email address.');
                    email.focus();
                    e.preventDefault();
                    isValid = false;
                    return;
                }
            }
            
            // Message validation
            if (message && message.value.trim() === '') {
                alert('Please enter your message.');
                message.focus();
                e.preventDefault();
                isValid = false;
                return;
            }
            
            // If all validations pass, show success message
            // Note: This will only show if not using Formspree (which redirects)
            if (isValid && contactForm.getAttribute('action').includes('mailto:')) {
                alert('Thank you for your message! We will get back to you soon.');
            }
        });
    }
});

// ====================================
// SCROLL TO TOP ON PAGE LOAD
// ====================================
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});

// ====================================
// ADD ACTIVE CLASS TO CURRENT PAGE NAV LINK
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Remove active class from all links first
        link.classList.remove('active');
        
        // Add active class to matching link
        if (href === currentLocation || 
            (currentLocation === '' && href === 'index.html') ||
            (currentLocation === '/' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// ====================================
// FADE-IN ANIMATION ON SCROLL (OPTIONAL)
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    // Check if Intersection Observer is supported
    if ('IntersectionObserver' in window) {
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
        
        // Observe elements that should fade in
        const fadeElements = document.querySelectorAll('.program-card, .testimonial-card, .donation-card, .mission-item');
        
        fadeElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
});

// ====================================
// PREVENT FORM RESUBMISSION ON REFRESH
// ====================================
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// ====================================
// CONSOLE MESSAGE
// ====================================
console.log('%c👋 Welcome to Greater Purpose Foundation Website!', 'color: #2D5016; font-size: 16px; font-weight: bold;');
console.log('%cGiving Back to the Community, Changing Life of Our People', 'color: #7CB342; font-size: 14px;');
console.log('%cWebsite developed with ❤️ for GPF', 'color: #6c757d; font-size: 12px;');

