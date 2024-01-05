import Link from 'next/link'

import { Button } from '../ui/button'
import { Logo } from '../Logo'
import { SocialMedia } from '../social-media'

export function Header() {
  return (
    <header className="z-10 max-w-screen-xl w-full items-center justify-between font-mono text-sm lg:flex fixed px-5">
      <Logo height={90} width={180} />

      <div className="flex items-center border-blue-800 border-[1px] rounded-full py-2 px-3 space-x-5 max-lg:hidden">
        <p className="px-5 py-3 bg-blue-800 font-bold rounded-full">Home</p>
        <Link
          href="#"
          className="px-5 py-3 text-blue-800 font-bold rounded-full"
        >
          Contato
        </Link>
      </div>

      <div className="flex items-center space-x-3 max-lg:justify-center">
        <SocialMedia />
        <Button className="bg-blue-800 py-6 font-bold hover:bg-blue-700 rounded-full">
          Solicite um orçamento
        </Button>
      </div>
    </header>
  )
}
