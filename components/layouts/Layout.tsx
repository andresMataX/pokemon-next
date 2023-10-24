import Head from 'next/head'

interface Props {}

export const Layout = ({}: Props) => {
  return (
    <>
      <Head>
        <title>Pokemon App</title>
        <meta name='author' content='Gatuto' />
        <meta name='description' content='Información del pokemon: ' />
      </Head>
    </>
  )
}
