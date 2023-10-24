import { Layout } from '@/components/layouts'
import { Button } from '@nextui-org/react'

export default function HomePage() {
  return (
    <Layout title='Listado de Pokémons'>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>

      <Button color='primary'>Hola mundo</Button>
    </Layout>
  )
}
