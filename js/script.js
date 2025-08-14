console.log("JavaScript is connected");


const promoData = [
    {
        id: 'promo1',
        title: '2 for 1 Deal Details',
        description: 'This is a limited-time offer! Buy any two Burple drinks and only pay for one. The discount will be automatically applied at checkout. Offer valid while supplies last.'
    },
    {
        id: 'promo2',
        title: 'Free Shipping Promotion',
        description: 'Enjoy free standard shipping on all orders over $25. No promo code is necessary, the offer will be applied automatically at checkout once your cart meets the minimum requirement.'
    },
    {
        id: 'promo3',
        title: 'Welcome Discount for New Customers',
        description: 'As a thank you for joining the Burple family, we are giving you 20% off your first purchase. The discount is valid for one-time use and will be applied to your first order.'
    }
];


const promoButtons = document.querySelectorAll('.promo-button');
const lightbox = document.getElementById('promo-lightbox');
const promoDetails = document.getElementById('promo-details');
const closeBtn = lightbox ? lightbox.querySelector('.close-btn') : null;

const burgerButton = document.getElementById('burger-btn');
const navLinks = document.getElementById('nav-links');
const navSearch = document.getElementById('nav-search');

const video = document.getElementById('hero-video');
const volumeButton = document.getElementById('volume-btn');
const rewindButton = document.getElementById('rewind-btn');
const volumeIcon = document.getElementById('volume-icon');


function showLightbox(title, description) {
    promoDetails.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
    `;
    lightbox.classList.add('active');
}

function hideLightbox() {
    lightbox.classList.remove('active');
}


document.addEventListener('DOMContentLoaded', () => {

  
    promoButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const promoId = event.target.closest('.promo-item').dataset.promo;
            const promo = promoData.find(item => item.id === promoId);
            if (promo) {
                showLightbox(promo.title, promo.description);
            }
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', hideLightbox);
    }

    window.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            hideLightbox();
        }
    });

    
    if (burgerButton) {
        burgerButton.addEventListener('click', () => {
            const isExpanded = burgerButton.getAttribute('aria-expanded') === 'true' || false;
            burgerButton.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('active', !isExpanded);
            navSearch.classList.toggle('active', !isExpanded);
        });
    }

    if (video) {
      
        video.muted = true;

      
        if (volumeButton && volumeIcon) {
            volumeButton.addEventListener('click', () => {
                video.muted = !video.muted;
                if (video.muted) {
                    volumeIcon.innerHTML = '<path d="M3 9v6h4l5 5V4L7 9H3z"/>';
                } else {
                    volumeIcon.innerHTML = '<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.81 5 3.54 5 6.71s-2.11 5.9-5 6.71v2.06c4.01-.98 7-4.88 7-8.77s-2.99-7.79-7-8.77z"/>';
                }
            });
        }

      
        if (rewindButton) {
            rewindButton.addEventListener('click', () => {
                video.currentTime -= 5;
            });
        }
    }
});
