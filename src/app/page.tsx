import Image from 'next/image'

import founder from '../assets/founder.jpg'

export default function Home() {
  return (
    <main className="w-full">
      <div className="min-h-screen w-full bg-gradient-to-tr from-[#126E51] via-[#7ED957] to-yellow-200 rounded-b-3xl"></div>
      <div>testando</div>
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
      <div className="lg:flex w-full justify-around max-lg:space-y-3 lg:space-x-5 p-10">
        <div className="text-blue-800 py-5 space-y-3">
          <p className="text-xs font-semibold">FUNDADOR DA GUARUBA</p>
          <p className="text-lg font-bold">Lucas Vinicius</p>
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
      <div className="rounded-3xl shadow-md bg-zinc-100 m-10 lg:m-20 p-5 space-y-3">
        <p className="text-2xl text-center text-blue-800 font-semibold">
          Parceiros
        </p>
        <hr />
        <div className="flex justify-center">
          {/* <Image src={rsaLogo} alt="rsa-logo" height={150} width={150} /> */}
        </div>
      </div>
    </main>
  )
}
