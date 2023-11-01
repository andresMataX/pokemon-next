import pokeAPI from '@/api/pokeAPI'
import { Layout } from '@/components/layouts'
import { PokeListResp, Pokemon } from '@/interfaces'
import localFavorites from '@/utils/localFavorites'
import { Button, Card, CardBody, CardHeader, Image } from '@nextui-org/react'
import confetti from 'canvas-confetti'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useState } from 'react'

interface Props {
  pokemon: Pokemon
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(
    localFavorites.existsInFavorites(pokemon.id)
  )

  const onToogleFavorite = () => {
    localFavorites.toggleFavorites(pokemon.id)
    setIsInFavorites(!isInFavorites)

    if (isInFavorites) return

    confetti({
      particleCount: 100,
      spread: 160,
      origin: {
        y: 0,
        x: 1,
      },
      zIndex: 100,
      angle: -90,
    })
  }

  return (
    <Layout title={pokemon.name}>
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

            <Button
              color='secondary'
              variant={isInFavorites ? 'flat' : 'ghost'}
              onClick={onToogleFavorite}
            >
              {isInFavorites ? 'En Favoritos' : 'Guardar en Favoritos'}
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
  const { data } = await pokeAPI.get<PokeListResp>(`/pokemon?limit=151`)

  const pokeNames = data.results.map((pokemon) => pokemon.name)

  return {
    paths: pokeNames.map((name) => ({ params: { name } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string }

  const { data } = await pokeAPI.get<Pokemon>(`/pokemon/${name}`)

  const pokemon = {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  }

  return {
    props: {
      pokemon,
    },
  }
}

export default PokemonByNamePage
