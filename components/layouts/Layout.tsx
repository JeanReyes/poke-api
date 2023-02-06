import Head from "next/head";
import { Navbar } from "../ui";

interface LayoutsProps {
    children: JSX.Element;
    title?: string
}

const origin = (typeof window !== 'undefined') ? window.location.origin : '';

export const Layout = ({ children, title }: LayoutsProps) => {

    return (
        <>
            <Head>
                <title> { title || 'PokemonApp'} </title>
                <meta name="author" content="Jean Reyes"/>
                <meta name="description" content={`Información sobre el pokemon XXX`}/>
                <meta name="keywords" content={`XXX, pokemon, pokedex`}/>

                <meta property="og:title" content={`Información sobre el pokemon ${title}`} />
                <meta property="og:description" content={`Esta es la página de prueba en Next por Jean Reyes`} />
                <meta property="og:image" content={`${origin}/img/ceo-jean.jpeg`} />

            </Head>
            <Navbar/>
            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}
