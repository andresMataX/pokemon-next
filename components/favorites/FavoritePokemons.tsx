import { FC } from 'react'
import { FavoriteCardPokemon } from '.'

interface Props {
  favoritePokemons: number[]
}

export const FavoritePokemons: FC<Props> = ({ favoritePokemons }) => {
  return (
    <section className='grid grid-cols-4 gap-4'>
      {favoritePokemons.map((id) => (
        <FavoriteCardPokemon key={id} id={id} />
      ))}
    </section>
  )
}
