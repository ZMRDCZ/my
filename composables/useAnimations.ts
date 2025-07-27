import { gsap } from 'gsap'

export const useAnimations = () => {
  // Fade in animation with stagger
  const fadeInElements = (selector: string, delay: number = 0) => {
    gsap.fromTo(selector, 
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        stagger: 0.2,
        ease: "power2.out"
      }
    )
  }

  // Slide in from left
  const slideInLeft = (selector: string, delay: number = 0) => {
    gsap.fromTo(selector,
      {
        opacity: 0,
        x: -50
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        delay,
        ease: "power2.out"
      }
    )
  }

  // Slide in from right
  const slideInRight = (selector: string, delay: number = 0) => {
    gsap.fromTo(selector,
      {
        opacity: 0,
        x: 50
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        delay,
        ease: "power2.out"
      }
    )
  }

  // Scale in animation
  const scaleIn = (selector: string, delay: number = 0) => {
    gsap.fromTo(selector,
      {
        opacity: 0,
        scale: 0.8
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        delay,
        ease: "back.out(1.7)"
      }
    )
  }

  // Floating animation
  const floatingAnimation = (selector: string) => {
    gsap.to(selector, {
      y: -10,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "power2.inOut"
    })
  }

  // Pulse animation for highlights
  const pulseAnimation = (selector: string) => {
    gsap.to(selector, {
      scale: 1.05,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "power2.inOut"
    })
  }

  // Type writer effect
  const typeWriter = (element: HTMLElement, text: string, speed: number = 50) => {
    element.innerHTML = ''
    let i = 0
    
    const timer = setInterval(() => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i)
        i++
      } else {
        clearInterval(timer)
      }
    }, speed)
  }

  // Neon glow animation
  const neonGlow = (selector: string) => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true })
    
    tl.to(selector, {
      textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
      duration: 2,
      ease: "power2.inOut"
    })
    .to(selector, {
      textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
      duration: 2,
      ease: "power2.inOut"
    })
  }

  // Card hover animations
  const cardHoverEffects = (cardSelector: string) => {
    const cards = document.querySelectorAll(cardSelector)
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        })
      })
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        })
      })
    })
  }

  // Loading animation
  const loadingAnimation = () => {
    const tl = gsap.timeline()
    
    // Animate page load
    tl.fromTo('.app-layout', 
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    )
    .fromTo('.hero-section', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.3"
    )
    
    return tl
  }

  // Scroll-triggered animations
  const initScrollAnimations = () => {
    // Check if we're in browser and GSAP is available
    if (typeof window !== 'undefined') {
      // We'll implement ScrollTrigger animations when the plugin is available
      gsap.utils.toArray('.fade-in').forEach((element: any) => {
        gsap.fromTo(element, 
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2
          }
        )
      })
    }
  }

  // Counter animation
  const animateCounter = (element: HTMLElement, endValue: number, duration: number = 2) => {
    const obj = { value: 0 }
    gsap.to(obj, {
      value: endValue,
      duration,
      ease: "power2.out",
      onUpdate: function() {
        element.innerHTML = Math.ceil(obj.value).toString()
      }
    })
  }

  // Timeline animation for achievements
  const timelineAnimation = (selector: string) => {
    const items = gsap.utils.toArray(`${selector} .timeline-item`)
    
    items.forEach((item: any, index: number) => {
      gsap.fromTo(item,
        {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      )
    })
  }

  return {
    fadeInElements,
    slideInLeft,
    slideInRight,
    scaleIn,
    floatingAnimation,
    pulseAnimation,
    typeWriter,
    neonGlow,
    cardHoverEffects,
    loadingAnimation,
    initScrollAnimations,
    animateCounter,
    timelineAnimation
  }
} 