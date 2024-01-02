import Image from 'next/image'

import guarubaLogoHorizontal from '@/assets/logos/guarubaHorizontal.png'
import Link from 'next/link'

interface LogoProps {
  height: number
  width: number
}

export function Logo({ height, width }: LogoProps) {
  return (
    <Link href="/">
      <Image
        src={guarubaLogoHorizontal}
        alt="Guaruba Logo"
        height={height}
        width={width}
      />
    </Link>
  )
}
