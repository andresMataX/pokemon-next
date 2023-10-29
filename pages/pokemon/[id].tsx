import pokeAPI from '@/api/pokeAPI'
import { Layout } from '@/components/layouts'
import { Pokemon } from '@/interfaces'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title='Pokemon 1'>
      <h1 className='text-5xl font-bold capitalize'>{pokemon.name}</h1>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((_, i) => `${i + 1}`)

  return {
    paths: pokemons151.map((id) => ({ params: { id } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }

  const { data } = await pokeAPI.get<Pokemon>(`/pokemon/${id}`)

  return {
    props: {
      pokemon: data,
    },
  }
}

export default PokemonPage
