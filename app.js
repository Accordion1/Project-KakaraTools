gsap.registerPlugin(ScrollTrigger);

/* NAV */
gsap.from(".nav", {
  y: -30,
  opacity: 0,
  duration: 0.6,
  ease: "power2.out"
});

/* HERO */
gsap.from(".hero", {
  opacity: 0,
  y: 40,
  duration: 0.8,
  delay: 0.2,
  ease: "power3.out"
});

/* QUICK ACCESS */
gsap.from(".quick-card", {
  scrollTrigger: {
    trigger: ".quick-access",
    start: "top 80%"
  },
  opacity: 0,
  y: 30,
  stagger: 0.15,
  duration: 0.6,
  ease: "power2.out"
});

/* CATEGORIES */
gsap.from(".categories-card", {
  scrollTrigger: {
    trigger: ".category-grid",
    start: "top 80%"
  },
  opacity: 0,
  y: 40,
  stagger: 0.12,
  duration: 0.7,
  ease: "power2.out"
});

/* FEATURED */
gsap.from(".tool-card", {
  scrollTrigger: {
    trigger: ".featured-grid",
    start: "top 80%"
  },
  opacity: 0,
  y: 40,
  stagger: 0.15,
  duration: 0.7,
  ease: "power2.out"
});
