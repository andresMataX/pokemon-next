import Head from 'next/head'
import { FC } from 'react'

interface Props {
  children: JSX.Element | JSX.Element[]
  title?: string
}

export const Layout: FC<Props> = ({ children, title }) => {
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
      </Head>

      <main>{children}</main>
    </>
  )
}