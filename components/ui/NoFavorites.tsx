import { Image } from '@nextui-org/react'

export const NoFavorites = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-8'>
      <h1 className='text-6xl font-bold'>No hay favoritos</h1>

      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/255.svg'
        width={150}
        height={150}
        style={{ opacity: 0.1 }}
      />
    </div>
  )
}
