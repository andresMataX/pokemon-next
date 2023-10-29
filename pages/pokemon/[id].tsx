import pokeAPI from '@/api/pokeAPI'
import { Layout } from '@/components/layouts'
import { Pokemon } from '@/interfaces'
import { Button, Card, CardBody, CardHeader, Image } from '@nextui-org/react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title='Pokemon 1'>
      <section className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        <Card className='py-4'>
          <CardBody className='overflow-visible py-2'>
            <Image
              alt={pokemon.name}
              className='object-cover rounded-xl'
              src={pokemon.sprites.other?.dream_world.front_default || ''}
              width='100%'
            />
          </CardBody>
        </Card>

        <Card className='col-span-2'>
          <CardHeader className='flex justify-between'>
            <h1 className='text-5xl font-bold capitalize'>{pokemon.name}</h1>

            <Button color='secondary' variant='ghost'>
              Guardar en Favoritos
            </Button>
          </CardHeader>

          <CardBody>
            <h2 className='text-2xl font-thin'>Sprites</h2>

            <div className='flex justify-between'>
              <Image
                alt={pokemon.name}
                className='object-cover rounded-xl'
                src={pokemon.sprites.front_default}
                width={100}
                height={100}
              />

              <Image
                alt={pokemon.name}
                className='object-cover rounded-xl'
                src={pokemon.sprites.back_default}
                width={100}
                height={100}
              />

              <Image
                alt={pokemon.name}
                className='object-cover rounded-xl'
                src={pokemon.sprites.front_shiny}
                width={100}
                height={100}
              />

              <Image
                alt={pokemon.name}
                className='object-cover rounded-xl'
                src={pokemon.sprites.back_shiny}
                width={100}
                height={100}
              />
            </div>
          </CardBody>
        </Card>
      </section>
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
