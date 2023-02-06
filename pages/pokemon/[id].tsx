import { useState } from 'react';
import { Layout } from '@/components/layouts';
import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces';
import { Button, Card, Grid, Text, Container, Image } from '@nextui-org/react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { existInFavorites, onToggleFavorite, pokemonInfo } from '@/utils';
import confetti from 'canvas-confetti';
import { viewPort } from '@/hooks';

interface Props {
   pokemon: Pokemon
}

const PokemonPage = ({ pokemon }: Props) => {
    const { name, id } = pokemon;
    const [exist, setExist] = useState(existInFavorites(id));
    const { isMobile } = viewPort();


    const onToggle = () => {
        onToggleFavorite(id);  
        setExist(!exist);

        if (exist) return;
        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0
            }
        })
    }
    
    return (
        <Layout title={`Pokemon - ${name}`}>
            <Grid.Container css={{marginTop: '5px'}} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card 
                        isHoverable
                        css={{padding:'30px'}}
                    >
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                                alt={pokemon.name}
                                width="100%"
                                height={300}
                            />
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{display: isMobile ? 'block' : 'flex', justifyContent: 'space-between'}}>
                            <Text h1 transform={'capitalize'}>{pokemon.name}</Text>
                            <Button
                                color='gradient'
                                ghost={!exist}
                                onClick={() => onToggle()}
                            >
                                {exist ? 'En favoritos' : 'Guardar en favaritos'}
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites:</Text>
                            <Container display='flex' direction={'row'} gap={0}>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={140}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={140}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={140}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={140}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    )
}


/**
 * es solo una forma de poder saber de antemano las paginas que va a solicitar el usuario
 * //getStaticPaths = para hacer llamadas asíncronas cuando el archivo es dinámico [id]dynamic route
 */

export const getStaticPaths: GetStaticPaths = async () => {
    const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`);

    return {
        paths: pokemon151.map((id) => ({ params: { id } })),
        fallback: 'blocking'
    }
}

// getStaticPaths pasa como parametro a getStaticProps y puedo hacer llamados a las api correspondiente
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params as { id: string };

    const pokemon = await pokemonInfo(id);

    if(!pokemon) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            pokemon
        },
        revalidate: 86400 // un dia para que se actualice la información de un contenido estatico ya existente
    }
}


export default PokemonPage
