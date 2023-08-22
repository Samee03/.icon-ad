// Fade in out animation controller
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade-in-out');

    const options = {
        root: null,
        rootMargin: '50px',
        threshold: 0.3, // Adjust this threshold as needed
    };

    const fadeInOutObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.remove('visible');
                entry.target.classList.add('hidden');
            }
        });
    }, options);

    fadeElements.forEach(element => {
        fadeInOutObserver.observe(element);
    });
});

// Cards section animation controller using gsap
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".card-section");

    const stopPanel = sections.findIndex((section) => section.dataset.pin);

    const tl = gsap.timeline({
        defaults: {
            ease: "none"
        },
        scrollTrigger: {
            trigger: ".our-vision",
            pin: true,
            scrub: 0.5,
            end: "+=4000",
        }
    }).to(sections, {
        yPercent: +(50 * stopPanel),
        duration: stopPanel,
    }).to(".fade-out-text", {
        opacity: 0, y: 25,
        ease: "power2.out",
        duration: 1,
    }).to(sections, {
        yPercent: -(15 * (sections.length + 10)),
        duration: sections.length - stopPanel,
    });
});

// Text section animation controller using gsap
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".marquee-container");

    const stopPanel = sections.findIndex((section) => section.dataset.pin);

    const tl = gsap.timeline({
        defaults: {
            ease: "none"
        },
        scrollTrigger: {
            trigger: ".our-company",
            pin: true,
            scrub: 0.5,
            end: "+=4000",
        }
    }).to(sections, {
        xPercent: -(120 * stopPanel),
        duration: stopPanel,
    }).to(".fade-out-text", {
        opacity: 0, y: 25,
        ease: "power2.out",
        duration: 1,
    }).to(sections, {
        xPercent: -(60 * (sections.length - 1)),
        duration: sections.length - stopPanel,
    });
});
let scrollText = document.querySelector(".marquee-container");
window.onscroll = () => {
    let pos = window.scrollY;
    scrollText.style.left = `-${pos / 7}px`;
}
