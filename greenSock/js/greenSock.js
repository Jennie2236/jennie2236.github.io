gsap.from(".chucked", {
    duration: 5, 
    rotation: 720,
    x: -500,
    y: -500,
    ease: "elastic",
    stagger: 0.5,
});

gsap.from(".healine", {
    duration: 2.5,
    opacity: 0,
    y: 300,
    stagger: 0.3,
});