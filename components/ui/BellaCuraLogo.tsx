import { Pinyon_Script } from 'next/font/google'
import Link from 'next/link'

const pinyonScript = Pinyon_Script({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function BellaCuraLogo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: { script: 'text-3xl', tagline: 'text-[9px]' },
    md: { script: 'text-4xl', tagline: 'text-[10px]' },
    lg: { script: 'text-5xl', tagline: 'text-xs' },
  }

  return (
    <Link href="/" className="flex flex-col items-center leading-none group">
      <span
        className={`${pinyonScript.className} ${sizes[size].script} text-[#152840] group-hover:text-[#152840] transition-colors`}
        style={{ lineHeight: 1 }}
      >
        BellaCura
      </span>
      <span
        className={`${sizes[size].tagline} tracking-[0.25em] uppercase text-[#457B9D] group-hover:text-[#457B9D] transition-colors mt-1`}
      >
        Tecnologia · Benessere · Bellezza
      </span>
    </Link>
  )
}
