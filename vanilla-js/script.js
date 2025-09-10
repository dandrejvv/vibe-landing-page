// Enhanced interactivity and animations for vanilla JS app
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scroll behavior for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add click handlers for CTA buttons
    const ctaPrimary = document.querySelector('.cta-primary');
    const ctaSecondary = document.querySelector('.cta-secondary');
    const loginBtn = document.querySelector('.login-btn');

    if (ctaPrimary) {
        ctaPrimary.addEventListener('click', function() {
            alert('Get Started clicked! This would redirect to signup page.');
        });
    }

    if (ctaSecondary) {
        ctaSecondary.addEventListener('click', function() {
            alert('Pricing clicked! This would show pricing information.');
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            alert('Login clicked! This would open login modal.');
        });
    }

    // Add parallax effect to floating elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-orb, .glow-orb');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Add mouse move effect for background elements
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        // Move background gradients slightly based on mouse position
        const primaryGradient = document.querySelector('.mesh-gradient.primary');
        const secondaryGradient = document.querySelector('.mesh-gradient.secondary');
        
        if (primaryGradient) {
            const translateX = (mouseX - 0.5) * 20;
            const translateY = (mouseY - 0.5) * 20;
            primaryGradient.style.transform = `translate(${translateX}px, ${translateY}px)`;
        }
        
        if (secondaryGradient) {
            const translateX = (mouseX - 0.5) * -15;
            const translateY = (mouseY - 0.5) * -15;
            secondaryGradient.style.transform = `translate(${translateX}px, ${translateY}px)`;
        }
    });

    // Add intersection observer for fade-in animations
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

    // Apply fade-in effect to shader cards
    const shaderCards = document.querySelectorAll('.shader-card');
    shaderCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
        observer.observe(card);
    });

    // Add hover effects for shader cards
    shaderCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(148, 0, 211, 0.2)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Add dynamic particle generation
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'dynamic-particle';
        particle.style.cssText = `
            position: fixed;
            width: 2px;
            height: 2px;
            background: rgba(148, 0, 211, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            animation: particleFloat 8s linear forwards;
        `;
        
        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '110%';
        
        document.body.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 8000);
    }

    // Add CSS for dynamic particles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleFloat {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-110vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Generate particles periodically
    setInterval(createParticle, 3000);

    // Add typing effect to the hero title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Initialize typing effect after a short delay
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const originalText = heroTitle.innerHTML;
            heroTitle.style.opacity = '1';
            // For demo purposes, we'll keep the original HTML structure
            // In a real implementation, you might want to implement a more sophisticated typing effect
        }
    }, 1000);

    // Add resize handler for responsive adjustments
    window.addEventListener('resize', function() {
        // Recalculate positions for floating elements if needed
        const floatingElements = document.querySelectorAll('.floating-orb');
        floatingElements.forEach(element => {
            // Reset any transform that might be affected by resize
            if (window.innerWidth < 768) {
                element.style.transform = 'scale(0.7)';
            } else {
                element.style.transform = 'scale(1)';
            }
        });
    });

    // Add loading animation
    function addLoadingAnimation() {
        const app = document.querySelector('#app');
        app.style.opacity = '0';
        app.style.transition = 'opacity 1s ease-in-out';
        
        setTimeout(() => {
            app.style.opacity = '1';
        }, 100);
    }

    addLoadingAnimation();

    // Add performance optimization for animations
    let ticking = false;
    
    function updateAnimations() {
        // Batch DOM updates here if needed
        ticking = false;
    }
    
    function requestAnimationUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateAnimations);
            ticking = true;
        }
    }

    // Performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
                console.log(`Page loaded in ${loadTime}ms`);
            }, 0);
        });
    }
});

// Add some utility functions
const VanillaShaderApp = {
    // Utility function to create smooth transitions
    smoothTransition: function(element, property, from, to, duration = 300) {
        const start = performance.now();
        const startValue = parseFloat(from);
        const endValue = parseFloat(to);
        const diff = endValue - startValue;
        
        function animate(currentTime) {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = startValue + (diff * easeOut);
            
            element.style[property] = currentValue + (property.includes('opacity') ? '' : 'px');
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }
        
        requestAnimationFrame(animate);
    },
    
    // Utility function to detect device capabilities
    getDeviceCapabilities: function() {
        return {
            hasTouch: 'ontouchstart' in window,
            supportsBlur: CSS.supports('backdrop-filter', 'blur(10px)'),
            supportsGradients: CSS.supports('background', 'linear-gradient(45deg, red, blue)'),
            isHighDPI: window.devicePixelRatio > 1
        };
    },
    
    // Initialize app with device-specific optimizations
    init: function() {
        const capabilities = this.getDeviceCapabilities();
        
        if (!capabilities.supportsBlur) {
            // Fallback for browsers that don't support backdrop-filter
            const blurElements = document.querySelectorAll('[style*="backdrop-filter"]');
            blurElements.forEach(el => {
                el.style.background = 'rgba(0, 0, 0, 0.8)';
            });
        }
        
        if (capabilities.hasTouch) {
            // Add touch-specific styles
            document.body.classList.add('touch-device');
        }
        
        console.log('Vanilla Shader App initialized with capabilities:', capabilities);
    }
};

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    VanillaShaderApp.init();
});
