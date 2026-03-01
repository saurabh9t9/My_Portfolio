window.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Split hero text for reveal
    const typeTarget = document.querySelector(".data h1");
    new SplitType(typeTarget, { types: "words" });

    gsap.from(".data h1 .word", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.7)",
    });

    // Typewriter effect for subtitle
    const subtitle = document.querySelector(".data h5");
    const originalText = subtitle.textContent;
    subtitle.textContent = "";

    let i = 0;
    function typeWriter() {
      if (i < originalText.length) {
        subtitle.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 20);
      }
    }
    typeWriter();
 


       gsap.from("header", {
      x: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      delay: .3,
      ease: "power2.out",
    });


    // Language Icons and Paragraphs
    gsap.from(".data p", {
      x: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      delay: 1.5,
      ease: "power2.out",
    });

    // Hero Image - Pop
    gsap.from(".circle img", {
      duration: 0.6,
      scale: 0,
      opacity: 0,
      ease: "power.out",
      delay: 1,
    });

    // ABOUT LEFT - scroll & parallax motion
    gsap.from("#about-left", {
      scrollTrigger: {
        trigger: "#about-left",
        start: "top 70%",
        end: "top 20%",
         toggleActions: "play reverse play reverse",
        scrub: true,
      },
      x: 200,
      opacity: 0,
      duration: 3,
      ease: "power2.out",
    });

    // ABOUT RIGHT - scroll & parallax motion
    gsap.from("#about-right", {
      scrollTrigger: {
        trigger: "#about-right",
        start: "top 70%",
        end: "top 20%",
         toggleActions: "play reverse play reverse",
        scrub: true,
      },
      x: -200,
      opacity: 0,
      ease: "power2.out",
    });

    // PROJECTS SECTION ANIMATION
    gsap.from(".projects h2", {
      scrollTrigger: {
        trigger: ".projects",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(".project-card", {
      scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 75%",
      },
      opacity: 0,
      y: 80,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });

    // SCHOOLING SECTION ANIMATION
    gsap.from(".schooling h2", {
      scrollTrigger: {
        trigger: ".schooling",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(".timeline-item", {
      scrollTrigger: {
        trigger: ".schooling-timeline",
        start: "top 70%",
      },
      opacity: 0,
      y: 60,
      duration: 0.8,
      stagger: 0.3,
      ease: "power2.out",
    });

    // CONTACT SECTION FADE UP
    gsap.from(".contact-section", {
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 85%",
        toggleActions: "play reverse play reverse",
      },
      y: 150,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    // FORM FIELD STAGGER ANIMATION
    gsap.from(".contact-section .form-control", {
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 90%",
      },
      opacity: 0,
      y: 60,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });
  });
 const form = document.querySelector(".contact-section form");

form.addEventListener("submit", function () {
  setTimeout(() => {
    form.reset();  
  }, 100);
});