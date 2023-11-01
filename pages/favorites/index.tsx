import { FavoritePokemons } from '@/components/favorites'
import { Layout } from '@/components/layouts'
import { NoFavorites } from '@/components/ui'
import localFavorites from '@/utils/localFavorites'
import { useEffect, useState } from 'react'

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.getPokemons())
  }, [])

  return (
    <Layout title='Favoritos'>
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons favoritePokemons={favoritePokemons} />
      )}
    </Layout>
  )
}

export default FavoritesPage
