import Link from 'next/link'

import { Logo } from '../Logo'
import { Copyright, Mail, MessageCircleMore } from 'lucide-react'
import { SocialMedia } from '../social-media'
import { BudgetButton } from '../buttons/budget-button'

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-tr from-[#126E51] via-[#7ED957] to-yellow-200 rounded-t-3xl px-5">
      <div className="flex flex-col max-w-screen-xl mx-auto">
        <div className="flex mt-10 justify-between max-md:flex-col max-md:text-center max-md:px-10 max-md:space-y-5">
          <div className="text-zinc-50">
            <p className="font-bold text-xl">Acelere agora seu negócio</p>
            <p>Solicite um orçamento agora mesmo</p>
          </div>
          <BudgetButton />
        </div>
        <hr className="my-10 w-full bg-zinc-50/20 rounded-full" />
        <div className="grid max-md:grid-cols-1 grid-cols-3 gap-10">
          <div className="space-y-3 max-md:text-center">
            <div className="max-md:flex max-md:justify-center">
              <Logo height={90} width={180} />
            </div>
            <p className="text-sm text-zinc-50">
              Solucionar é o nosso negócio.
            </p>

            <SocialMedia />
          </div>
          <div className="space-y-3 max-md:text-center text-zinc-50">
            <b>Institucional</b>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Sobre nós</Link>
              </li>
              <li>
                <Link href="#">Contato</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 max-md:text-center text-zinc-50">
            <b>Contatos</b>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="flex max-md:justify-center items-center space-x-2"
                >
                  <Mail size={14} />
                  <p>lucasviniciusaalves@rsa.bet</p>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex max-md:justify-center items-center space-x-2"
                >
                  <MessageCircleMore size={14} />
                  <p>+55 88 9290-0814</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-10 w-full bg-zinc-50/20 rounded-full" />
        <div className="flex justify-between w-full max-md:flex-col mb-10 text-zinc-50">
          <div className="flex space-x-1 text-sm items-center max-md:justify-center">
            <Copyright size={14} />{' '}
            <p>
              Guaruba {new Date().getFullYear()}. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex space-x-2 max-md:justify-center">
            <p>Feito com ❤️ por:</p> <b className="text-yellow-200">Guaruba</b>
          </div>
        </div>
      </div>
    </footer>
  )
}
