import pokeAPI from '@/api/pokeAPI'
import { Layout } from '@/components/layouts'
import { PokeListResp, SmallPokemon } from '@/interfaces/pokeAPI'
import { GetStaticProps, NextPage } from 'next'

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Listado de Pokémons'>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            # {pokemon.id} - {pokemon.name}
          </li>
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

  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg

  return {
    props: {
      pokemons,
    },
  }
}

export default HomePage
