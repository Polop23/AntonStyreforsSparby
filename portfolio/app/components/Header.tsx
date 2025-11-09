'use client' // This component needs to know the current path

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/work-hard', label: 'Work Hard' },
  { href: '/play-hard', label: 'Play Hard' },
  { href: '/think-big', label: 'Think Big' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full bg-base-100/80 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto flex max-w-5xl items-center justify-between p-6">
        <Link 
          href="/" 
          className="font-heading text-xl font-bold text-gray-900 transition-colors hover:text-primary-start"
        >
          My Portfolio
        </Link>
        <div className="flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  font-heading text-lg font-medium transition-all
                  ${
                    isActive
                      ? 'text-primary-start'
                      : 'text-gray-700 hover:text-primary-start'
                  }
                `}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </nav>
    </header>
  )
}