import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  })
}

export function useCounter(ref, target, duration = 2000) {
  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const start = performance.now()
          const update = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            ref.current.textContent = Math.round(eased * target) + (target >= 50 ? '+' : '')
            if (progress < 1) requestAnimationFrame(update)
          }
          requestAnimationFrame(update)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, target, duration])
}
