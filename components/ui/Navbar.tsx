import Image from 'next/image'

export const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-5 py-0 bg-gray-900'>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        alt='icono de la app'
        width={50}
        height={50}
      />

      <span className='text-3xl'>P</span>
      <span className='text-xl'>okemon</span>

      <div className='flex-1' />

      <span>Favoritos</span>
    </div>
  )
}
