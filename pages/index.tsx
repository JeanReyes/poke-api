import { Layout } from '@/components/layouts';
import { GetStaticProps } from 'next';
import { pokeApi } from '@/api';
import { PokemonList, SmallPokemon } from '@/interfaces';
import { Grid } from '@nextui-org/react';
import { PokemonCard } from '@/components/pokemon';

interface Props {
    pokemons: SmallPokemon[]
}

export default function HomePage({pokemons}: Props) {
    
    return (
        <>
            <Layout
                title='lista de pokemones'
            >
                <Grid.Container gap={ 2 } justify={'flex-start'}>
                    {
                        pokemons.map((pokemon) => (<PokemonCard key={pokemon.id} pokemon={pokemon}/>))
                    }
                </Grid.Container>
                
            </Layout>
        </>
    )
}

// para hacer la carga de toda la info que necesita la pagina
export const getStaticProps: GetStaticProps = async (ctx) => {
    const { data } = await pokeApi.get<PokemonList>('/pokemon?limit=151');

    const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => {
        return {
            ...pokemon,
            id: i + 1,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
        }
    });
 
    return {
        props: {
            pokemons: pokemons
        }
    }
}

