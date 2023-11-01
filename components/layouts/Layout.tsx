import Head from 'next/head'
import { FC } from 'react'
import { Navbar } from '../ui'

interface Props {
  children: JSX.Element | JSX.Element[]
  title?: string
}

export const Layout: FC<Props> = ({ children, title }) => {
  const origin = typeof window !== 'undefined' ? window.location.origin : ''

  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='author' content='Gatuto' />
        <meta
          name='description'
          content={`Información del pokemon: ${title}`}
        />
        <meta name='keywords' content={`${title}, pokemon, pokemon app`} />
        <meta
          property='og:title'
          content={`Información del pokemon: ${title}`}
        />
        <meta
          property='og:description'
          content={`Esta es la página de: ${title}`}
        />
        <meta property='og:image' content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main className='container mx-auto py-8'>{children}</main>
    </>
  )
}
