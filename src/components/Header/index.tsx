import { Logo } from '../Logo'
import { SocialMedia } from '../social-media'
import { BudgetButton } from '../buttons/budget-button'
import { Menu } from 'lucide-react'

export function Header() {
  return (
    <header className="z-10 max-w-screen-xl w-full items-center justify-between font-mono text-sm flex fixed px-5">
      <div className="lg:hidden">
        <Menu size={30} />
      </div>

      <Logo height={90} width={180} />

      <div className="lg:hidden px-4"></div>

      <div className="max-lg:hidden flex items-center space-x-3 max-lg:justify-center">
        <SocialMedia />
        <BudgetButton />
      </div>
    </header>
  )
}
