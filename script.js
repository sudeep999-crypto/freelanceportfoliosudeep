document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const service = this.querySelector('select').value;
        const message = this.querySelector('textarea').value;
        
        // Compose email
        const subject = `New Project Inquiry: ${service}`;
        const body = `Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
        
        // Open email client
        window.location.href = `mailto:sudeepdas851@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Reset form
        this.reset();
        
        // Show confirmation
        alert('Your message has been prepared. Please send it from your email client.');
    });
    
    // Animation on scroll
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.service-card, .portfolio-card, .skill-item').forEach(el => {
        observer.observe(el);
    });
    
    // Floating animation for profile card
    const profileCard = document.querySelector('.profile-card');
    setInterval(() => {
        profileCard.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            profileCard.style.transform = 'translateY(0)';
        }, 1500);
    }, 3000);
});
