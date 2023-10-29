import { SmallPokemon } from '@/interfaces'
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FC } from 'react'

interface Props {
  pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter()

  const onClick = () => {
    router.push(`/pokemon/${pokemon.id}`)
  }

  return (
    <Card
      className='py-4 hover:scale-95 transition-all duration-300 ease-in-out'
      isPressable
      onPress={onClick}
    >
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
        <p className='text-tiny uppercase font-bold'>Pokemon</p>
        <small className='text-default-500'>ID: #{pokemon.id}</small>
        <h4 className='font-bold text-large capitalize'>{pokemon.name}</h4>
      </CardHeader>

      <CardBody className='overflow-visible py-2 flex justify-center items-center'>
        <Image
          alt='Card background'
          className='object-cover rounded-xl'
          src={pokemon.image}
          width={270}
        />
      </CardBody>
    </Card>
  )
}
