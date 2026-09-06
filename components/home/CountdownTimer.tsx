'use client'

import { useEffect, useState } from 'react'

function getInitialTime() {
  // Random urgency: 2–5 hours from now, persisted in sessionStorage
  if (typeof window !== 'undefined') {
    const stored = sessionStorage.getItem('bellacura_countdown')
    if (stored) {
      const end = parseInt(stored, 10)
      if (end > Date.now()) return end
    }
  }
  const hoursAhead = 2 + Math.random() * 3   // 2–5 hours
  const end = Date.now() + hoursAhead * 60 * 60 * 1000
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('bellacura_countdown', String(end))
  }
  return end
}

export default function CountdownTimer() {
  const [endTime, setEndTime] = useState<number | null>(null)
  const [remaining, setRemaining] = useState(0)

  useEffect(() => {
    const end = getInitialTime()
    setEndTime(end)
    setRemaining(Math.max(0, end - Date.now()))

    const interval = setInterval(() => {
      setRemaining((r) => Math.max(0, r - 1000))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const hours   = Math.floor(remaining / (1000 * 60 * 60))
  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((remaining % (1000 * 60)) / 1000)

  const pad = (n: number) => String(n).padStart(2, '0')

  if (endTime === null) {
    return <div className="countdown-box h-16 animate-pulse bg-rose-50 rounded-2xl w-64" />
  }

  return (
    <div className="countdown-box w-fit">
      <div className="countdown-unit">
        <div className="countdown-num">{pad(hours)}</div>
        <div className="countdown-label">ore</div>
      </div>
      <span className="countdown-sep">:</span>
      <div className="countdown-unit">
        <div className="countdown-num">{pad(minutes)}</div>
        <div className="countdown-label">min</div>
      </div>
      <span className="countdown-sep">:</span>
      <div className="countdown-unit">
        <div className="countdown-num">{pad(seconds)}</div>
        <div className="countdown-label">sec</div>
      </div>
    </div>
  )
}
