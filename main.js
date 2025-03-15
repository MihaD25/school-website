window.onscroll = function () {
    let navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};



const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarTogglerDemo02');
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        bsCollapse.hide();
    });
});

const multipleCardCarousels = document.querySelectorAll('.testimonials-carousel');

multipleCardCarousels.forEach(multipleCardCarousel => {
    if (window.matchMedia('(min-width: 768px)').matches) {
        const carousel = new bootstrap.Carousel(multipleCardCarousel, {
            interval: false,
        });

        const carouselWidth = multipleCardCarousel.querySelector('.carousel-inner').scrollWidth;
        const cardWidth = multipleCardCarousel.querySelector('.carousel-item').offsetWidth;
        let scrollPosition = 0;

        multipleCardCarousel.querySelector('.carousel-control-next').addEventListener('click', function () {
            if (scrollPosition < carouselWidth - cardWidth * 4) {
                scrollPosition += cardWidth;
                multipleCardCarousel.querySelector('.carousel-inner').scrollTo({ left: scrollPosition, behavior: 'smooth' });
            }
        });
        multipleCardCarousel.querySelector('.carousel-control-prev').addEventListener('click', function () {
            if (scrollPosition > 0) {
                scrollPosition -= cardWidth;
                multipleCardCarousel.querySelector('.carousel-inner').scrollTo({ left: scrollPosition, behavior: 'smooth' });
            }
        });
    } else {
        multipleCardCarousel.classList.add('slide');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                animateCounter(counter);
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        let current = target * 0.7;
        const increment = (target - current) / 80;

        const isPercentage = counter.innerText.includes('%');
        const hasPlus = counter.innerText.includes('+');

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.innerText = (isPercentage ? Math.ceil(current) + '%' : Math.ceil(current)) + (hasPlus && !isPercentage ? '+' : '');
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = (isPercentage ? target + '%' : target) + (hasPlus && !isPercentage ? '+' : '');
                counter.classList.add('animate');
            }
        };

        updateCounter();
    };
});
