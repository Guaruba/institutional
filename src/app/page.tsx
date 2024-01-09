import Image from 'next/image'

import founder from '../assets/founder.jpg'

import sgaLogo from '../assets/partners/sga-logo.png'
import { BadgeHelp, Gauge, Rocket, Users } from 'lucide-react'

export default function Home() {
  return (
    <main className="w-full">
      <div className="min-h-screen w-full bg-gradient-to-tr from-[#126E51] via-[#7ED957] to-yellow-200 rounded-b-3xl"></div>
      <div className="grid lg:grid-cols-2 gap-5 p-10 lg:p-36 bg-white">
        <div className="rounded-3xl shadow-md text-blue-800 p-10 space-y-5">
          <Users size={50} />
          <p className="font-semibold text-xl">Time apaixonado e qualificado</p>
          <p>
            Nós somos uma equipe de profissionais apaixonados por tecnologia e
            que trabalhamos para que sua empresa tenha uma presença digital
            forte e que atraia mais clientes.
          </p>
        </div>
        <div className="rounded-3xl shadow-md text-blue-800 p-10 space-y-5">
          <BadgeHelp size={50} />
          <p className="font-semibold text-xl">Suporte 24/7</p>
          <p>
            Nossos profissionais de suporte são treinados e qualificados para
            atender os mais diversos cenários e necessidades.
          </p>
        </div>
        <div className="rounded-3xl shadow-md text-blue-800 p-10 space-y-5">
          <Rocket size={50} />
          <p className="font-semibold text-xl">Escalabilidade sem limites</p>
          <p>
            Expanda seu negócio sem preocupação! Nossa plataforma está
            construída sob uma infraestrutura de computação, segura, confiável e
            escalável.
          </p>
        </div>
        <div className="rounded-3xl shadow-md text-blue-800 p-10 space-y-5">
          <Gauge size={50} />
          <p className="font-semibold text-xl">Maior rapidez de melhorias</p>
          <p>
            Realizamos centenas de atualizações e melhorias a cada ano para
            ajudar as operações a ficar na vanguarda da indústria.
          </p>
        </div>
      </div>
      {/* Market */}
      <div className="bg-blue-800 lg:flex w-full justify-center max-lg:space-y-3 lg:space-x-5 py-8 text-zinc-50">
        <div className="text-center">
          <p className="text-4xl font-bold">+25</p>
          <p className="text-sm">clientes satisfeitos</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold">+3</p>
          <p className="text-sm">anos de experiência em SAAS</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold">+5</p>
          <p className="text-sm">mil faturados por mês</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold">+1</p>
          <p className="text-sm">mil investidos todos os meses</p>
        </div>
      </div>
      {/* Founder */}
      <div className="lg:flex w-full justify-around max-lg:space-y-3 lg:p-36 lg:space-x-5 p-10 bg-zinc-200">
        <div className="text-blue-800 py-5 space-y-3">
          <p className="text-sm font-semibold">FUNDADOR DA GUARUBA</p>
          <p className="text-xl font-bold">Lucas Vinicius</p>
          <p>
            Oi, sou o Lucas Vinicius, tecnologo em Analise e Desenvolvimento de
            sistemas onde por 3 anos fui sócio fundador da Royal Bets,
            concorrendo a prêmios nacionais e transformando o site em um dos
            maiores do Brasil. Hoje sou sócio fundador da Guaruba, uma empresa
            focada em solucionar problemas de empresas que estão começando ou
            que já estão no mercado.
            <br />
            <br />
            A Guaruba é uma empresa focada em solucionar problemas de empresas
            que estão começando ou que já estão no mercado. Nós trabalhamos com
            desenvolvimento de sites, aplicativos, sistemas e marketing digital
            para que sua empresa tenha uma presença digital forte e que atraia
            mais clientes.
            <br />
            <br />
            Nossa missão é fazer com que sua empresa tenha uma presença digital
            forte e que atraia mais clientes. Nós trabalhamos com
            desenvolvimento de sites, aplicativos, sistemas e marketing digital
            para que sua empresa tenha uma presença digital forte e que atraia
            mais clientes.
          </p>
        </div>
        <Image
          src={founder}
          alt="founder-photo"
          className="rounded-3xl"
          height={400}
          width={400}
        />
      </div>
      {/* Partners */}
      <div className="bg-zinc-200 p-10 lg:px-20">
        <div className="rounded-3xl shadow-xl p-5 space-y-3 bg-zinc-50">
          <p className="text-2xl text-center text-blue-800 font-semibold">
            Parceiros
          </p>
          <hr />
          <div className="flex justify-center space-x-3">
            <div className="rounded-full bg-zinc-800">
              <Image
                src={sgaLogo}
                className="m-5 lg:h-40 lg:w-40 h-10 w-20"
                alt="rsa-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
