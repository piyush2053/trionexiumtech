import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let W, H

    const GREEN = '#6DC726'
    const particles = []
    const PARTICLE_COUNT = 80
    const connections = []

    function resize() {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }

    function rand(min, max) { return Math.random() * (max - min) + min }

    function initParticles() {
      particles.length = 0
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: rand(0, W), y: rand(0, H),
          vx: rand(-0.25, 0.25), vy: rand(-0.25, 0.25),
          r: rand(1, 2.5),
          alpha: rand(0.3, 0.8),
        })
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)

      // Draw grid
      ctx.strokeStyle = 'rgba(109,199,38,0.04)'
      ctx.lineWidth = 1
      const step = 60
      for (let x = 0; x < W; x += step) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke()
      }
      for (let y = 0; y < H; y += step) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
      }

      // Update & draw particles
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = W
        if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H
        if (p.y > H) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(109,199,38,${p.alpha})`
        ctx.fill()

        // Connections
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x, dy = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(109,199,38,${(1 - dist / 120) * 0.15})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      })

      animId = requestAnimationFrame(draw)
    }

    resize()
    initParticles()
    draw()

    const ro = new ResizeObserver(() => { resize(); initParticles() })
    ro.observe(canvas)

    return () => { cancelAnimationFrame(animId); ro.disconnect() }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="hero-canvas"
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  )
}
