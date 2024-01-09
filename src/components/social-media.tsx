import { Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export function SocialMedia() {
  return (
    <div className="flex items-center space-x-3 max-md:justify-center text-zinc-50">
      <Link
        href="https://github.com/guaruba"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-800 hover:bg-blue-700 rounded-full p-2"
      >
        <Github size={18} />
      </Link>
      <Link
        href="https://www.instagram.com/guaruba.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-800 hover:bg-blue-700 rounded-full p-2"
      >
        <Instagram size={18} />
      </Link>
      <Link
        href="https://www.linkedin.com/company/guaruba.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-800 hover:bg-blue-700 rounded-full p-2"
      >
        <Linkedin size={18} />
      </Link>
    </div>
  )
}
