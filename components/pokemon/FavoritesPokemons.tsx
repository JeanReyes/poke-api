import React from 'react'
import { Card, Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
    pokemons: number [];
}

export const FavoritesPokemons = ({ pokemons }: Props) => {
    const router = useRouter()

    const handleClick = (id: number) => {
        router.push(`pokemon/${id}`)   
    }

    return (
        <Grid.Container gap={2} direction={'row'} justify={'flex-start'}>
            {
                pokemons.map((id) => (
                    <Grid xs={6} sm={3} md={2} xl={1} key={id} onClick={() => handleClick(id)}>
                        <Card isHoverable css={{
                            padding: 10
                        }}>
                            <Card.Image
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                                width={'100%'}
                                height={140}
                            />
                        </Card>
                    </Grid>
                ))
            }
        </Grid.Container>
    )
}
