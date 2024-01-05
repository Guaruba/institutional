import { Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export function SocialMedia() {
  return (
    <div className="flex items-center space-x-3 max-md:justify-center">
      <Link href="#" className="bg-blue-800 hover:bg-blue-700 rounded-full p-2">
        <Github href="https://github.com/guaruba" size={18} />
      </Link>
      <Link
        href="https://www.instagram.com/guaruba.dev"
        className="bg-blue-800 hover:bg-blue-700 rounded-full p-2"
      >
        <Instagram size={18} />
      </Link>
      <Link href="#" className="bg-blue-800 hover:bg-blue-700 rounded-full p-2">
        <Linkedin
          href="https://www.linkedin.com/company/guaruba.dev"
          size={18}
        />
      </Link>
    </div>
  )
}
