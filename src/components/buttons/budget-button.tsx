import Link from 'next/link'
import { Button } from '../ui/button'

export function BudgetButton() {
  return (
    <Link
      href="https://wa.me/5588992900814?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a+Guaruba."
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button className="bg-blue-800 text-zinc-50 py-6 font-bold hover:bg-blue-700 rounded-full">
        Solicite um orçamento
      </Button>
    </Link>
  )
}
