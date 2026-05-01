import { useRef, useEffect } from 'react'

export default function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const update = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = Math.round(eased * target)
            if (ref.current) ref.current.textContent = current + suffix
            if (progress < 1) requestAnimationFrame(update)
          }
          requestAnimationFrame(update)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, suffix, duration])

  return <span ref={ref}>0{suffix}</span>
}
