'use client'

import { useEffect, useRef } from 'react'

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }

    resize()
    window.addEventListener('resize', resize)

    // Architectural building shapes
    const buildings = [
      { x: 0.08, y: 0.95, width: 0.06, height: 0.35, windows: 6 },
      { x: 0.15, y: 0.95, width: 0.08, height: 0.50, windows: 10 },
      { x: 0.24, y: 0.95, width: 0.05, height: 0.28, windows: 5 },
      { x: 0.75, y: 0.95, width: 0.07, height: 0.42, windows: 8 },
      { x: 0.83, y: 0.95, width: 0.09, height: 0.55, windows: 11 },
      { x: 0.93, y: 0.95, width: 0.05, height: 0.30, windows: 6 },
    ]

    const draw = () => {
      const w = window.innerWidth
      const h = window.innerHeight

      // Clear canvas
      ctx.clearRect(0, 0, w, h)

      // Soft gradient mesh background
      const gradient = ctx.createRadialGradient(
        w * 0.3, h * 0.3, 0,
        w * 0.5, h * 0.5, w * 0.8
      )
      gradient.addColorStop(0, '#FAFAF9')
      gradient.addColorStop(0.5, '#F5F5F4')
      gradient.addColorStop(1, '#FAFAF9')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, w, h)

      // Secondary gradient overlay with subtle animation
      const gradient2 = ctx.createRadialGradient(
        w * (0.7 + Math.sin(time * 0.0003) * 0.05),
        h * (0.6 + Math.cos(time * 0.0004) * 0.05),
        0,
        w * 0.5, h * 0.5, w * 0.7
      )
      gradient2.addColorStop(0, 'rgba(29, 78, 216, 0.03)')
      gradient2.addColorStop(0.5, 'rgba(29, 78, 216, 0.01)')
      gradient2.addColorStop(1, 'rgba(29, 78, 216, 0)')
      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, w, h)

      // Third gradient for depth
      const gradient3 = ctx.createRadialGradient(
        w * (0.2 + Math.cos(time * 0.0002) * 0.03),
        h * (0.8 + Math.sin(time * 0.0003) * 0.03),
        0,
        w * 0.3, h * 0.8, w * 0.5
      )
      gradient3.addColorStop(0, 'rgba(120, 113, 108, 0.02)')
      gradient3.addColorStop(1, 'rgba(120, 113, 108, 0)')
      ctx.fillStyle = gradient3
      ctx.fillRect(0, 0, w, h)

      // Draw architectural line buildings
      ctx.strokeStyle = 'rgba(29, 78, 216, 0.08)'
      ctx.lineWidth = 1

      buildings.forEach((building) => {
        const bx = building.x * w
        const by = building.y * h
        const bw = building.width * w
        const bh = building.height * h

        // Building outline
        ctx.beginPath()
        ctx.moveTo(bx, by)
        ctx.lineTo(bx, by - bh)
        ctx.lineTo(bx + bw, by - bh)
        ctx.lineTo(bx + bw, by)
        ctx.stroke()

        // Window rows
        const windowRows = building.windows
        const windowHeight = bh / (windowRows + 1)
        const windowWidth = bw * 0.6
        const windowX = bx + (bw - windowWidth) / 2

        for (let i = 1; i <= windowRows; i++) {
          const wy = by - i * windowHeight
          ctx.beginPath()
          ctx.moveTo(windowX, wy)
          ctx.lineTo(windowX + windowWidth, wy)
          ctx.stroke()
        }

        // Vertical center line
        ctx.beginPath()
        ctx.moveTo(bx + bw / 2, by - bh)
        ctx.lineTo(bx + bw / 2, by - bh * 0.1)
        ctx.stroke()
      })

      // Draw horizontal grid lines (subtle)
      ctx.strokeStyle = 'rgba(29, 78, 216, 0.025)'
      ctx.lineWidth = 1

      for (let i = 0; i < 8; i++) {
        const y = h * 0.3 + (h * 0.6 * i) / 8
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
        ctx.stroke()
      }

      // Draw diagonal perspective lines (very subtle)
      ctx.strokeStyle = 'rgba(29, 78, 216, 0.02)'
      ctx.beginPath()
      ctx.moveTo(w * 0.5, h * 0.4)
      ctx.lineTo(0, h)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(w * 0.5, h * 0.4)
      ctx.lineTo(w, h)
      ctx.stroke()

      time += 16
      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}
