import pokeAPI from '@/api/pokeAPI'
import { Layout } from '@/components/layouts'
import { PokemonCard } from '@/components/pokemon'
import { PokeListResp, SmallPokemon } from '@/interfaces/pokeAPI'
import { GetStaticProps, NextPage } from 'next'

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Listado de Pokémons'>
      <ul className='grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-5'>
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </ul>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeAPI.get<PokeListResp>('/pokemon?limit=151')

  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => {
    return {
      ...pokemon,
      id: i + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        i + 1
      }.svg`,
    }
  })

  return {
    props: {
      pokemons,
    },
  }
}

export default HomePage
