'use client'

import { useEffect, useState } from 'react'

import { Logo } from '../Logo'
import { SocialMedia } from '../social-media'
import { BudgetButton } from '../buttons/budget-button'
import { Menu } from 'lucide-react'

export function Header() {
  const [isScrolledDown, setIsScrolledDown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolledDown(true)
      } else {
        setIsScrolledDown(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    /* Change background on scroll down */
    <header
      className={`z-10 w-full flex justify-center delay-50 transition fixed px-5 ${
        !isScrolledDown
          ? 'bg-transparent'
          : 'bg-gradient-to-tr from-[#126E51] via-[#7ED957] to-yellow-200'
      }`}
    >
      <div className="max-w-screen-xl items-center w-full justify-between font-mono text-sm flex">
        {/* <div className="lg:hidden">
          <Menu size={30} />
        </div> */}

        <Logo height={90} width={180} />

        <div className="lg:hidden px-4"></div>

        <div className="max-lg:hidden flex items-center space-x-3 max-lg:justify-center">
          <SocialMedia />
          <BudgetButton />
        </div>
      </div>
    </header>
  )
}
