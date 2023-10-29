import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-5 py-0 bg-gray-900'>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        alt='icono de la app'
        width={50}
        height={50}
      />

      <Link href='/' passHref>
        <span className='text-3xl'>P</span>
        <span className='text-xl'>okemon</span>
      </Link>

      <div className='flex-1' />

      <Link href='/favorites'>Favoritos</Link>
    </div>
  )
}
