import { Link, Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import NextLink from 'next/link';


export const Navbar = () => {

    const { theme } = useTheme();
    
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 20px',
            backgroundColor: theme?.colors.gray200.value
        }}>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="icono de la app"
                width={70}
                height={70}
            />
            <NextLink href={"/"} passHref>
                <div className='container-title'>
                    <Text color='white' h2>P</Text>
                    <Text color='white' h3>okemon</Text>
                </div>
            </NextLink>
            <Spacer css={{
                flex: 1
            }}/>
            <NextLink href={"/favorites"} passHref>
                <Text color='white' h3>Favoritos</Text>
            </NextLink>
            <style jsx>{`
                .container-title {
                    display: block ruby;
                }
            `}</style>
        </div>
    )
}
