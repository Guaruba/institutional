import Link from 'next/link'

import { Instagram, Linkedin } from 'lucide-react'
import { Button } from '../ui/button'
import { Logo } from '../Logo'

export function Header() {
  return (
    <header className="z-10 max-w-screen-xl w-full items-center justify-between font-mono text-sm lg:flex fixed">
      <Logo height={90} width={180} />

      <div className="flex items-center border-[1px] rounded-full py-2 px-3 space-x-5">
        <p className="px-5 py-3 bg-zinc-100/50 font-bold rounded-full">Home</p>
        <Link href="#">Contato</Link>
      </div>

      <div className="flex items-center space-x-5">
        <Link
          href="https://www.instagram.com/guaruba.dev"
          className="bg-zinc-100/50 hover:bg-zinc-100/30 rounded-full p-2"
        >
          <Instagram size={18} />
        </Link>
        <Link
          href="#"
          className="bg-zinc-100/50 hover:bg-zinc-100/30 rounded-full p-2"
        >
          <Linkedin
            href="https://www.linkedin.com/company/guaruba.dev"
            size={18}
          />
        </Link>
        <Button className="bg-yellow-400 py-6 font-bold hover:bg-yellow-300 rounded-full">
          Solicite um orçamento
        </Button>
      </div>
    </header>
  )
}
