import { useEffect, useState } from 'react';
import { Layout } from '@/components/layouts';
import { NoFavorites } from '@/components/ui';
import { pokemons } from '@/utils';
import { FavoritesPokemons } from '@/components/pokemon';


const Favorites = () => {
    const [favoritePokemon, setFavoritePokemon] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemon(pokemons())
    }, [])

    return (
        <Layout title='Página de favoritos'>
            <>
                {
                    favoritePokemon.length === 0 
                    ? (<NoFavorites/>)
                    : (<FavoritesPokemons pokemons={favoritePokemon}/>)
                }
                
            </>
        </Layout>
    )
}

export default Favorites;
