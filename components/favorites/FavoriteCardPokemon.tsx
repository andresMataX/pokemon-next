import { Card, Image } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FC } from 'react'

interface Props {
  id: number
}

export const FavoriteCardPokemon: FC<Props> = ({ id }) => {
  const router = useRouter()

  const onFavoriteClick = () => {
    router.push(`/pokemon/${id}`)
  }

  return (
    <Card
      isHoverable
      isPressable
      className='flex justify-center items-center p-2'
      onClick={onFavoriteClick}
    >
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        width='100%'
        height={140}
        alt={`Imagen de ${id}`}
      />
    </Card>
  )
}
