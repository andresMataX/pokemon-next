const toggleFavorites = (id: number) => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  )

  if (favorites.includes(id)) {
    favorites = favorites.filter((fav) => fav !== id)
  } else {
    favorites.push(id)
  }

  localStorage.setItem('favorites', JSON.stringify(favorites))
}

const existsInFavorites = (id: number): Boolean => {
  if (typeof window === 'undefined') return false

  const favorites: number[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  )

  return favorites.includes(id)
}

const getPokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]')
}

export default {
  toggleFavorites,
  existsInFavorites,
  getPokemons,
}
