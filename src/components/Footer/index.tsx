import Link from 'next/link'

import { Logo } from '../Logo'
import {
  Copyright,
  Instagram,
  Linkedin,
  Mail,
  MessageCircleMore,
} from 'lucide-react'
import { Button } from '../ui/button'

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-tr from-[#126E51] via-[#7ED957] to-yellow-200 rounded-t-3xl">
      <div className="flex flex-col max-w-screen-xl mx-auto">
        <div className="flex mt-10 justify-between max-md:flex-col max-md:text-center max-md:px-10">
          <div>
            <p className="font-bold text-xl">Acelere agora seu negócio</p>
            <p>Solicite um orçamento agora mesmo</p>
          </div>
          <Button className="bg-yellow-400 py-6 font-bold hover:bg-yellow-300 rounded-full">
            Solicitar um orçamento
          </Button>
        </div>
        <hr className="my-10 w-full bg-zinc-50/20 rounded-full" />
        <div className="grid max-md:grid-cols-1 grid-cols-3 gap-10">
          <div className="space-y-3 max-md:text-center">
            <div className="max-md:flex max-md:justify-center">
              <Logo height={90} width={180} />
            </div>
            <p className="text-sm">Solucionar é o nosso negócio.</p>
            <div className="flex items-center space-x-5 max-md:justify-center">
              <Link
                href="https://www.instagram.com/guaruba.dev"
                className="bg-zinc-100/50 hover:bg-zinc-100/30 rounded-full p-2"
              >
                <Instagram size={14} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/guaruba.dev"
                className="bg-zinc-100/50 hover:bg-zinc-100/30 rounded-full p-2"
              >
                <Linkedin size={14} />
              </Link>
            </div>
          </div>
          <div className="space-y-3 max-md:text-center">
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
          <div className="space-y-3 max-md:text-center">
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
        <div className="flex justify-between w-full max-md:flex-col mb-10">
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
