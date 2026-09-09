'use client'

import { useEffect, useState } from 'react'

function getMidnightEnd(): number {
  const now = new Date()
  const midnight = new Date(now)
  midnight.setHours(23, 59, 59, 999)
  return midnight.getTime()
}

function TimerDisplay({ h, m, s }: { h: string; m: string; s: string }) {
  const pad = (n: string) => n.padStart(2, '0')
  return (
    <div className="countdown-box w-fit">
      <div className="countdown-unit">
        <div className="countdown-num">{pad(h)}</div>
        <div className="countdown-label">ore</div>
      </div>
      <span className="countdown-sep">:</span>
      <div className="countdown-unit">
        <div className="countdown-num">{pad(m)}</div>
        <div className="countdown-label">min</div>
      </div>
      <span className="countdown-sep">:</span>
      <div className="countdown-unit">
        <div className="countdown-num">{pad(s)}</div>
        <div className="countdown-label">sec</div>
      </div>
    </div>
  )
}

export default function CountdownTimer() {
  const [remaining, setRemaining] = useState<number | null>(null)

  useEffect(() => {
    const end = getMidnightEnd()
    const calc = () => Math.max(0, end - Date.now())
    setRemaining(calc())
    const interval = setInterval(() => setRemaining(calc()), 1000)
    return () => clearInterval(interval)
  }, [])

  const pad = (n: number) => String(n).padStart(2, '0')

  if (remaining === null) {
    return <TimerDisplay h="--" m="--" s="--" />
  }

  const h = pad(Math.floor(remaining / 3600000))
  const m = pad(Math.floor((remaining % 3600000) / 60000))
  const s = pad(Math.floor((remaining % 60000) / 1000))

  return <TimerDisplay h={h} m={m} s={s} />
}
