
export const onToggleFavorite = (id: number) => { 
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (favorites.includes(id)) {
        favorites = favorites.filter(pokeId => pokeId !== id); // lo saco del arreglo
    } else {
        favorites.push(id)
    }

    localStorage.setItem('favorites', JSON.stringify(favorites)); // grabo los cambios
}

export const existInFavorites = (id: number) => {
    if (typeof window === 'undefined') return false;
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(id); // si esta = true sino = false
}

export const pokemons = () => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

export const isMobile = () => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 500 ? true : false;
}

